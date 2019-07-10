module.exports = {


  friendlyName: 'Delete battle',


  description: '',


  inputs: {
    battleId: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    //TODO: validate the requester has authority to delete
    await Battle.destroyOne({
      id: inputs.battleId
    });

    Battle.publishUpdate(inputs.battleId, {
      action: 'battleDeleted'
    });
    //TODO: should also publish changes to the game (this.req.me.currentGame)
    var battles = await Battle.find({
      game: this.req.me.currentGame
    });
    Battle.publishUpdate(this.req.me.currentGame, {
      battles
    });

    return exits.success();
  }


};
