module.exports = {

  friendlyName: 'Rebuild Model Typings',


  description: 'Rebuild the openworld.d.ts typings file from the model definition files located in /api/models/',


  fn: async function (inputs, exits) {

    var getType = function (def, typeMap) {
      if (def.collection && typeMap[def.collection]) {
        return 'I' + typeMap[def.collection] + '[] | number[]';
      } else if (def.model && typeMap[def.model]) {
        return 'I' + typeMap[def.model] + ' | number';
      } else if (def.type) {
        if (def.type.toLowerCase() === 'ref') {
          return 'any';
        } else {
          return def.type;
        }
      } else {
        return 'any';
      }
    };

    var getFunctionType = function (name, def) {
      let declaration = def.toString().split('{')[0];
      var argRegex = /\(([^)]+)\)/;
      var args = argRegex.exec(declaration)[1].split(',');
      var type = `  ` + name + `(`;
      for (let i = 0; i < args.length; i++) {
        if (i > 0) {
          type += `, `;
        }
        type += args[i].trim() + `: any`;
      }
      type += `): `;
      if (declaration.trim().startsWith('async')) {
        type += `Promise<any>;`;
      } else {
        type += `any;`;
      }
      return type;
    };

    var path = require('path');
    var includeAll = require('include-all');

    var outfile = path.resolve(sails.config.appPath, 'api/openworld.d.ts');

    var models = includeAll({
      dirname: sails.config.paths.models,
      filter: /^(.+)\.(?:(?!md|txt|ts).)+$/,
      replaceExpr: /^.*\//,
      optional: true,
      flatten: true
    });

    var typings =
      `/**
 * openworld.d.ts 
 *
 * Typescript typings for all of the models defined in /api/models
 *
 * > This file was automatically generated.
 * > (To regenerate, run \`sails run rebuild-model-typings\`)
 */

import { Model } from "waterline";

`;

    // a map of lowercase names to proper case type names
    // sails uses an all-lower-case name to define its models,
    // but for the purposes of typescript, we need the proper
    // case names to define the typings.
    var typeMap = {};

    for (let model in models) {
      typeMap[model.toLowerCase()] = model;
    }

    for (let model in models) {
      //create a type definition for model
      typings += `export interface I` + model + ` extends Model {\n`;
      let def = models[model];
      const propTemplate = `  {prop}: {type};\n`;
      //process the props
      for (let prop in def.attributes) {
        let def = models[model].attributes[prop];
        typings += propTemplate.replace('{prop}', prop).replace('{type}', getType(def, typeMap));
      }
      //process the methods and non-persistent props, if any
      for (let prop in def) {
        if (prop !== 'attributes') {
          if (_.isFunction(def[prop])) {
            typings += getFunctionType(prop, def[prop]) + `\n`;
          } else {
            typings += propTemplate.replace('{prop}', prop).replace('{type}', getType(def[prop], typeMap));
          }
        }
      }
      typings += `}\n`;
    }

    // This doesn't actually work:
    // for (var type in typeMap) {
    //   typings += `export declare var ` + typeMap[type] + `: I` + typeMap[type] + `;\n`;
    // }

    // Smash and rewrite the `openworld.d.ts` file in the api folder to
    // reflect the latest set of available models actions exposed by this Sails
    // app (as determined by its routes above)
    await sails.helpers.fs.write.with({
      destination: outfile,
      string: typings,
      force: true
    });

    sails.log.info('--');
    sails.log.info('Successfully rebuilt typescript model typings file: ' + outfile);

    return exits.success();
  },


};
