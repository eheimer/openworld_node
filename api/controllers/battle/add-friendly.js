module.exports = {


  friendlyName: 'Add friendly',


  description: '',


  inputs: {
    battleId: {
      type: 'number'
    },
    creatureId: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var creature = await CreatureInstance.findOne({
      id: inputs.creatureId
    });
    await Battle.addToCollection(inputs.battleId, 'friendlies').members(creature.id);

    Battle.publishUpdate(inputs.battleId);

    return exits.success();
  }

};
