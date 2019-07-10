/**
 * Character.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: 'string',
    },

    maxHp: {
      type: 'number',
    },

    hp: {
      type: 'number',
    },

    dmgIncrease: {
      type: 'number',
    },

    baseDmgIncrease: {
      type: 'number',
    },

    spellDmgIncrease: {
      type: 'number',
    },

    baseResist: {
      type: 'number',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    game: { model: 'game' },
    player: { model: 'user' },
    battles: { collection: 'battle', via: 'participants' },
    inventory: { model: 'inventory' },
    conditions: { collection: 'activecondition', via: 'character' },

  },

  inBattle: async function(characterId,battleId){
    var character = await Character.findOne({ id: characterId }).populate('battles');
    if(character && character.battles){
      return _.map(character.battles,'id').includes(battleId);
    }
    return false;
  },

  heal: async function (characterId, amount) {
    var character = await Character.findOne({ id: characterId });

    //cannot heal if dead
    if (character.hp <= 0) {
      return {};
    }

    var conditions = await ActiveCondition.find({
      character: character.id
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
    character.hp = (character.hp * 1) + healamount;
    if (character.hp > character.maxHp) {
      //calculate the amount of damage that was actually healed
      healamount = healamount - (character.hp - character.maxHp);
      character.hp = character.maxHp;
    }

    if (healamount > 0) {
      await Character.update({
        id: character.id
      }, {
        hp: character.hp
      });
    }

    return {
      heal: healamount
    };
  },

  takeDamage: async function (characterId, amount, type) {
    var character = await Character.findOne({ id: characterId }).populate('conditions');

    if (character.hp <= 0) {
      return {};
    }
    var wrapped = await ConditionService.getProxy(character, 'character');
    var orighp = character.hp;

    //conditions
    for (var c of character.conditions) {
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
      character.hp -= amount;
    } else {
      character.hp -= Math.floor(amount * ((100 - wrapped[type + 'Resist']) / 100));
    }
    await Character.update({
      id: character.id
    }, {
      hp: character.hp
    });

    if (character.hp <= 0) {
      // TODO: do we need to do anything when the character is dead?
      //await CharacterService.dead(character);
      return {
        death: true,
        damage: true
      };
    }

    //TODO: damage equipment regardless of whether character actually took any damage (equipment absorbed all of it)
    var inventory = await Inventory.findOne({ id: character.inventory }).populate('armor').populate('jewelry');
    var equippedArmor = _.filter(inventory.armor,'equipped');
    var equippedJewelry = _.filter(inventory.jewelry,'equipped');
    for(var item of equippedArmor){
      item.accessor = ArmorInstance;
    }
    for(item of equippedJewelry){
      item.accessor = JewelryInstance;
    }
    var equippedItems = [];
    equippedItems =  equippedItems.concat(equippedArmor,equippedJewelry);
    for(var i = 0; i<6; i++){
      if(!equippedItems[i]){
        equippedItems.push({});
      }
    }

    var result = {};

    var damageTarget = RandomService.getOneRandomItem(equippedItems);
    if(damageTarget.accessor){
      result = await damageTarget.accessor.damage(damageTarget.id);
    }

    if (character.hp < orighp) {
      result.damage = true;
    }
    return result;
  },

  hidden: { type: 'boolean' },

};

