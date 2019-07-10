module.exports = {


  friendlyName: 'Deal damage',


  description: '',


  inputs: {
    battleId: {
      type: 'number'
    },
    amount: {
      type: 'number'
    },
    type: {
      type: 'string'
    },
    // array of CreatureInstance IDs
    creatures: {
      type: 'ref'
    },
    // array of Character IDs
    characters: {
      type: 'ref'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var dmgAmount = inputs.amount;
    var dmgType = inputs.type;
    //var targets = inputs.creatures;
    var creatureDeath = [];
    var characterDeath = [];
    var damage = false;
    var heal = false;
    var damagedItem = false;
    var destroyedItem = false;

    var work = [{
      targets: inputs.creatures,
      accessor: CreatureInstance,
      death: creatureDeath,
    }, {
      targets: inputs.characters,
      accessor: Character,
      death: characterDeath,
    }];

    for (var workObj of work) {
      for (var target of workObj.targets) {
        if (await workObj.accessor.inBattle(target, inputs.battleId)) {
          var result;
          if (dmgType === EnumService.DamageType().HEAL.name) {
            result = await workObj.accessor.heal(target, dmgAmount);
          } else {
            result = await workObj.accessor.takeDamage(target, dmgAmount, dmgType);
            damagedItem = damagedItem || result.broken;
            destroyedItem = destroyedItem || result.destroyed;
          }
          if (result.heal) {
            heal = true;
          }
          if (result.damage) {
            damage = true;
          }
          if (result.death) {
            workObj.death.push(target);
          }
        }
      }
    }

    var pubmsg = {
      battle: await BattleService.prepForDelivery(inputs.battleId),
      sound: []
    };
    if (damage) {
      pubmsg.sound.push({
        clip: 'dmg_' + dmgType + '_clip'
      });
    } else {
      if (heal) {
        pubmsg.sound.push({
          clip: 'dmg_heal_clip'
        });
      } else {
        pubmsg.sound.push({
          clip: 'whiff_clip'
        });
      }
    }
    if (creatureDeath.length > 0 || characterDeath.length > 0) {
      pubmsg.sound.push({
        clip: 'ghost_clip',
        delay: 1000
      });
    }
    if (damagedItem) {
      pubmsg.sound.push({
        clip: 'item_damaged_clip'
      });
    }
    if (destroyedItem) {
      pubmsg.sound.push({
        clip: 'item_destroyed_clip'
      });
    }

    Battle.publishUpdate(inputs.battleId, pubmsg);

    return exits.success();
  }

};
