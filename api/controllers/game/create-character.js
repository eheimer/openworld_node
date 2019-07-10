module.exports = {


  friendlyName: 'Create character',


  description: '',


  inputs: {
    characterName: {
      type: 'string',
      required: true
    },
    hitPoints: {
      type: 'number',
      required: true
    },
    damageIncrease: {
      type: 'number',
      required: true
    },
    baseDmgIncrease: {
      type: 'number',
      required: false
    },
    spellDamageIncrease: {
      type: 'number',
      required: true
    },
    baseResist: {
      type: 'number',
      required: false
    },
    inventorySlots: {
      type: 'number',
      required: true
    },
  },


  exits: {
    characterExists: {
      description: `The player already has a character in the specified game.`,
      responseType: 'error'
    },
    invalidGameId: {
      description: `User did something wrong, and there is no current game Id.`,
      responseType: 'error'
    }
  },


  fn: async function (inputs) {
    if (!this.req.me.currentGame) {
      throw 'invalidGameId';
    }
    var characters = await Character.find({
      player: this.req.me.id,
      game: this.req.me.currentGame
    });
    if (characters.length > 0) {
      throw 'characterExists';
    }

    //create an inventory for the character
    var inventory = await Inventory.create({
      capacity: inputs.inventorySlots,
      limit: true
    }).fetch();

    await Character.create({
      game: this.req.me.currentGame,
      player: this.req.me.id,
      name: inputs.characterName,
      maxHp: inputs.hitPoints,
      hp: inputs.hitPoints,
      dmgIncrease: inputs.damageIncrease,
      baseDmgIncrease: inputs.baseDmgIncrease,
      spellDmgIncrease: inputs.spellDamageIncrease,
      baseResist: inputs.baseResist,
      inventory: inventory.id
    });

    // All done.
    return;

  }


};
