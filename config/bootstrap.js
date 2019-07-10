/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your
 * Sails app gets lifted.
 */
module.exports.bootstrap = async function (done) {
  var path = require('path');

  var drop = sails.config.models.migrate === 'drop';
  var safe = sails.config.models.migrate === 'safe';
  var test = sails.config.environment === 'test';
  var prod = process.env.NODE_ENV === 'production';

  if (!drop && !test) {
    if (prod || safe) {
      sails.log.warn('Since we are running with migrate: \'safe\' and/or NODE_ENV=production (in the "' + sails.config.environment + '" Sails environment, to be precise), skipping the rest of the bootstrap to avoid data loss...');
      return done();
    }
  } else {
    sails.log('Dropping all data because it was forced...  (either `--drop` or `--environment=test` was used)');
    for (let identity in sails.models) {
      await sails.models[identity].destroy({});
    }
  }

  var files = require('include-all')({
    dirname: __dirname + '/../bootstrap',
    filter: /^(\d+(\.\d+)?_.*)\.js$/,
    excludeDirs : /^\.(git|svn)$/,
    optional: true
  });

  var bootstrapLastRunInfoPath = path.resolve(sails.config.appPath, '.tmp/bootstrap-lastrun.json');
  var lastrun = await sails.helpers.fs.readJson(bootstrapLastRunInfoPath)
    .tolerate('doesNotExist'); // (it's ok if the file doesn't exist yet-- just keep going.)
  var update = false;
  var moduleError;
  if(!lastrun || drop){
    lastrun = {};
  }

  try {
    for (var filename in files){
      //await runModule({name: filename, fn: files[filename]});
      var module = files[filename];
      var sequence = Number(filename.split('_')[0]);

      if(_.isFunction(module)){
        if (lastrun.lastRunSequence !== undefined && lastrun.lastRunSequence >= sequence) {
          sails.log('Skipping bootstrap module ' + filename + ' (because it\'s already been run)');
        } else {
          sails.log('Running bootstrap module ' + filename + '...' );
          try{
            await module();
            sails.log('Completed processing bootstrap module ' + filename + ' successfully.');
            lastrun.lastRunSequence = sequence;
            update = true;
          } catch (err){
            throw 'Module (' + filename + ') failed: ' + err;
          }
        }
      } else {
        throw 'Invalid bootstrap module: ' + filename + '.  Please see README.txt in the bootstrap directory.';
      }
    }
  } catch (err) {
    moduleError = err;
  }

  if(update){
    await sails.helpers.fs.writeJson.with(
      {
        destination: bootstrapLastRunInfoPath, json: {
          lastRunSequence: lastrun.lastRunSequence,
          lastRunAt: Date.now()
        },
        force: true
      })
      .tolerate((err) => {
        sails.log.warn('For some reason, could not write bootstrap version .json file.  This could be a result of a problem with your configured paths, or, if you are in production, a limitation of your hosting provider related to `pwd`.  As a workaround, try updating app.js to explicitly pass in `appPath: __dirname` instead of relying on `chdir`.  Current sails.config.appPath: `' + sails.config.appPath + '`.  Full error details: ' + err.stack + '\n\n(Proceeding anyway this time...)');
      });
  }
  if(moduleError){
    throw moduleError;
  }
  done();
};
