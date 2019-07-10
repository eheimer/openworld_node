module.exports = {


  friendlyName: 'Delete game',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var gameId = this.req.me.currentGame;
    var game = await Game.findOne({id: gameId }).populate('battles');
    if(game.owner === this.req.me.id){
      for(var battle of game.battles){
        await CreatureInstance.destroy({ battleAsEnemy: battle.id });
        await Battle.destroyOne({ id: battle.id });
      }
      var characters = await Character.find({ game: gameId });
      await Inventory.destroy({ id: _.map(characters,'inventory')});
      await Character.destroy({ game: gameId });
      await Game.destroyOne({id: gameId });
    }

    return exits.success();
  }

};
