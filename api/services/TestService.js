/**
 * Helper functions for tests
 * @name TestService
 * @module TestService
 */
module.exports = {

  /**
   * @param {number} creatureId
   * @param {Object} condition
   * @param {number} count
   * @param {Object} assert
   */
  addConditionAndVerify: async (creatureId, condition, count, assert) => {
    if (!condition.id) {
      condition = await Condition.findOne({
        name: condition
      });
    }
    await ConditionService.applyCondition(condition.id, creatureId, 'creature');
    var creature = await CreatureInstance.findOne(creatureId).populate('conditions');
    await assert(creature.conditions, 'Creature has no active conditions');
    TestService.assertConditionCount(creature, count, assert);
    return creature;
  },

  advanceCreatureRounds: async (creature, rounds) => {
    for (var i = 0; i < rounds; i++) {
      await CreatureService.nextRoundForEach([creature]);
      creature = await CreatureInstance.findOne(creature.id).populate('conditions');
    }
    return creature;
  },

  assertConditionCount: async (creature, count, assert) => {
    var id = creature.id ? creature.id : creature;
    if (!creature.id || !creature.conditions) {
      creature = await CreatureInstance.findOne(id).populate('conditions');
    }
    await assert(creature.conditions.length === count, 'Expected ' + count + ' active condition(s), got ' + creature.conditions.length);
  },

  initializeCreature: async (name, assert) => {
    var monster = await Monster.findOne({
      name: name
    });
    var creature = await CreatureService.generateCreature(monster.id);
    assert(creature !== undefined && creature !== null, 'unable to create a creature');
    return creature;
  },

  assertConditionExpiresAfterDuration: async (condition, creatureId, assert) => {
    if (!condition.id) {
      condition = await Condition.findOne({
        name: condition
      });
    }
    var creature = await TestService.addConditionAndVerify(creatureId, condition, 1, assert);
    for (var i = 0; i < condition.duration; i++) {
      await TestService.assertConditionCount(creature, 1, assert);
      creature = await TestService.advanceCreatureRounds(creature, 1);
    }
    await TestService.assertConditionCount(creature, 0, assert);
  },

  assertConditionExpiresWithDamage: async (condition, creatureId, assert) => {
    if (!condition.id) {
      condition = await Condition.findOne({
        name: condition
      });
    }
    var creature = await TestService.addConditionAndVerify(creatureId, condition, 1, assert);
    var startingHp = creature.hp;
    await CreatureInstance.takeDamage(creature.id, 100, 'direct');
    var expected = startingHp - 100;
    creature = await CreatureInstance.findOne({
      id: creature.id
    }).populate('conditions');
    assert(creature.hp === expected, 'Expected hp: ' + expected + ', got ', creature.hp);
    await TestService.assertConditionCount(creature, 0, assert);
  },

  assertConditionReplacesActionUntilExpires: async (condition, creatureId, assert) => {
    if (!condition.id) {
      condition = await Condition.findOne({
        name: condition
      });
    }
    var creature = await TestService.addConditionAndVerify(creatureId, condition, 1, assert);
    var prepped = {};
    var expected = condition.actionReplace;
    for (var i = 0; i < condition.duration; i++) {
      await TestService.assertConditionCount(creature, 1, assert);
      prepped = await CreatureService.prepForDelivery(creature);
      assert(prepped.actionName === expected, 'After ' + i + ' rounds, action description should be ' + expected + ', got ' + prepped.actionName);
      creature = await TestService.advanceCreatureRounds(creature, 1);
    }
    await TestService.assertConditionCount(creature, 0, assert);
    prepped = await CreatureService.prepForDelivery(creature);
    assert(prepped.actionName !== expected, 'Action descrition should not be ' + expected + ' after condition is removed');
  },

  assertConditionDoesNotAllowHealing: async (condition, creatureId, assert) => {
    if (!condition.id) {
      condition = await Condition.findOne({
        name: condition
      });
    }
    await CreatureInstance.takeDamage(creatureId, 100, 'direct');
    var creature = await CreatureInstance.findOne({
      id: creatureId
    }).populate('conditions');
    assert(creature.hp < creature.orighp, 'Creature did not take damage, but should have');
    creature = await TestService.addConditionAndVerify(creature.id, condition, 1, assert);
    var initialHp = creature.hp;
    await CreatureInstance.heal(creature.id, 100);
    creature = await CreatureInstance.findOne({
      id: creature.id
    }).populate('conditions');
    assert(creature.hp === initialHp, 'Creature healed damage, but shouldn\'t have');
  }


};
