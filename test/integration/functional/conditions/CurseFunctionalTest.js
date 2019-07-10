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

describe('CurseFunctionalTest', () => {
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

  it('Should double damage and expire', async () => {
    creature = await TestService.addConditionAndVerify(creature.id, 'Cursed', 1, assert);
    await CreatureInstance.takeDamage(creature.id, 50, 'direct');
    creature = await CreatureInstance.findOne(creature.id).populate('conditions');
    var expected = creature.orighp - 100;
    assert(creature.hp === expected, 'Expected hp: ' + expected + ', got: ' + creature.hp);
    await TestService.assertConditionCount(creature, 0, assert);
  });

  it('Should double damage from poison and expire', async () => {
    var startingHp = creature.hp;
    var poison = await Condition.findOne({
      name: 'Lesser Poison'
    });
    creature = await TestService.addConditionAndVerify(creature.id, poison, 1, assert);
    creature = await TestService.addConditionAndVerify(creature.id, 'Cursed', 2, assert);
    var activePoison = await ActiveCondition.findOne({
      creature: creature.id,
      condition: poison.id
    });
    var poisonDamage = activePoison.damage;
    creature = await TestService.advanceCreatureRounds(creature, 2);
    var expected = startingHp - (poisonDamage * 2);
    assert(creature.hp === expected, 'Expected hp: ' + expected + ', got ' + creature.hp);
    assert(creature.conditions.length === 1 && creature.conditions[0].condition === poison.id, 'Curse should be removed when poison hits');
  });

});
