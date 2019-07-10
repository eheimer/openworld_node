module.exports = {


  friendlyName: 'View player home',


  description: 'Display "Player home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/player-home'
    }

  },

  fn: async function () {
    //clear current game
    await User.update({ id: this.req.me.id }, { currentGame: null });
    var player = await User.findOne({ id: this.req.me.id }).populate('games');
    for(var game of player.games){
      game.character = await Character.findOne({player: this.req.me.id, game: game.id});
      game.owner = game.owner === this.req.me.id;
    }

    // Respond with view.
    return {
      playerName: this.req.me.fullName,
      games: player.games,
    };
  }
};
