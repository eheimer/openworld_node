module.exports = {


  friendlyName: 'View and manage game players',


  description: 'Display "Game players" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/game/game-players'
    }

  },


  fn: async function () {
    var game = await Game.findOne({id: this.req.me.currentGame}).populate('players');
    if(!game){
      return this.res.redirect('/');
    }
    var unplayers = [];

    if(game.owner === this.req.me.id){
      //TODO: this is terrible, and should be fixed when the method of adding players to a game is fixed
      unplayers = await User.find({ id: { '!=': _.map(game.players,'id')}}).select(['id','fullName']);
    }

    // Respond with view.
    return {
      gameId: this.req.me.currentGame,
      players: game.players,
      admin: game.owner === this.req.me.id,
      availablePlayers: unplayers
    };

  }


};
