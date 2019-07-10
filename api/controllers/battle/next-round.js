module.exports = {


  friendlyName: 'Next round',


  description: '',


  inputs: {
    battleId: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var death = [];
    var battle = await Battle.findOne({
      id: inputs.battleId
    }).populate('enemies').populate('friendlies');
    //increase round number
    battle.round = (battle.round % 8) + 1;
    await Battle.update({
      id: inputs.battleId
    }, {
      round: battle.round
    });

    //generate next actions for each creature
    try {
      await CreatureService.nextActionsForEach(battle.enemies);
      await CreatureService.nextActionsForEach(battle.friendlies);
    } catch (unused) {
      //nothing
    }

    //analyze active conditions for expiration
    try {
      death.concat((await CreatureService.nextRoundForEach(battle.enemies)).death);
      death.concat((await CreatureService.nextRoundForEach(battle.friendlies)).death);
    } catch (unused) {
      //nothing
    }

    var msg = {
      battle: await BattleService.prepForDelivery(inputs.battleId),
      sound: []
    };

    if (death.length > 0) {
      msg.sound.push({
        clip: 'ghost_clip',
        delay: 1000
      });
      msg.death = death;
    }

    Battle.publishUpdate(inputs.battleId, msg);

    return exits.success();

  },

};
