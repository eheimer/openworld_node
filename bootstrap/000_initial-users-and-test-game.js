module.exports = async function () {
  var eric = await User.create(
    {emailAddress: 'eric@heimerman.org', fullName: 'Eric', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('eric')}
  ).fetch();
  var joel = await User.create(
    {emailAddress: 'zphenom@gmail.com', fullName: 'Joel', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('joel')},
  ).fetch();
  var don = await User.create(
    {emailAddress: 'sirbandersnatch@gmail.com', fullName: 'Don', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('don')},
  ).fetch();

  var game = await Game.create({ name: 'Play Test', owner: eric.id }).fetch();
  await Game.addToCollection(game.id,'players').members([eric.id,don.id,joel.id]);

};
