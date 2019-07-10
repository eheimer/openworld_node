module.exports = {


  friendlyName: 'Take item',


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
    destinationInventoryFull: {
      responseType: 'error',
      description: 'Cannot take item, your inventory is full'
    }

  },


  fn: async function (inputs, exits) {
    //TODO: validate the item id makes sense (is on a creature
    // in the same battle as the character)

    //TODO: part of that is also making sure the item hasn't been
    // taken by another character already


    var char = await Character.findOne({
      player: this.req.me.id,
      game: this.req.me.currentGame
    });
    if (!(await Inventory.hasRoom(char.inventory))) {
      return exits.destinationInventoryFull();
    }

    var accessor = await LootService.getItemAccessor(inputs.itemType);

    await accessor.update({
      id: inputs.itemId
    }, {
      inventory: char.inventory
    });

    Battle.publishUpdate(inputs.battleId);

    return exits.success();
  }


};
