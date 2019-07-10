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

describe('PeacedFunctionalTest', () => {
  var creature = undefined;

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

  it('Should replace creature next action with Peaced until it expires', async () => {
    await TestService.assertConditionReplacesActionUntilExpires('Peaced',creature.id,assert);
  });

  it('Should expire when creature takes damage', async () => {
    await TestService.assertConditionExpiresWithDamage('Peaced',creature.id,assert);
  });

  it('Should expire after <duration>', async () => {
    await TestService.assertConditionExpiresAfterDuration('Peaced',creature.id,assert);
  });
});
