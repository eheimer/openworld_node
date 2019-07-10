module.exports = {


  friendlyName: 'Release creature',


  description: '',


  inputs: {
    creatureId: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    //apply inverse discord wrapper
    var inverse = [];
    for (var item of Condition.discordEffect) {
      inverse[inverse.length] = {
        name: item.name,
        type: item.type,
        value: 1 / item.value
      };
    }
    var creature = await CreatureInstance.findOne({
      id: inputs.creatureId
    }).populate('monster');
    var wrapped = new Proxy(creature, ConditionService.conditionProxyHandler(inverse));
    //persist modified values
    var fields = Condition.discordEffect.map((val) => {
      return val.name;
    });
    var update = {};
    for (var field of fields) {
      update[field] = wrapped[field];
    }
    var battleId = creature.battleAsFriendly;
    //if creature is in a battle, move it to the enemies side
    if (battleId) {
      update.battleAsFriendly = null;
      update.battleAsEnemy = battleId;
    }
    update.tamed = false;

    await CreatureInstance.updateOne({
      id: inputs.creatureId
    }).set(update);
    if (battleId) {
      Battle.publishUpdate(battleId);
    }
    return exits.success();
  }


};
