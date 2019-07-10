module.exports = {


  friendlyName: 'Get details',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    return exits.success(
      await CharacterService.prepForDelivery(await Character.findOne({
        player: this.req.me.id,
        game: this.req.me.currentGame
      }), true)
    );
  }
};
