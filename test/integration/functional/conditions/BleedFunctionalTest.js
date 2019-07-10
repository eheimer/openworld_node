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

describe('BleedFunctionalTest', () => {
  var creature = undefined;

  before(async () => {
    creature = await TestService.initializeCreature('Ancient Wyrm', assert);
  });

  /**
   * Refresh the creature from the database
   */
  beforeEach(async () => {
    creature = await CreatureInstance.findOne({
      id: creature.id
    }).populate('conditions');
  });

  /**
   * Clear all active conditions
   */
  afterEach(async () => {
    await ActiveCondition.destroy({
      creature: creature.id
    });
  });

  it('Should cause damage every round until expired', async () => {
    var cond = await Condition.findOne({
      name: 'Bleed'
    });
    creature = await TestService.addConditionAndVerify(creature.id, cond, 1, assert);
    for (var i = 0; i < cond.duration; i++) {
      var previousHp = creature.hp;
      creature = await TestService.advanceCreatureRounds(creature, 1);
      assert(creature.hp < previousHp, 'Creature should have taken damage, but didn\'t.  i=' + i + ',previous=' + previousHp + ', current=' + creature.hp);
    }
    await TestService.assertConditionCount(creature, 0, assert);
  });

  it('Should disable healing, but healing should cancel the condition', async () => {
    await CreatureInstance.takeDamage(creature.id, 100, 'direct');
    assert(creature.hp < creature.orighp, 'Creature did not take damage, but should have');
    creature = await TestService.addConditionAndVerify(creature.id, 'Bleed', 1, assert);
    var initialHp = creature.hp;
    await CreatureInstance.heal(creature.id, 100);
    creature = await CreatureInstance.findOne({
      id: creature.id
    }).populate('conditions');
    assert(creature.hp === initialHp, 'Creature healed damage, but shouldn\'t have');
    await TestService.assertConditionCount(creature, 0, assert);
  });

});
