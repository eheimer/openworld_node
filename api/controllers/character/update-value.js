module.exports = {


  friendlyName: 'Update value',


  description: '',


  inputs: {
    characterId: {
      required: true,
      type: 'number'
    },
    property: {
      type: 'string'
    },
    value: {
      type: 'string'
    }

  },


  exits: {
    invalidCharacterId: {
      description: `Invalid character id.`,
      responseType: 'error'
    },
    updateError: {
      description: `Update failed.`,
      responseType: 'error'
    }
  },


  fn: async function (inputs) {
    //verify characterId matches user/game
    var char = await Character.findOne({
      game: this.req.me.currentGame,
      player: this.req.me.id,
      id: inputs.characterId
    }).populate('battles').populate('inventory');

    if (!char) {
      throw 'invalidCharacterId';
    }

    if (inputs.property === 'inventorySlots') {
      if (char.inventory.capacity !== inputs.value) {
        await Inventory.update({
          id: char.inventory.id
        }, {
          capacity: inputs.value
        });
        //TODO: handle capacity dropping below current contents
      }
    } else if (char[inputs.property] !== inputs.value) {
      var upd = {};
      upd[inputs.property] = inputs.value;
      try {
        await Character.update({
          id: inputs.characterId
        }, upd);
      } catch (unusedErr) {
        throw 'updateError';
      }
    }
    if (char.battles) {
      for (var battle of char.battles) {
        Battle.publishUpdate(battle.id);
      }
    }

    // All done.
    return;

  }
};
