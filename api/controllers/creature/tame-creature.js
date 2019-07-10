module.exports = {


  friendlyName: 'Tame creature',


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
    //apply discord wrapper
    var creature = await CreatureInstance.findOne({
      id: inputs.creatureId
    }).populate('monster');
    var wrapped = new Proxy(creature, ConditionService.conditionProxyHandler(Condition.discordEffect));
    //persist discorded values
    var fields = Condition.discordEffect.map((val) => {
      return val.name;
    });
    var update = {};
    for (var field of fields) {
      update[field] = wrapped[field];
    }
    var battleId = creature.battleAsEnemy;
    //if creature is in a battle, move it to the friendlies side
    if (battleId) {
      update.battleAsEnemy = null;
      update.battleAsFriendly = battleId;
    }
    update.tamed = true;

    await CreatureInstance.updateOne({
      id: inputs.creatureId
    }).set(update);
    if (battleId) {
      Battle.publishUpdate(battleId);
    }
    return exits.success();

  }


};
