module.exports = {


  friendlyName: 'New battle',


  description: '',


  inputs: {
  },


  exits: {

  },


  fn: async function () {
    //create a battle
    var battle = await Battle.create({ round: 1, initiator: this.req.me.id, game: this.req.me.currentGame }).fetch();
    var character = await Character.findOne({ game: this.req.me.currentGame, player: this.req.me.id });
    //add current player as a participant
    await Battle.addToCollection(battle.id,'participants').members([character.id]);
    return this.res.redirect('/owbattle/' + battle.id);
  }


};
