/**
 * CreatureInstance.js
 *
 * @description :: Represents a creature that exists in the world, includes monsters, pets, summons, etc
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: 'string'
    },

    gold: {
      type: 'number'
    },

    orighp: {
      type: 'number'
    },

    hp: {
      type: 'number'
    },

    fireResist: {
      type: 'number'
    },

    coldResist: {
      type: 'number'
    },

    poisonResist: {
      type: 'number'
    },

    energyResist: {
      type: 'number'
    },

    physicalResist: {
      type: 'number'
    },

    magery: {
      type: 'number'
    },

    evalInt: {
      type: 'number'
    },

    tactics: {
      type: 'number'
    },

    resistSpell: {
      type: 'number'
    },

    anatomy: {
      type: 'number'
    },

    strength: {
      type: 'number'
    },

    dexterity: {
      type: 'number'
    },

    intelligence: {
      type: 'number'
    },

    baseDmg: {
      type: 'number'
    },

    initiative: {
      type: 'number'
    },

    tamed: {
      type: 'boolean'
    },

    actionName: {
      type: 'string'
    },

    actionValue: {
      type: 'number'
    },

    actionDescription: {
      type: 'string'
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    monster: { model: 'monster' },
    nextAction: { model: 'monsteraction' },
    conditions: { collection: 'activecondition', via: 'creature' },
    battleAsEnemy: { model: 'battle' },
    battleAsFriendly: { model: 'battle' },
    actionDmgType: { model: 'damagetype' },
    loot: { model: 'inventory' },
    owner: { model: 'character' },

  },

  inBattle: async function(creatureId,battleId){
    var creature = await CreatureInstance.findOne({
      and: [
        { id: creatureId },
        { or: [{
            battleAsEnemy: battleId
          }, {
            battleAsFriendly: battleId
          }]
        }
      ]
    });
    return creature;
  },

  heal: async function (creatureId, amount) {
    var creature = await CreatureInstance.findOne({ id: creatureId });

    //cannot heal if dead
    if (creature.hp <= 0) {
      return {};
    }

    var conditions = await ActiveCondition.find({
      creature: creature.id
    }).populate('condition');

    //bleed condition is canceled and heal has no further effect
    var bleed = await ConditionService.hasBleed(conditions);
    if (bleed) {
      await ActiveCondition.destroyOne({
        id: bleed
      });
      return {
        heal: true
      };
    }

    //no healing if poisoned
    if (await ConditionService.hasPoison(conditions)) {
      return {};
    }

    //no healing if mortal strike
    if (await ConditionService.hasMortalStrike(conditions)) {
      return {};
    }

    var healamount = amount * 1;
    creature.hp = (creature.hp * 1) + healamount;
    if (creature.hp > creature.orighp) {
      //calculate the amount of damage that was actually healed
      healamount = healamount - (creature.hp - creature.orighp);
      creature.hp = creature.orighp;
    }

    if (healamount > 0) {
      await CreatureInstance.update({
        id: creature.id
      }, {
        hp: creature.hp
      });
    }

    return {
      heal: healamount
    };
  },

  takeDamage: async function (creatureId, amount, type) {
    var creature = await CreatureInstance.findOne({ id: creatureId }).populate('conditions');

    if (creature.hp <= 0) {
      return {};
    }
    var wrapped = await ConditionService.getProxy(creature, 'creature');
    var orighp = creature.hp;

    //conditions
    for (var c of creature.conditions) {
      var cId = c.id ? c.id : c;
      if (!c.id || !c.condition.id) {
        c = await ActiveCondition.findOne({
          id: cId
        }).populate('condition');
      }
      if (c && c.condition) {
        //curse doubles damage
        if (c.condition.name === EnumService.Condition().CURSE.name) {
          amount *= 2;
        }

        //remove any conditions that cancel on hit
        if (c.condition.removeOnHit) {
          await ActiveCondition.destroyOne({
            id: c.id
          });
        }
      }
    }
    if (type === EnumService.DamageType().DIRECT.name) {
      creature.hp -= amount;
    } else {
      creature.hp -= Math.floor(amount * ((100 - wrapped[type + 'Resist']) / 100));
    }
    await CreatureInstance.update({
      id: creature.id
    }, {
      hp: creature.hp
    });

    if (creature.hp <= 0) {
      await CreatureService.dead(creature);
      return {
        death: true,
        damage: true
      };
    }
    if (creature.hp < orighp) {
      return {
        damage: true
      };
    }
    return {};
  },

  dead: { type: 'boolean' },
  hidden: { type: 'boolean' },
  provoked: { type: 'boolean' },
  aggroPriority: { type: 'number' },
  taming: { type: 'string' },
  imgUrl: { type: 'string' },
  monsterId: { type: 'number' },
  counter: { type: 'number' },
};
