/**
 * ActiveCondition.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    roundsRemaining: {
      type: 'number',
      description: 'number of rounds before this condition expires'
    },

    cooldownRemaining: {
      type: 'number',
      description: 'If the condition has a delay, this will initially be set to the delay.  Each round,' +
                   ' this will count down to 0, when the condition will take effect.  After that' +
                   ' point, this will be reset to the cooldown each time it reaches 0 until the effect expires'
    },

    damage: {
      type: 'number'
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    condition: { model: 'condition' },
    creature: { model: 'creatureinstance' },
    character: { model: 'character' },
    target: { model: 'creatureinstance' }

  },

  isPoison: async function (active) {
    active = await ActiveCondition.returnOrFindWithCondition(active);
    if(active && active.condition){
      return await Condition.isPoison(active.condition);
    }
    return false;
  },

  isParalyze: async function (active) {
    active = await ActiveCondition.returnOrFindWithCondition(active);
    if(active && active.condition){
      return await Condition.isParalyze(active.condition);
    }
    return false;
  },

  returnOrFindWithCondition: async function (obj) {
    if(!obj.id){
      return await ActiveCondition.findOne(obj).populate('condition');
    }
    obj.condition = await Condition.returnOrFind(obj.condition);
    return obj;
  },

  getEntityQuery: function (entityId,entityType,otherOptions){
    var query = {};
    query[entityType] = entityId;
    query = {...query, ...otherOptions};
    return query;
  },

  findByEntityAndCondition: async function (entityId, entityType, condition) {
    return await ActiveCondition.findOne().where(this.getEntityQuery(entityId,entityType,{ condition: condition })).populate('condition');
  },

  findAllByEntity: async function (entityId, entityType){
    return await ActiveCondition.find(this.getEntityQuery(entityId,entityType)).populate('condition');
  },


};

