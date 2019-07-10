module.exports = {


  friendlyName: 'Update condition',


  description: '',


  inputs: {
    battleId: {
      type: 'number',
      required: false
    },
    entityId: {
      type: 'number',
      required: true
    },
    entityType: {
      type: 'string',
      required: true
    },
    conditionId: {
      type: 'number',
      required: true
    },
    removed: {
      type: 'boolean',
      required: false
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var activeCondition = await ActiveCondition.findByEntityAndCondition(inputs.entityId, inputs.entityType, inputs.conditionId);
    var accessors = {
      creature: CreatureInstance,
      character: Character
    };

    if (activeCondition) {
      if (inputs.removed) {
        await accessors[inputs.entityType].removeFromCollection(inputs.entityId, 'conditions').members([activeCondition.id]);
        await ActiveCondition.destroyOne({
          id: activeCondition.id
        });
        if (inputs.battleId) {
          Battle.publishUpdate(inputs.battleId);
        }
        return exits.success();
      }
    } else {
      if (!inputs.removed) {
        //create the active condition and add it to the creature's collection
        await ConditionService.applyCondition(inputs.conditionId, inputs.entityId, inputs.entityType);
        if (inputs.battleId) {
          Battle.publishUpdate(inputs.battleId);
        }
        return exits.success();
      }
    }
    return exits.success();
  }

};
