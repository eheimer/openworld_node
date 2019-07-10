module.exports = {


  friendlyName: 'Update game name',


  description: '',


  inputs: {
    name: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var gameId = this.req.me.currentGame;
    var game = await Game.findOne({id: gameId});
    if(game.owner === this.req.me.id){
      await Game.update({id: gameId}, {name: inputs.name});
    }

    Game.publish([gameId], { gameName: inputs.name });

    return exits.success();
  }


};
