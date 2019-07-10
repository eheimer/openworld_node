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

describe('ParalyzeFunctionalTest', () => {
  var creature = undefined;
  var paralyze = ['Paralyzed', 'Nerve Strike', 'Paralyze Blow'];

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

  it('Should replace creature next action with Paralyzed until it expires', async () => {
    //run the test once for each type of paralyze condition to ensure they all work the same
    for(var i = 0; i < paralyze.length; i++){
      await TestService.assertConditionReplacesActionUntilExpires(paralyze[i],creature.id,assert);
    }

  });

  it('Should expire when creature takes damage', async () => {
    //run the test once for each type of paralyze condition to ensure they all work the same
    for(var i = 0; i < paralyze.length; i++){
      await TestService.assertConditionExpiresWithDamage(paralyze[i],creature.id,assert);
    }
  });

});
