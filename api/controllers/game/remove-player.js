module.exports = {


  friendlyName: 'Remove player',


  description: '',


  inputs: {
    playerId: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var gameId = this.req.me.currentGame;
    if(!gameId){ return this.res.redirect('/');}
    var game = await Game.findOne({id: gameId});
    if(game.owner === this.req.me.id){
      await Game.removeFromCollection(gameId,'players').members([inputs.playerId]);
    }

    var players = (await Game.findOne({ id: gameId }).populate('players')).players;

    //TODO: this is terrible, and should be fixed when the method of adding players to a game is fixed
    var unplayers = await User.find({ id: { '!=': _.map(players,'id')}}).select(['id','fullName']);

    Game.publish([gameId], { players, unplayers });

    // All done.
    return;

  }


};
