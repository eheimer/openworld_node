module.exports = {


  friendlyName: 'Repair item',


  description: '',


  inputs: {
    itemId: {
      type: 'number',
    },
    itemType: {
      type: 'string',
    },
    battleId: {
      type: 'number',
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var char = await Character.findOne({
      player: this.req.me.id,
      game: this.req.me.currentGame
    });
    //validate itemId belongs to inventory owned by character
    var accessor = await LootService.getItemAccessor(inputs.itemType);
    var item = await accessor.findOne(inputs.itemId);
    if (char.inventory === item.inventory) {
      await accessor.update({
        id: item.id
      }, {
        damaged: false
      });
    }

    Battle.publishUpdate(inputs.battleId);

    return exits.success();

  }


};
