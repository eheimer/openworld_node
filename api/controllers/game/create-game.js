module.exports = {


  friendlyName: 'Create game',


  description: '',


  inputs: {
    gameName: {
      type: 'string',
      required: true,
    }

  },


  exits: {
    gameExists: {
      description: `The player already has a game with the provided name.`,
      responseType: 'error'
    }
  },


  fn: async function (inputs) {
    var me = await User.findOne({id: this.req.me.id}).populate('games');
    if(_.find(me.games, {name: inputs.gameName})){
      throw 'gameExists';
    }

    var game = await Game.create({name: inputs.gameName, owner: this.req.me.id}).fetch();
    await User.addToCollection(this.req.me.id, 'games').members([game.id]);

    // All done.
    return;

  }


};
