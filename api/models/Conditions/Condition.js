/**
 * Condition.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
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

    actionReplace: {
      type: 'string'
    },

    duration: {
      type: 'number',
      description: 'number of rounds this condition will be active for by default'
    },

    damage: {
      type: 'string'
    },

    delay: {
      type: 'number',
      description: 'number of rounds before this condition takes effect'
    },

    cooldown: {
      type: 'number',
      description: 'number of rounds between activations'
    },

    overrides: {
      type: 'ref',
      description: 'array of condition ids that this condition will override'
    },

    removeOnHit: {
      type: 'boolean'
    },

    //TODO: remove these fields when we have our bootstrap data finalized and we no longer need to do --drop
    damageMin: {
      type: 'number'
    },

    damageMax: {
      type: 'number'
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝



    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    damageType: { model: 'damagetype' },
  },

  returnOrFind: async function(obj){
    if(obj.id){ return obj; }
    return Condition.findOne(obj);
  },

  isPoison: async function(condition){ 
    condition = await Condition.returnOrFind(condition);
    return condition.name.toLowerCase().includes('poison') && !condition.name.toLowerCase().includes('resist');
  },

  isParalyze: async function(condition){
    condition = await Condition.returnOrFind(condition);
    return condition.actionReplace.toLowerCase() === 'paralyzed';
  },

  //TODO: I think at some point, it might be worth putting these in a table
  discordEffect: [
    { name: 'orighp', type: '*', value: 0.7 },
    { name: 'hp', type: '*', value: 0.7 },
    { name: 'fireResist', type: '*', value: 0.8 },
    { name: 'coldResist', type: '*', value: 0.8 },
    { name: 'poisonResist', type: '*', value: 0.8 },
    { name: 'energyResist', type: '*', value: 0.8 },
    { name: 'physicalResist', type: '*', value: 0.8 },
    { name: 'magery', type: '*', value: 0.8 },
    { name: 'evalInt', type: '*', value: 0.8 },
    { name: 'tactics', type: '*', value: 0.8 },
    { name: 'resistSpell', type: '*', value: 0.8 },
    { name: 'anatomy', type: '*', value: 0.8 },
    { name: 'strength', type: '*', value: 0.8 },
    { name: 'dexterity', type: '*', value: 0.8 },
    { name: 'intelligence', type: '*', value: 0.8 },
    { name: 'baseDmg', type: '*', value: 0.8 },
  ],

  corpseskinEffect: [
    { name: 'physicalResist', type: '+', value: 10 },
    { name: 'coldResist', type: '+', value: 10 },
    { name: 'fireResist', type: '+', value: -15 },
    { name: 'poisonResist', type: '+', value: -15 },
  ],

  armorcorruptionEffect: [
    { name: 'fireResist', type: '*', value: 0.5 },
    { name: 'coldResist', type: '*', value: 0.5 },
    { name: 'poisonResist', type: '*', value: 0.5 },
    { name: 'energyResist', type: '*', value: 0.5 },
    { name: 'physicalResist', type: '*', value: 0.5 },
  ],

};

