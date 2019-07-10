module.exports = {


  friendlyName: 'Generate enemy',


  description: '',


  inputs: {
    battleId: {
      type: 'number'
    },
    monsterId: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var creature = await CreatureService.generateCreature(inputs.monsterId);
    await Battle.addToCollection(inputs.battleId, 'enemies').members(creature.id);

    Battle.publishUpdate(inputs.battleId);

    return exits.success();
  }

};
