var DamageTypeEnum = require('../api/services/EnumService.js').DamageType();
var ConditionEnum = require('../api/services/EnumService.js').Condition();

module.exports = async function () {
  await Condition.createEach([
    { id: ConditionEnum.POISON_LESSER.id, name: ConditionEnum.POISON_LESSER.name, duration: 8, damageMin: 5, damageMax: 7, damageType: DamageTypeEnum.DIRECT.id, delay: 2, cooldown: 3 },
    { id: ConditionEnum.POISON.id, name: ConditionEnum.POISON.name, duration: 16, damageMin: 7, damageMax: 11, damageType: DamageTypeEnum.DIRECT.id, delay: 2, cooldown: 3, overrides: [1] },
    { id: ConditionEnum.POISON_GREATER.id, name: ConditionEnum.POISON_GREATER.name, duration: 16, damageMin: 9, damageMax: 15, damageType: DamageTypeEnum.DIRECT.id, delay: 1, cooldown: 2, overrides: [1, 2] },
    { id: ConditionEnum.POISON_DEADLY.id, name: ConditionEnum.POISON_DEADLY.name, duration: 24, damageMin: 13, damageMax: 27, damageType: DamageTypeEnum.DIRECT.id, delay: 2, cooldown: 2, overrides: [1, 2, 3] },
    { id: ConditionEnum.POISON_LETHAL.id, name: ConditionEnum.POISON_LETHAL.name, duration: 32, damageMin: 21, damageMax: 33, damageType: DamageTypeEnum.DIRECT.id, delay: 1, cooldown: 2, overrides: [1, 2, 3, 4] },
    { id: ConditionEnum.CURSE.id, name: ConditionEnum.CURSE.name, removeOnHit: true },
    { id: ConditionEnum.PARALYZE.id, name: ConditionEnum.PARALYZE.name, actionReplace: 'Paralyzed', duration: 4, removeOnHit: true, overrides: [17, 18] },
    { id: ConditionEnum.MINDBLAST.id, name: ConditionEnum.MINDBLAST.name, damageMin: 39, damageMax: 42, damageType: DamageTypeEnum.COLD.id, delay: 3 },
    { id: ConditionEnum.EXPLOSION.id, name: ConditionEnum.EXPLOSION.name, damageMin: 51, damageMax: 56, damageType: DamageTypeEnum.FIRE.id, delay: 4 },
    { id: ConditionEnum.DISCORD.id, name: ConditionEnum.DISCORD.name, duration: 24 },
    { id: ConditionEnum.PEACE.id, name: ConditionEnum.PEACE.name, actionReplace: 'Peaced', duration: 6, overrides: [10, 12], removeOnHit: true },
    { id: ConditionEnum.PROVOKE.id, name: ConditionEnum.PROVOKE.name, duration: 32 },
    { id: ConditionEnum.CORPSESKIN.id, name: ConditionEnum.CORPSESKIN.name, duration: 16 },
    { id: ConditionEnum.HIDDEN.id, name: ConditionEnum.HIDDEN.name },
    { id: ConditionEnum.MORTAL_STRIKE.id, name: ConditionEnum.MORTAL_STRIKE.name, actionReplace: 'Mortal Strike', duration: 5 },
    { id: ConditionEnum.BLEED.id, name: ConditionEnum.BLEED.name, duration: 5, damageMin: 6, damageMax: 6, damageType: DamageTypeEnum.DIRECT.id, cooldown: 1 },
    { id: ConditionEnum.NERVE_STRIKE.id, name: ConditionEnum.NERVE_STRIKE.name, actionReplace: 'Paralyzed', duration: 2, removeOnHit: true, overrides: [7, 18] },
    { id: ConditionEnum.PARALYZE_BLOW.id, name: ConditionEnum.PARALYZE_BLOW.name, actionReplace: 'Paralyzed', duration: 3, removeOnHit: true, overrides: [7, 17] },
    { id: ConditionEnum.ARMOR_CORRUPTION.id, name: ConditionEnum.ARMOR_CORRUPTION.name, duration: 8 }
  ]);
};
