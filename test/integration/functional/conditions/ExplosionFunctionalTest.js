// Sails imports these automatically, but they must be explicit in order
// to make intellisense work in vscode
var BattleService = require('../../../../api/services/BattleService.js');
var ConditionService = require('../../../../api/services/ConditionService.js');
var CreatureService = require('../../../../api/services/CreatureService.js');
var DamageService = require('../../../../api/services/DamageService.js');
var ModelService = require('../../../../api/services/ModelService.js');
var MonsterService = require('../../../../api/services/MonsterService.js');
var RandomService = require('../../../../api/services/RandomService.js');
var TestService = require('../../../../api/services/TestService.js');

describe('ExplosionTestTemplate', () => {
  var creature = undefined;
  var explosion = ['Explosion','Mindblast'];

  before(async () => {
    creature = await TestService.initializeCreature('Ancient Wyrm',assert);
  });

  /**
   * Refresh the creature from the database
   */
  beforeEach(async () => {
    creature = await CreatureInstance.findOne({ id: creature.id }).populate('conditions');
  });

  /**
   * Clear all active conditions
   */
  afterEach(async () => {
    await ActiveCondition.destroy({ creature: creature.id });
  });

  it('Should hit and expire after <delay> rounds', async () => {
    for(var i = 0; i < explosion.length; i++){
      creature = await TestService.addConditionAndVerify(creature.id,explosion[i],1,assert);
      var active = await ActiveCondition.find({ creature: creature.id }).populate('condition');
      var delay = active[0].cooldownRemaining;
      var startingHp = creature.hp;
      for(var j = 0; j < delay; j++){
        assert(creature.hp === startingHp, 'Creature took damage but shouldn\'t have');
        await TestService.assertConditionCount(creature,1,assert);
        creature = await TestService.advanceCreatureRounds(creature,1);
      }
      assert(creature.hp < startingHp, 'Creature should have taken damage but didn\'t');
      await TestService.assertConditionCount(creature,0,assert);
    }
  });

});
