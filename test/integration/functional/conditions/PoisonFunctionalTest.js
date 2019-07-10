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

describe('PoisonFunctionalTest', () => {
  var creature = undefined;
  var poisons = ['Lesser Poison','Poison','Greater Poison','Deadly Poison','Lethal Poison'];

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

  it('Should apply lesser poison', async () => {
    creature = await TestService.addConditionAndVerify(creature.id, poisons[0], 1, assert);
    var active = await Condition.findOne({ id: creature.conditions[0].condition });
    var expected = poisons[0];
    assert(active.name === expected, 'Expected active condition ' + expected + ', got ', active.name);
    assert(await ConditionService.hasPoison(creature.conditions), 'ConditionService hasPoison() reports false');
  });

  /**
   * This tests that poisons apply correctly when a higher level is applied over the top of a lower level and vice
   * versa.  Higher level should replace the lower level, lower level should not be applied if a higher level is
   * present.  At the same time, we test that the hasPoison() method works correctly with each type of poison
   */
  it('Should apply overriding conditions properly', async () => {
    for(var i = 0; i<poisons.length; i++){
      creature = await TestService.addConditionAndVerify(creature.id, poisons[i], 1, assert);
      var active = await ActiveCondition.find({ creature: creature.id }).populate('condition');
      assert(active[0].condition.name === poisons[i], 'Incorrect condition applied: ' + active[0].condition.name);
      assert(await ConditionService.hasPoison(active), 'ConditionService hasPoison() reports false');
      if(i > 0){
        for (var j = 0; j < i; j++){
          creature = await TestService.addConditionAndVerify(creature.id, poisons[j], 1, assert);
          active = await ActiveCondition.find({ creature: creature.id }).populate('condition');
          assert(active[0].condition.name !== poisons[j], 'Overriding condition not applied correctly');
        }
      }
    }
  });

  it('Damage, cooldown, and expiration', async () => {
    var initialHp = creature.hp;
    for(var i = 0; i<poisons.length; i++){
      var poison = await Condition.findOne({ name: poisons[i] });
      creature = await TestService.addConditionAndVerify(creature.id, poison, 1, assert);
      //test delay, cooldown, duration
      for(var p = 1; p <= poison.duration; p++){
        var previousHp = creature.hp;
        creature = await TestService.advanceCreatureRounds(creature,1);
        if(p === poison.delay || (p-poison.delay)%poison.cooldown === 0){
          //should hit
          assert(creature.hp < previousHp, 'Creature should have taken damage, but didn\'t.  i=' + i + ',p=' + p + ',previous=' + previousHp + ', current=' + creature.hp);
        } else {
          //no damage
          assert(previousHp === creature.hp, 'Creature took damage, but it shouldn\'t have.  i=' + i + ',p=' + p + ',previous=' + previousHp + ', current=' + creature.hp);
        }
        var active = await ActiveCondition.find({ creature: creature.id }).populate('condition');
        if( p === poison.duration){
          assert(active.length === 0, 'Condition should have been removed');
        } else {
          assert(active.length === 1, 'Condition should still be present');
        }
      }
      //reset creature hp
      await CreatureInstance.update({ id: creature.id }, { hp: initialHp });
      creature = await CreatureInstance.findOne({ id: creature.id });
    }
  });

  it('Should not allow healing while poisoned', async () => {
    for(var i = 0; i<poisons.length; i++){
      await TestService.assertConditionDoesNotAllowHealing(poisons[i],creature.id,assert);
    }
  });

});
