module.exports = {


  friendlyName: 'View game home',


  description: 'Display "Game home" page.',

  inputs: {
    gameId:                 {
      type: 'number',
      required: false
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/game/game-home'
    }
  },


  fn: async function (inputs) {
    inputs.gameId = inputs.gameId?inputs.gameId:this.req.me.currentGame;
    if(!inputs.gameId){ return this.res.redirect('/'); }

    var game = await Game.findOne({ id: inputs.gameId }).populate('players');

    if(game){
      //verify player can join game
      if(!_.find(game.players, {id: this.req.me.id})){
        return this.res.redirect('/');
      }
      if(inputs.gameId !== this.req.me.currentGame){
        await User.update({id: this.req.me.id}, {currentGame: inputs.gameId});
      }
    } else {
      return this.res.redirect('/');
    }

    var character = await Character.findOne({ player: this.req.me.id, game: inputs.gameId });

    // Respond with view.
    return {
      gameId: inputs.gameId,
      admin: game.owner === this.req.me.id,
      character: character
    };

  }


};
