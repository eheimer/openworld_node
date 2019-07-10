// Sails imports these automatically, but they must be explicit in order
// to make intellisense work in vscode
var BattleService = require('../../../api/services/BattleService.js');
var ConditionService = require('../../../api/services/ConditionService.js');
var CreatureService = require('../../../api/services/CreatureService.js');
var DamageService = require('../../../api/services/DamageService.js');
var ModelService = require('../../../api/services/ModelService.js');
var MonsterService = require('../../../api/services/MonsterService.js');
var RandomService = require('../../../api/services/RandomService.js');
var LootService = require('../../../api/services/LootService');
var TestService = require('../../../api/services/TestService.js');

describe('WeaponGeneratorTest', () => {
  var creature = undefined;

  before(async () => {
    //creature = await TestService.initializeCreature('Ancient Wyrm',assert);
  });

  /**
   * Refresh the creature from the database
   */
  beforeEach(async () => {
    //creature = await CreatureInstance.findOne({ id: creature.id }).populate('conditions');
  });

  /**
   * Clear all active conditions
   */
  afterEach(async () => {
    //await ActiveCondition.destroy({ creature: creature.id });
  });

  it('Should generate a level 0 item', async () => {
    var itemId = await LootService.generateWeapon(0);
    var item = await WeaponInstance.findOne({
      id: itemId
    }).populate('attributes');
    assert(item.attributes.length === 0, 'expected zero attributes, got ' + item.attributes.length);
  });
  it('Should generate a level 1 item', async () => {
    var itemId = await LootService.generateWeapon(1);
    var item = await WeaponInstance.findOne({
      id: itemId
    }).populate('attributes');
    assert(item.attributes.length === 1, 'expected one attributes, got ' + item.attributes.length);
  });
  it('Should generate a level 2 item', async () => {
    var itemId = await LootService.generateWeapon(2);
    var item = await WeaponInstance.findOne({
      id: itemId
    }).populate('attributes');
    assert(item.attributes.length === 2, 'expected two attributes, got ' + item.attributes.length);
  });
  it('Should generate a level 3 item', async () => {
    var itemId = await LootService.generateWeapon(3);
    var item = await WeaponInstance.findOne({
      id: itemId
    }).populate('attributes');
    assert(item.attributes.length === 3, 'expected three attributes, got ' + item.attributes.length);
  });
  it('Should generate a level 4 item', async () => {
    var itemId = await LootService.generateWeapon(4);
    var item = await WeaponInstance.findOne({
      id: itemId
    }).populate('attributes');
    assert(item.attributes.length === 4, 'expected four attributes, got ' + item.attributes.length);
  });

  it('Should generate a level 4 two-handed sword', async () => {
    var itemId = await LootService.generateWeapon(4, {
      hand: 2,
      skill: 3
    });
    var item = await WeaponInstance.findOne({
      id: itemId
    }).populate('attributes').populate('weapon');
    assert(item.attributes.length === 4, 'expected four attributes, got ' + item.attributes.length);
    assert(item.weapon.hand === 2, 'expected 2-handed, got ' + item.weapon.hand);
    assert(item.weapon.skill === 3, 'expected skill 3, got ' + item.weapon.skill);
  });

});
