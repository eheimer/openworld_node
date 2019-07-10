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

describe('CorpseskinFunctionalTest', () => {
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

  it('Should bump ph and c resist by 10 and drop f and p resist by 15', async () => {
    creature = await TestService.addConditionAndVerify(creature.id, 'Corpseskin', 1, assert);
    var wrapped = await ConditionService.getProxy(creature);
    assert(wrapped.physicalResist === creature.physicalResist + 10, 'Expected ph resist bumped by 10');
    assert(wrapped.coldResist === creature.coldResist + 10, 'Expected c resist bumped by 10');
    assert(creature.fireResist === wrapped.fireResist + 15, 'Expected f resist dropped by 10');
    assert(creature.poisonResist === wrapped.poisonResist + 15, 'Expected p resist dropped by 10');
  });

  it('Should expire after <duration>', async () => {
    await TestService.assertConditionExpiresAfterDuration('Corpseskin', creature.id, assert);
  });

});
