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

describe('DiscordFunctionalTest', () => {
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

  it('Should reduce stats', async () => {
    creature = await TestService.addConditionAndVerify(creature.id, 'Discorded', 1, assert);
    var wrapped = await ConditionService.getProxy(creature);
    assert(creature.hp > wrapped.hp, 'Expected hp reduced.');
  });

  it('Should expire after <duration>', async () => {
    await TestService.assertConditionExpiresAfterDuration('Discorded', creature.id, assert);
  });

});
