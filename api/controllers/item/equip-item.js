module.exports = {


  friendlyName: 'Equip item',


  description: '',


  inputs: {
    itemId: {
      type: 'number',
      required: true
    },
    itemType: {
      type: 'string',
      required: true
    },
    battleId: {
      type: 'number',
      required: true
    }
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
      await Inventory.equip(inputs.itemId, inputs.itemType);
    }

    Battle.publishUpdate(inputs.battleId);

    return exits.success();

  }


};
