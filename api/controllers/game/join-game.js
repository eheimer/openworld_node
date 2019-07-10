module.exports = {


  friendlyName: 'Join game',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    if(!this.req.me.currentGame) { return; }
    var game = await Game.findOne({id: this.req.me.currentGame}).populate('players');
    if(!game) { return; }
    if(!_.find(game.players,{id: this.req.me.id})){ return; }

    Game.subscribe(this.req, [game.id]);
    Game.publish([game.id],{ game: game, battles: await Battle.find({ game: game.id }) });

    // All done.
    return;

  }


};
