module.exports = {


  friendlyName: 'Join battle',


  description: '',


  inputs: {
    battleId: {
      type: 'number',
      required: true,
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var battle = await Battle.findOne({
      id: inputs.battleId
    }).populate('participants');

    if (!battle) {
      return;
    }
    if (battle.game !== this.req.me.currentGame) {
      return;
    }

    if (!_.find(battle.participants, {
        id: this.req.me.id
      })) {
      var char = await Character.findOne({
        player: this.req.me.id,
        game: this.req.me.currentGame
      });
      await Battle.addToCollection(inputs.battleId, 'participants').members([char.id]);
    }

    Battle.subscribe(this.req, [inputs.battleId]);
    Battle.publishUpdate(inputs.battleId);

    return;
  }


};
