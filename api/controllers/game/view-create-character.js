module.exports = {


  friendlyName: 'View create character',


  description: 'Display "Create character" page.',

  inputs: {
    gameId: {
      type: 'number',
      required: true
    }
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/game/create-character'
    }

  },


  fn: async function (inputs) {
    var game = await Game.findOne({ id: inputs.gameId }).populate('players');
    if(game){
      //verify player can join game
      if(!_.find(game.players, {id: this.req.me.id})){
        return this.res.redirect('/');
      }
      if(game.id !== this.req.me.currentGame){
        await User.update({ id: this.req.me.id }, { currentGame: game.id });
      }
    } else {
      return this.res.redirect('/');
    }

    // Respond with view.
    return {
      gameName: game.name,
      gameId: game.id,
    };

  }


};
