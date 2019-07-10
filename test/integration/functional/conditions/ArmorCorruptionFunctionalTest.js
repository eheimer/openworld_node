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

describe('ArmorCorruptionFunctionalTest', () => {
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

  it('Should expire after <duration>', async () => {
    await TestService.assertConditionExpiresAfterDuration('Armor Corruption', creature.id, assert);
  });

  it('Should cause 50% reduction to all resists', async () => {
    creature = await TestService.addConditionAndVerify(creature.id, 'Armor Corruption', 1, assert);
    var wrapped = await ConditionService.getProxy(creature);
    assert(wrapped.physicalResist === Math.round(creature.physicalResist / 2), 'Physical resist - expected ' + Math.round(creature.physicalResist / 2) + ', got ' + wrapped.physicalResist);
    assert(wrapped.fireResist === Math.round(creature.fireResist / 2), 'Fire resist - expected ' + Math.round(creature.fireResist / 2) + ', got ' + wrapped.fireResist);
    assert(wrapped.coldResist === Math.round(creature.coldResist / 2), 'Cold resist - expected ' + Math.round(creature.coldResist / 2) + ', got ' + wrapped.coldResist);
    assert(wrapped.poisonResist === Math.round(creature.poisonResist / 2), 'Poison resist - expected ' + Math.round(creature.poisonResist / 2) + ', got ' + wrapped.poisonResist);
    assert(wrapped.energyResist === Math.round(creature.energyResist / 2), 'Energy resist - expected ' + Math.round(creature.energyResist / 2) + ', got ' + wrapped.energyResist);
  });

});
