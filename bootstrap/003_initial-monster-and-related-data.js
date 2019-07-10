var ItemCategoryEnum = require('../api/services/EnumService.js').ItemCategory();
var DamageTypeEnum = require('../api/services/EnumService.js').DamageType();

module.exports = async function() {
  /**
   * Monsters
   */
  var AcidElemental = await Monster.create({ name: 'Acid Elemental', hoverStats: 'Resist: 2\nSlayer: Elemental\nKarma/Fame: Level 5\nBard Diff: 84\nTame Diff: NA\nPack instinct: None\nControl Slots: NA\nFood Pref: NA', karma: 5, goldMin: '400', goldMax: '500', alignment: 'Evil', hpMin: '196', hpMax: '213', bardMin: '84', bardMax: '84', taming: 'NA', fireMin: '40', fireMax: '50', coldMin: '20', coldMax: '30', poisonMin: '10', poisonMax: '20', energyMin: '30', energyMax: '40', physicalMin: '45', physicalMax: '55', mageryMin: '70', mageryMax: '85', evalIntMin: '70', evalIntMax: '85', aggroPriority: '3', tacticsMin: '80', tacticsMax: '90', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '30', anatomyMax: '60', strengthMin: '326', strengthMax: '355', dexterityMin: '66', dexterityMax: '85', intelligenceMin: '271', intelligenceMax: '295', baseDmgMin: '9', baseDmgMax: '15', damageType: DamageTypeEnum.POISON.id, preferredFood: 'NA', controlSlots: '0', specials: '\nCorrosive (35):weapons striking and armor struck by creature take a penalty to their durability check.' }).fetch();
  var AirElemental = await Monster.create({ name: 'Air Elemental', hoverStats: 'Resist: 2\nSlayer: Elemental, Air\nKarma/Fame: Level 3\nBard Diff: 75\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '175', goldMax: '225', alignment: 'Evil', hpMin: '76', hpMax: '93', bardMin: '75', bardMax: '75', taming: '0', fireMin: '15', fireMax: '25', coldMin: '10', coldMax: '20', poisonMin: '55', poisonMax: '65', energyMin: '25', energyMax: '35', physicalMin: '35', physicalMax: '45', mageryMin: '60', mageryMax: '75', evalIntMin: '60', evalIntMax: '75', aggroPriority: '3', tacticsMin: '60', tacticsMax: '80', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '126', strengthMax: '155', dexterityMin: '166', dexterityMax: '185', intelligenceMin: '101', intelligenceMax: '125', baseDmgMin: '8', baseDmgMax: '10', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: '\nDeafening Winds: taking a precast action while adjacent to monster = automatic disruption.' }).fetch();
  var AncientWyrm = await Monster.create({ name: 'Ancient Wyrm', hoverStats: 'Resist: 5\nSlayer: Dragon, Reptile\nKarma/Fame: Level 5\nBard Diff: 160\nTame Diff: na\nPack instinct: None\nControl Slots: 5\nFood Pref: Meat', karma: 5, goldMin: '1720', goldMax: '2500', alignment: 'Evil', hpMin: '1177', hpMax: '2500', bardMin: '160', bardMax: '160', taming: 'na', fireMin: '80', fireMax: '90', coldMin: '70', coldMax: '80', poisonMin: '60', poisonMax: '70', energyMin: '60', energyMax: '70', physicalMin: '70', physicalMax: '80', mageryMin: '110', mageryMax: '140', evalIntMin: '90', evalIntMax: '100', aggroPriority: '4', tacticsMin: '110', tacticsMax: '140', resistSpellMin: '5', resistSpellMax: '5', anatomyMin: '120', anatomyMax: '120', strengthMin: '1025', strengthMax: '1425', dexterityMin: '81', dexterityMax: '148', intelligenceMin: '475', intelligenceMax: '675', baseDmgMin: '24', baseDmgMax: '33', damageType: DamageTypeEnum.PHYSICAL.id, breathDmgType: DamageTypeEnum.CHAOS.id, preferredFood: 'Meat', controlSlots: '5', specials: 'Armored: weapons striking this creature must make durability checks upon successful hits.\nTailswipe: AOE, Melee damage to all enemies within range 3        Dispel: if an opponent summoned a creature, monster will cast dispel on creature in place of its ne' }).fetch();
  var Balron = await Monster.create({ name: 'Balron', hoverStats: 'Resist: 3\nSlayer: Demon\nKarma/Fame: Level 5\nBard Diff: 115\nTame Diff: not tameable\nPack instinct: None\nControl Slots: \nFood Pref: ', karma: 5, goldMin: '1200', goldMax: '1650', alignment: 'Evil', hpMin: '592', hpMax: '711', bardMin: '115', bardMax: '115', taming: 'not tameable', fireMin: '60', fireMax: '80', coldMin: '50', coldMax: '60', poisonMin: '100', poisonMax: '100', energyMin: '40', energyMax: '50', physicalMin: '65', physicalMax: '80', mageryMin: '95', mageryMax: '100', evalIntMin: '90', evalIntMax: '100', aggroPriority: '4', tacticsMin: '90', tacticsMax: '100', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '25', anatomyMax: '50', strengthMin: '986', strengthMax: '1185', dexterityMin: '177', dexterityMax: '255', intelligenceMin: '151', intelligenceMax: '250', baseDmgMin: '22', baseDmgMax: '29', damageType: DamageTypeEnum.FIRE.id, preferredFood: '0', controlSlots: '0', specials: 'Curing 80% : if poisoned. Monster will replace next action with a cure attempt.(Interrupt)    *Flying: monster can move up to 5 spaces on a ï¿½moveï¿½ action toward target in aggro priority ignoring terrain, if monster has no valid target in LOS.   Dispel' }).fetch();
  var BoneKnight = await Monster.create({ name: 'Bone Knight', hoverStats: 'Resist: 2\nSlayer: undead\nKarma/Fame: Level 1\nBard Diff: 70\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 1, goldMin: '175', goldMax: '275', alignment: 'Evil', hpMin: '118', hpMax: '150', bardMin: '70', bardMax: '70', taming: '0', fireMin: '20', fireMax: '30', coldMin: '50', coldMax: '60', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '35', physicalMax: '45', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '90', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '196', strengthMax: '250', dexterityMin: '76', dexterityMax: '95', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '8', baseDmgMax: '18', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Health Siphon: Healing spells caset adjacent to this monster, heal it rather than target.\nTaunt: Monster is Aggro Priority 1 to any Pets in LOS.' }).fetch();
  var BloodElemental = await Monster.create({ name: 'Blood Elemental', hoverStats: 'Resist: 3\nSlayer: Elemental\nKarma/Fame: Level 5\nBard Diff: 94\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '700', goldMax: '900', alignment: 'Evil', hpMin: '316', hpMax: '369', bardMin: '94', bardMax: '94', taming: 'na', fireMin: '20', fireMax: '30', coldMin: '40', coldMax: '50', poisonMin: '50', poisonMax: '60', energyMin: '30', energyMax: '40', physicalMin: '55', physicalMax: '65', mageryMin: '85', mageryMax: '100', evalIntMin: '85', evalIntMax: '100', aggroPriority: '3', tacticsMin: '80', tacticsMax: '100', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '526', strengthMax: '615', dexterityMin: '66', dexterityMax: '85', intelligenceMin: '226', intelligenceMax: '350', baseDmgMin: '17', baseDmgMax: '27', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: '\nTerror to behold:-25 to Hit chance and casting success if in LOS of blood elemental.         Curing 70% : if poisoned. Monster will replace next action with a cure attempt.(Interrupt)               Dispel: if an opponent summoned a creature, monster will' }).fetch();
  var Buccaneer = await Monster.create({ name: 'Buccaneer', hoverStats: 'Resist: 0\nSlayer: repond\nKarma/Fame: Level 2\nBard Diff: 70\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '175', goldMax: '275', alignment: 'Evil', hpMin: '118', hpMax: '150', bardMin: '70', bardMax: '70', taming: '0', fireMin: '20', fireMax: '30', coldMin: '20', coldMax: '30', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '20', physicalMax: '40', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '90', tacticsMax: '100', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '100', strengthMax: '150', dexterityMin: '76', dexterityMax: '95', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '8', baseDmgMax: '15', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: ' Potion Range 7' }).fetch();
  var BuccaneerLord = await Monster.create({ name: 'Buccaneer Lord', hoverStats: '0', karma: 3, goldMin: '800', goldMax: '1275', alignment: 'Evil', hpMin: '250', hpMax: '400', bardMin: '70', bardMax: '70', taming: '0', fireMin: '20', fireMax: '30', coldMin: '20', coldMax: '30', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '35', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '100', anatomyMax: '100', strengthMin: '250', strengthMax: '300', dexterityMin: '76', dexterityMax: '95', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '10', baseDmgMax: '18', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Cure Pot: 85% (Interrupt) replace action if unsuccessful., Greater Heal Pot: d6+20 at end of turn. Parry: 30% all attacks and spells.' }).fetch();
  var Deamon = await Monster.create({ name: 'Deamon', hoverStats: 'Resist: 3\nSlayer: Demon\nKarma/Fame: Level 4\nBard Diff: 90\nTame Diff: not tameable\nPack instinct: None\nControl Slots: \nFood Pref: ', karma: 4, goldMin: '560', goldMax: '650', alignment: 'Evil', hpMin: '301', hpMax: '325', bardMin: '90', bardMax: '90', taming: 'not tameable', fireMin: '50', fireMax: '60', coldMin: '30', coldMax: '40', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '45', physicalMax: '60', mageryMin: '70', mageryMax: '80', evalIntMin: '70', evalIntMax: '80', aggroPriority: '3', tacticsMin: '70', tacticsMax: '80', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '476', strengthMax: '505', dexterityMin: '76', dexterityMax: '95', intelligenceMin: '301', intelligenceMax: '325', baseDmgMin: '7', baseDmgMax: '20', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Curing 75% : if poisoned. Monster will replace next action with a cure attempt.    *Flying: monster can move up to 5 spaces on a ï¿½moveï¿½ action toward target in aggro priority ignoring terrain, if monster has no valid target in LOS.' }).fetch();
  var DireWolf = await Monster.create({ name: 'Dire Wolf', hoverStats: 'Resist: 2\nSlayer: Wolf\nKarma/Fame: Level 2\nBard Diff: 50\nTame Diff: 34,0,0,0\nPack instinct: Canine\nControl Slots: 1\nFood Pref: Meat', karma: 2, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '58', hpMax: '72', bardMin: '50', bardMax: '50', taming: '34,0,0,0', fireMin: '10', fireMax: '20', coldMin: '5', coldMax: '10', poisonMin: '5', poisonMax: '10', energyMin: '10', energyMax: '15', physicalMin: '20', physicalMax: '25', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '50', tacticsMax: '70', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '96', strengthMax: '120', dexterityMin: '81', dexterityMax: '105', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '20', baseDmgMax: '32', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Meat', controlSlots: '1', specials: 'Pack Instinct : (Canine) damage bonus of melee and special attacks based upon the number of other monsters of the same type on combat map. ' }).fetch();
  var DisplacerBeast = await Monster.create({ name: 'Displacer Beast', hoverStats: 'Resist: 4\nSlayer: none\nKarma/Fame: Level 3\nBard Diff: 98\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '400', goldMax: '600', alignment: 'Evil', hpMin: '230', hpMax: '300', bardMin: '98', bardMax: '98', taming: 'na', fireMin: '25', fireMax: '45', coldMin: '25', coldMax: '45', poisonMin: '25', poisonMax: '45', energyMin: '25', energyMax: '45', physicalMin: '25', physicalMax: '45', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '4', anatomyMin: '100', anatomyMax: '100', strengthMin: '150', strengthMax: '300', dexterityMin: '65', dexterityMax: '100', intelligenceMin: '80', intelligenceMax: '80', baseDmgMin: '5', baseDmgMax: '18', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: '\nHide (30): If monster drops below listed hp total it hides until and takes no actions till fully healed.  \nAmbidextrous (2): may attack up to two opponents per turn within 2 tiles of creature.  Unyielding Flesh: If creature took no damage this round, it ' }).fetch();
  var Dragon = await Monster.create({ name: 'Dragon', hoverStats: 'Resist: 4\nSlayer: Dragon, Reptile\nKarma/Fame: Level 5\nBard Diff: 105\nTame Diff: 12,0,0,0\nPack instinct: None\nControl Slots: 4\nFood Pref: Meat', karma: 5, goldMin: '1000', goldMax: '1200', alignment: 'Evil', hpMin: '478', hpMax: '500', bardMin: '105', bardMax: '105', taming: '12,0,0,0', fireMin: '60', fireMax: '70', coldMin: '30', coldMax: '40', poisonMin: '25', poisonMax: '35', energyMin: '35', energyMax: '45', physicalMin: '55', physicalMax: '65', mageryMin: '30', mageryMax: '40', evalIntMin: '30', evalIntMax: '40', aggroPriority: '3', tacticsMin: '98', tacticsMax: '100', resistSpellMin: '4', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '796', strengthMax: '825', dexterityMin: '86', dexterityMax: '105', intelligenceMin: '436', intelligenceMax: '475', baseDmgMin: '16', baseDmgMax: '22', damageType: DamageTypeEnum.PHYSICAL.id, breathDmgType: DamageTypeEnum.FIRE.id, preferredFood: 'Meat', controlSlots: '4', specials: 'ARMORED: weapons striking this creature must make durability checks upon successful hits.\nTAILSWIPE: AOE, Melee damage to all enemies within range 3\nDISPEL: if an opponent summoned a creature, monster will cast dispel on creature in place of its next acti' }).fetch();
  var SkeletalDragon = await Monster.create({ name: 'Skeletal Dragon', hoverStats: 'Resist: 5\nSlayer: Dragon, Undead\nKarma/Fame: Level 5\nBard Diff: 126\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: na', karma: 5, goldMin: '1600', goldMax: '1800', alignment: 'Evil', hpMin: '558', hpMax: '599', bardMin: '118', bardMax: '127', taming: 'na', fireMin: '40', fireMax: '60', coldMin: '40', coldMax: '60', poisonMin: '70', poisonMax: '80', energyMin: '40', energyMax: '60', physicalMin: '75', physicalMax: '80', mageryMin: '80', mageryMax: '100', evalIntMin: '80', evalIntMax: '100', aggroPriority: '3', tacticsMin: '98', tacticsMax: '100', resistSpellMin: '5', resistSpellMax: '5', anatomyMin: '0', anatomyMax: '0', strengthMin: '898', strengthMax: '1030', dexterityMin: '68', dexterityMax: '200', intelligenceMin: '488', intelligenceMax: '620', baseDmgMin: '29', baseDmgMax: '35', damageType: DamageTypeEnum.PHYSICAL.id, breathDmgType: DamageTypeEnum.COLD.id, preferredFood: 'na', controlSlots: '0', specials: '\nTailswipe: AOE, Melee damage to all enemies within range 3        Dispel: if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled.(Interrupt)      Poison Immunity (5), Provocation I' }).fetch();
  var DreadSpider = await Monster.create({ name: 'Dread Spider', hoverStats: 'Resist: 2\nSlayer: Arachnid, Spider\nKarma/Fame: Level 4\nBard Diff: 117\nTame Diff: na\nPack instinct: none\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '450', goldMax: '650', alignment: 'Evil', hpMin: '500', hpMax: '750', bardMin: '100', bardMax: '120', taming: 'na', fireMin: '52', fireMax: '60', coldMin: '51', coldMax: '59', poisonMin: '100', poisonMax: '100', energyMin: '50', energyMax: '60', physicalMin: '52', physicalMax: '57', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '85', tacticsMax: '90', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '400', strengthMax: '400', dexterityMin: '134', dexterityMax: '155', intelligenceMin: '291', intelligenceMax: '330', baseDmgMin: '6', baseDmgMax: '16', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Poison Immunity (5): poison of listed level or less have no effect on this creature.   Web (interrupt): 60% - a character who makes a ranged attack against/breaks away from this monster has a chance of being pulled adjacent to the monster if within LOS.  ' }).fetch();
  var EarthElemental = await Monster.create({ name: 'Earth Elemental', hoverStats: 'Resist: 3\nSlayer: Elemental, Earth Elem\nKarma/Fame: Level 3\nBard Diff: 68\nTame Diff: \nPack instinct: None\nControl Slots: 2\nFood Pref: ', karma: 3, goldMin: '10', goldMax: '20', alignment: 'Evil', hpMin: '76', hpMax: '93', bardMin: '68', bardMax: '68', taming: '0', fireMin: '10', fireMax: '20', coldMin: '10', coldMax: '20', poisonMin: '15', poisonMax: '25', energyMin: '15', energyMax: '25', physicalMin: '30', physicalMax: '35', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '60', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '126', strengthMax: '155', dexterityMin: '66', dexterityMax: '85', intelligenceMin: '71', intelligenceMax: '92', baseDmgMin: '17', baseDmgMax: '32', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '2', specials: 'Armored: weapons striking this creature must make durability checks upon successful hits.' }).fetch();
  var Ettin = await Monster.create({ name: 'Ettin', hoverStats: 'Resist: 2\nSlayer: Repond\nKarma/Fame: Level 1\nBard Diff: 47\nTame Diff: not tameable\nPack instinct: None\nControl Slots: \nFood Pref: Chicken', karma: 1, goldMin: '175', goldMax: '225', alignment: 'Evil', hpMin: '82', hpMax: '99', bardMin: '47', bardMax: '47', taming: 'not tameable', fireMin: '15', fireMax: '25', coldMin: '40', coldMax: '50', poisonMin: '15', poisonMax: '25', energyMin: '15', energyMax: '25', physicalMin: '35', physicalMax: '40', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '50', tacticsMax: '70', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '136', strengthMax: '165', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '31', intelligenceMax: '55', baseDmgMin: '7', baseDmgMax: '17', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Chicken', controlSlots: '0', specials: 'Crushing: any armor location damaged by a melee strike must make a durability check at -40%\n\nDual Headed: may attack 2 adjacent opponents per round. (roll seperately)' }).fetch();
  var EvilMage = await Monster.create({ name: 'Evil Mage', hoverStats: 'Resist: 4\nSlayer: mage\nKarma/Fame: Level 2\nBard Diff: 73\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '125', goldMax: '175', alignment: 'Evil', hpMin: '49', hpMax: '63', bardMin: '73', bardMax: '73', taming: '0', fireMin: '5', fireMax: '10', coldMin: '0', coldMax: '0', poisonMin: '5', poisonMax: '10', energyMin: '5', energyMax: '10', physicalMin: '15', physicalMax: '20', mageryMin: '75', mageryMax: '100', evalIntMin: '75', evalIntMax: '100', aggroPriority: '3', tacticsMin: '65', tacticsMax: '88', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '81', strengthMax: '105', dexterityMin: '96', dexterityMax: '120', intelligenceMin: '96', intelligenceMax: '120', baseDmgMin: '5', baseDmgMax: '10', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '\nDispel  : if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled.                 Curing % : if poisoned. Monster will replace next action with a cure attempt.' }).fetch();
  var FireBeetle = await Monster.create({ name: 'Fire Beetle', hoverStats: 'Resist: 2\nSlayer: beetle, Flame\nKarma/Fame: Level 3\nBard Diff: 84\nTame Diff: 12,0,0,0\nPack instinct: None\nControl Slots: 3\nFood Pref: Chicken', karma: 3, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '100', hpMax: '200', bardMin: '84', bardMax: '84', taming: '12,0,0,0', fireMin: '70', fireMax: '75', coldMin: '10', coldMax: '10', poisonMin: '30', poisonMax: '30', energyMin: '30', energyMax: '30', physicalMin: '40', physicalMax: '40', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '40', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '100', strengthMin: '150', strengthMax: '300', dexterityMin: '65', dexterityMax: '100', intelligenceMin: '500', intelligenceMax: '500', baseDmgMin: '7', baseDmgMax: '20', damageType: DamageTypeEnum.FIRE.id, preferredFood: 'Chicken', controlSlots: '3', specials: '\nSubdue (30): monster cannot be tamed unless below the listed hit point total. Ranged Aggression: (interrupt) If hit with a ranged attack, monster will move as an interrupt toward the attacker and make an immediate melee attack. Move Speed 6. Armored: wea' }).fetch();
  var FireElemental = await Monster.create({ name: 'Fire Elemental', hoverStats: 'Resist: 3\nSlayer: Elemental, Fire Elemental, Flame\nKarma/Fame: Level 3\nBard Diff: 75\nTame Diff: not tameable\nPack instinct: None\nControl Slots: 4\nFood Pref: ', karma: 3, goldMin: '175', goldMax: '225', alignment: 'Evil', hpMin: '88', hpMax: '108', bardMin: '75', bardMax: '75', taming: 'not tameable', fireMin: '100', fireMax: '140', coldMin: '5', coldMax: '10', poisonMin: '30', poisonMax: '40', energyMin: '30', energyMax: '40', physicalMin: '35', physicalMax: '45', mageryMin: '60', mageryMax: '75', evalIntMin: '60', evalIntMax: '75', aggroPriority: '3', tacticsMin: '80', tacticsMax: '100', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '126', strengthMax: '155', dexterityMin: '166', dexterityMax: '185', intelligenceMin: '75', intelligenceMax: '105', baseDmgMin: '7', baseDmgMax: '14', damageType: DamageTypeEnum.FIRE.id, preferredFood: '0', controlSlots: '4', specials: 'Volatile (1-20 Fire) : melee attacks against this monster cause elemental damage to the attacker every hit.' }).fetch();
  var GiantBeetle = await Monster.create({ name: 'Giant Beetle', hoverStats: 'Resist: 4\nSlayer: beetle\nKarma/Fame: Level 3\nBard Diff: 88\nTame Diff: 100,92,42,0\nPack instinct: None\nControl Slots: 3\nFood Pref: meat', karma: 3, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '200', hpMax: '200', bardMin: '88', bardMax: '88', taming: '100,92,42,0', fireMin: '20', fireMax: '30', coldMin: '20', coldMax: '30', poisonMin: '20', poisonMax: '30', energyMin: '20', energyMax: '30', physicalMin: '40', physicalMax: '40', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '100', strengthMin: '300', strengthMax: '300', dexterityMin: '100', dexterityMax: '100', intelligenceMin: '500', intelligenceMax: '500', baseDmgMin: '7', baseDmgMax: '20', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'meat', controlSlots: '3', specials: '\nSubdue (30): monster cannot be tamed unless below the listed hit point total. Ranged Aggression: (interrupt) If hit with a ranged attack, monster will move as an interrupt toward the attacker and make an immediate melee attack. Move Speed 6. Armored: wea' }).fetch();
  var GiantSpider = await Monster.create({ name: 'Giant Spider', hoverStats: 'Resist: 1\nSlayer: Arachnid, Spider\nKarma/Fame: Level 1\nBard Diff: 58\nTame Diff: 82,32,0,0\nPack instinct: Arachnid\nControl Slots: 1\nFood Pref: meat', karma: 1, goldMin: '25', goldMax: '50', alignment: 'Evil', hpMin: '46', hpMax: '60', bardMin: '58', bardMax: '58', taming: '82,32,0,0', fireMin: '0', fireMax: '0', coldMin: '0', coldMax: '0', poisonMin: '25', poisonMax: '35', energyMin: '0', energyMax: '0', physicalMin: '15', physicalMax: '20', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '35', tacticsMax: '50', resistSpellMin: '1', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '76', strengthMax: '100', dexterityMin: '76', dexterityMax: '95', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '5', baseDmgMax: '13', damageType: DamageTypeEnum.POISON.id, preferredFood: 'meat', controlSlots: '1', specials: 'Poison Immunity (2): poison of listed level or less have no effect on this creature.   Pack Instinct : (Arachnid) damage bonus of melee and special attacks based upon the number of other monsters of the same type on combat map. ' }).fetch();
  var Gargoyle = await Monster.create({ name: 'Gargoyle', hoverStats: 'Resist: 3\nSlayer: Demon, Gargoyle\nKarma/Fame: Level 3\nBard Diff: 73\nTame Diff: \nPack instinct: None\nControl Slots: 1\nFood Pref: Chicken', karma: 3, goldMin: '125', goldMax: '175', alignment: 'Evil', hpMin: '88', hpMax: '105', bardMin: '73', bardMax: '73', taming: '0', fireMin: '25', fireMax: '35', coldMin: '5', coldMax: '10', poisonMin: '15', poisonMax: '25', energyMin: '0', energyMax: '0', physicalMin: '30', physicalMax: '35', mageryMin: '70', mageryMax: '85', evalIntMin: '70', evalIntMax: '85', aggroPriority: '2', tacticsMin: '50', tacticsMax: '70', resistSpellMin: '3', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '146', strengthMax: '175', dexterityMin: '76', dexterityMax: '95', intelligenceMin: '81', intelligenceMax: '105', baseDmgMin: '7', baseDmgMax: '14', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Chicken', controlSlots: '1', specials: '\nHP Reaction: (20): Monster turns to stone for 6 turns,is impervious to damage and is blocking terrain. After duration, Monster returns to normal at full health.' }).fetch();
  var Gazer = await Monster.create({ name: 'Gazer', hoverStats: 'Resist: 2\nSlayer: none\nKarma/Fame: Level 3\nBard Diff: 73\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '125', goldMax: '175', alignment: 'Evil', hpMin: '58', hpMax: '75', bardMin: '73', bardMax: '73', taming: '0', fireMin: '40', fireMax: '50', coldMin: '20', coldMax: '30', poisonMin: '10', poisonMax: '20', energyMin: '10', energyMax: '20', physicalMin: '20', physicalMax: '30', mageryMin: '50', mageryMax: '65', evalIntMin: '50', evalIntMax: '65', aggroPriority: '3', tacticsMin: '50', tacticsMax: '70', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '96', strengthMax: '125', dexterityMin: '86', dexterityMax: '105', intelligenceMin: '141', intelligenceMax: '165', baseDmgMin: '5', baseDmgMax: '10', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '\nAmbidextrous(5): Monster will make a single attack against up to 5 targets per round in LOS.     Curing%: if poisoned. Monster will replace next action with a cure attempt.' }).fetch();
  var ElderGazer = await Monster.create({ name: 'Elder Gazer', hoverStats: 'Resist: 5\nSlayer: none\nKarma/Fame: Level 3\nBard Diff: 90\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '400', goldMax: '600', alignment: 'Evil', hpMin: '178', hpMax: '195', bardMin: '90', bardMax: '90', taming: 'na', fireMin: '60', fireMax: '70', coldMin: '40', coldMax: '50', poisonMin: '40', poisonMax: '50', energyMin: '40', energyMax: '50', physicalMin: '45', physicalMax: '55', mageryMin: '90', mageryMax: '100', evalIntMin: '90', evalIntMax: '100', aggroPriority: '4', tacticsMin: '80', tacticsMax: '100', resistSpellMin: '5', resistSpellMax: '6', anatomyMin: '60', anatomyMax: '100', strengthMin: '296', strengthMax: '325', dexterityMin: '86', dexterityMax: '105', intelligenceMin: '291', intelligenceMax: '385', baseDmgMin: '8', baseDmgMax: '19', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '\nAmbidextrous(5): Monster will make a single attack against up to 5 targets per round in LOS. Move actions will move into LOS of Next target.     Curing%: if poisoned. Monster will replace next action with a cure attempt. (Interrupt)  Dispel (Interrupt)  ' }).fetch();
  var GreatHart = await Monster.create({ name: 'Great Hart', hoverStats: 'Resist: 1\nSlayer: none\nKarma/Fame: Level 0\nBard Diff: 27\nTame Diff: 82,32,0,0\nPack instinct: none\nControl Slots: 1\nFood Pref: fruit/vege', karma: 0, goldMin: '0', goldMax: '0', alignment: 'nuetral', hpMin: '27', hpMax: '41', bardMin: '27', bardMax: '27', taming: '82,32,0,0', fireMin: '0', fireMax: '0', coldMin: '5', coldMax: '10', poisonMin: '0', poisonMax: '0', energyMin: '0', energyMax: '0', physicalMin: '20', physicalMax: '25', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '1', tacticsMin: '29', tacticsMax: '47', resistSpellMin: '1', resistSpellMax: '1', anatomyMin: '0', anatomyMax: '0', strengthMin: '41', strengthMax: '71', dexterityMin: '47', dexterityMax: '77', intelligenceMin: '27', intelligenceMax: '57', baseDmgMin: '7', baseDmgMax: '13', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'fruit/vege', controlSlots: '1', specials: '0' }).fetch();
  var GreaterDragon = await Monster.create({ name: 'Greater Dragon', hoverStats: 'Resist: 2\nSlayer: Dragon, Reptile\nKarma/Fame: Level 5\nBard Diff: 160\nTame Diff: 2,0,0,0\nPack instinct: None\nControl Slots: 5\nFood Pref: Meat', karma: 5, goldMin: '1720', goldMax: '2500', alignment: 'Evil', hpMin: '1000', hpMax: '2000', bardMin: '160', bardMax: '160', taming: '2,0,0,0', fireMin: '65', fireMax: '90', coldMin: '40', coldMax: '55', poisonMin: '40', poisonMax: '60', energyMin: '50', energyMax: '75', physicalMin: '60', physicalMax: '85', mageryMin: '110', mageryMax: '140', evalIntMin: '90', evalIntMax: '100', aggroPriority: '4', tacticsMin: '110', tacticsMax: '140', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '1025', strengthMax: '1425', dexterityMin: '81', dexterityMax: '148', intelligenceMin: '475', intelligenceMax: '675', baseDmgMin: '24', baseDmgMax: '33', damageType: DamageTypeEnum.PHYSICAL.id, breathDmgType: DamageTypeEnum.FIRE.id, preferredFood: 'Meat', controlSlots: '5', specials: 'Armored: weapons striking this creature must make durability checks upon successful hits.\nTailswipe: AOE, Melee damage to all enemies within range 3        Dispel: if an opponent summoned a creature, monster will cast dispel on creature in place of its ne' }).fetch();
  var Griffin = await Monster.create({ name: 'Griffin', hoverStats: 'Resist: 3\nSlayer: Dragon\nKarma/Fame: Level 5\nBard Diff: 109\nTame Diff: 3,0,0,0\nPack instinct: none\nControl Slots: 5\nFood Pref: Fish', karma: 5, goldMin: '1500', goldMax: '1900', alignment: 'Evil', hpMin: '900', hpMax: '1100', bardMin: '98', bardMax: '115', taming: '3,0,0,0', fireMin: '70', fireMax: '90', coldMin: '15', coldMax: '25', poisonMin: '40', poisonMax: '50', energyMin: '40', energyMax: '50', physicalMin: '55', physicalMax: '70', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '110', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '75', anatomyMax: '80', strengthMin: '1200', strengthMax: '1420', dexterityMin: '170', dexterityMax: '270', intelligenceMin: '300', intelligenceMax: '325', baseDmgMin: '18', baseDmgMax: '30', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Fish', controlSlots: '5', specials: '\nMount (4): once tamed, creature may be ridden as a Flying mount' }).fetch();
  var HellHound = await Monster.create({ name: 'Hell Hound', hoverStats: 'Resist: 3\nSlayer: Wolf, Flame\nKarma/Fame: Level 3\nBard Diff: 63\nTame Diff: 29,0,0,0\nPack instinct: Canine\nControl Slots: 1\nFood Pref: Meat', karma: 3, goldMin: '175', goldMax: '225', alignment: 'Evil', hpMin: '66', hpMax: '125', bardMin: '63', bardMax: '63', taming: '29,0,0,0', fireMin: '30', fireMax: '40', coldMin: '0', coldMax: '0', poisonMin: '10', poisonMax: '20', energyMin: '10', energyMax: '20', physicalMin: '25', physicalMax: '35', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '50', tacticsMax: '70', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '102', strengthMax: '150', dexterityMin: '81', dexterityMax: '105', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '11', baseDmgMax: '17', damageType: DamageTypeEnum.FIRE.id, breathDmgType: DamageTypeEnum.FIRE.id, preferredFood: 'Meat', controlSlots: '1', specials: 'Pack Instinct : (Canine) damage bonus of melee and special attacks based upon the number of other monsters of the same type on combat map.' }).fetch();
  var Horse = await Monster.create({ name: 'Horse', hoverStats: 'Resist: 1\nSlayer: none\nKarma/Fame: Level -1\nBard Diff: 26\nTame Diff: 100,92,42,0\nPack instinct: none\nControl Slots: 1\nFood Pref: fruit/vege', karma: 0, goldMin: '0', goldMax: '0', alignment: 'nuetral', hpMin: '27', hpMax: '41', bardMin: '26', bardMax: '26', taming: '100,92,42,0', fireMin: '0', fireMax: '0', coldMin: '0', coldMax: '0', poisonMin: '0', poisonMax: '0', energyMin: '0', energyMax: '0', physicalMin: '15', physicalMax: '20', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '1', tacticsMin: '21', tacticsMax: '42', resistSpellMin: '1', resistSpellMax: '1', anatomyMin: '0', anatomyMax: '0', strengthMin: '22', strengthMax: '98', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '6', intelligenceMax: '10', baseDmgMin: '4', baseDmgMax: '6', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'fruit/vege', controlSlots: '1', specials: '\nMount (4): once tamed, creature may be ridden as a mount' }).fetch();
  var Imp = await Monster.create({ name: 'Imp', hoverStats: 'Resist: 2\nSlayer: Deamon\nKarma/Fame: Karma 2\nBard Diff: 65\nTame Diff: 34,0,0,0\nPack instinct: None\nControl Slots: 1\nFood Pref: meat', karma: 2, goldMin: '50', goldMax: '100', alignment: 'Evil', hpMin: '20', hpMax: '30', bardMin: '65', bardMax: '65', taming: '34,0,0,0', fireMin: '40', fireMax: '50', coldMin: '20', coldMax: '30', poisonMin: '30', poisonMax: '40', energyMin: '30', energyMax: '40', physicalMin: '25', physicalMax: '35', mageryMin: '90', mageryMax: '100', evalIntMin: '20', evalIntMax: '30', aggroPriority: '3', tacticsMin: '42', tacticsMax: '50', resistSpellMin: '1', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '91', strengthMax: '115', dexterityMin: '61', dexterityMax: '80', intelligenceMin: '86', intelligenceMax: '105', baseDmgMin: '10', baseDmgMax: '14', damageType: DamageTypeEnum.POISON.id, preferredFood: 'meat', controlSlots: '1', specials: 'Hunger Pains*: target reduces Hunger track 8 steps. RESISTABLE' }).fetch();
  var Lich = await Monster.create({ name: 'Lich', hoverStats: 'Resist: 4\nSlayer: Undead, Mage\nKarma/Fame: Level 4\nBard Diff: 85\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '275', goldMax: '324', alignment: 'Evil', hpMin: '103', hpMax: '120', bardMin: '85', bardMax: '85', taming: '0', fireMin: '20', fireMax: '30', coldMin: '50', coldMax: '60', poisonMin: '55', poisonMax: '65', energyMin: '40', energyMax: '50', physicalMin: '40', physicalMax: '60', mageryMin: '70', mageryMax: '80', evalIntMin: '100', evalIntMax: '100', aggroPriority: '4', tacticsMin: '70', tacticsMax: '90', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '171', strengthMax: '200', dexterityMin: '126', dexterityMax: '145', intelligenceMin: '276', intelligenceMax: '305', baseDmgMin: '24', baseDmgMax: '26', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: '\nPoison Immunity(5): immune to all poison levels          Dispel  : if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled. (interupt: cast once as soon as creature is summoned)    ' }).fetch();
  var LichLord = await Monster.create({ name: 'Lich Lord', hoverStats: 'Resist: 7\nSlayer: Undead, Mage\nKarma/Fame: Level 5\nBard Diff: 106\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '450', goldMax: '600', alignment: 'Evil', hpMin: '250', hpMax: '303', bardMin: '106', bardMax: '106', taming: '0', fireMin: '30', fireMax: '40', coldMin: '50', coldMax: '60', poisonMin: '50', poisonMax: '60', energyMin: '40', energyMax: '50', physicalMin: '40', physicalMax: '50', mageryMin: '90', mageryMax: '100', evalIntMin: '90', evalIntMax: '100', aggroPriority: '4', tacticsMin: '50', tacticsMax: '70', resistSpellMin: '6', resistSpellMax: '8', anatomyMin: '0', anatomyMax: '0', strengthMin: '416', strengthMax: '505', dexterityMin: '146', dexterityMax: '165', intelligenceMin: '566', intelligenceMax: '655', baseDmgMin: '24', baseDmgMax: '26', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: '\nPoison Immunity(5): immune to all poison levels  Dispel  : if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled. (interupt)     Teleport: if monster loses LOS to all potential ta' }).fetch();
  var Medusa = await Monster.create({ name: 'Medusa', hoverStats: 'Resist: 5\nSlayer: Repond\nKarma/Fame: Level 5\nBard Diff: 160\nTame Diff: Not Tameable\nPack instinct: None\nControl Slots: na\nFood Pref: Meat', karma: 5, goldMin: '1500', goldMax: '3000', alignment: 'Evil', hpMin: '1000', hpMax: '2000', bardMin: '160', bardMax: '160', taming: 'Not Tameable', fireMin: '50', fireMax: '60', coldMin: '55', coldMax: '65', poisonMin: '70', poisonMax: '90', energyMin: '65', energyMax: '75', physicalMin: '55', physicalMax: '65', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '4', tacticsMin: '125', tacticsMax: '135', resistSpellMin: '5', resistSpellMax: '5', anatomyMin: '90', anatomyMax: '100', strengthMin: '1378', strengthMax: '1442', dexterityMin: '129', dexterityMax: '143', intelligenceMin: '575', intelligenceMax: '671', baseDmgMin: '21', baseDmgMax: '28', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Meat', controlSlots: '0', specials: '\nArtifact Drop: 10% ,Avoid Gaze: DCI 20, Ranged Mastery: May make ranged attacks vs adjacent enemies.  Wild Gaze: Pets in LOS of Medusa go wild and attack according to Aggro Priority until Medusa is slain. Stone Corpse: character corpses are stone and can' }).fetch();
  var Mummy = await Monster.create({ name: 'Mummy', hoverStats: 'Resist: 0\nSlayer: Undead\nKarma/Fame: Level 3\nBard Diff: 63\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '305', goldMax: '315', alignment: 'Evil', hpMin: '100', hpMax: '200', bardMin: '63', bardMax: '63', taming: '0', fireMin: '10', fireMax: '20', coldMin: '50', coldMax: '60', poisonMin: '20', poisonMax: '30', energyMin: '20', energyMax: '30', physicalMin: '45', physicalMax: '55', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '35', tacticsMax: '50', resistSpellMin: '0', resistSpellMax: '1', anatomyMin: '0', anatomyMax: '0', strengthMin: '346', strengthMax: '370', dexterityMin: '71', dexterityMax: '90', intelligenceMin: '26', intelligenceMax: '40', baseDmgMin: '13', baseDmgMax: '23', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Poison Immunity (1): poison of listed level or less have no effect on this creature.' }).fetch();
  var Nightmare = await Monster.create({ name: 'Nightmare', hoverStats: 'Resist: 4\nSlayer: none\nKarma/Fame: Level 3\nBard Diff: 85\nTame Diff: 10,0,0,0\nPack instinct: None\nControl Slots: 2\nFood Pref: Meat', karma: 3, goldMin: '400', goldMax: '500', alignment: 'Evil', hpMin: '298', hpMax: '315', bardMin: '85', bardMax: '85', taming: '10,0,0,0', fireMin: '30', fireMax: '40', coldMin: '30', coldMax: '40', poisonMin: '30', poisonMax: '40', energyMin: '20', energyMax: '30', physicalMin: '55', physicalMax: '65', mageryMin: '10', mageryMax: '50', evalIntMin: '10', evalIntMax: '50', aggroPriority: '2', tacticsMin: '98', tacticsMax: '100', resistSpellMin: '4', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '496', strengthMax: '525', dexterityMin: '86', dexterityMax: '125', intelligenceMin: '86', intelligenceMax: '125', baseDmgMin: '16', baseDmgMax: '22', damageType: DamageTypeEnum.FIRE.id, breathDmgType: DamageTypeEnum.FIRE.id, preferredFood: 'Meat', controlSlots: '2', specials: 'Mount (4): once tamed, creature may be ridden as a mount' }).fetch();
  var Ogre = await Monster.create({ name: 'Ogre', hoverStats: 'Resist: 2\nSlayer: Repond, Ogre\nKarma/Fame: Level 1\nBard Diff: 49\nTame Diff: not tameable\nPack instinct: None\nControl Slots: na\nFood Pref: meat', karma: 1, goldMin: '125', goldMax: '175', alignment: 'Evil', hpMin: '100', hpMax: '117', bardMin: '49', bardMax: '49', taming: 'not tameable', fireMin: '15', fireMax: '25', coldMin: '15', coldMax: '25', poisonMin: '15', poisonMax: '25', energyMin: '25', energyMax: '25', physicalMin: '30', physicalMax: '35', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '60', tacticsMax: '70', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '166', strengthMax: '195', dexterityMin: '46', dexterityMax: '65', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '9', baseDmgMax: '11', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'meat', controlSlots: '0', specials: '  Crushing: any armor location damaged by a melee strike must make a durability check at -30%   Weapon Resistance(Maces)' }).fetch();
  var OgreLord = await Monster.create({ name: 'Ogre Lord', hoverStats: 'Resist: 5\nSlayer: Repond, Ogre\nKarma/Fame: Level 4\nBard Diff: 90\nTame Diff: not tameable\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '600', goldMax: '650', alignment: 'Evil', hpMin: '476', hpMax: '552', bardMin: '90', bardMax: '90', taming: 'not tameable', fireMin: '30', fireMax: '40', coldMin: '30', coldMax: '40', poisonMin: '40', poisonMax: '50', energyMin: '40', energyMax: '50', physicalMin: '45', physicalMax: '55', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '90', tacticsMax: '100', resistSpellMin: '5', resistSpellMax: '6', anatomyMin: '0', anatomyMax: '0', strengthMin: '767', strengthMax: '945', dexterityMin: '66', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '20', baseDmgMax: '25', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Poison Immunity(2)  Crushing: any armor location damaged by a melee strike must make a durability check at -50%   Weapon Resistance(Maces)' }).fetch();
  var Orc = await Monster.create({ name: 'Orc ', hoverStats: 'Resist: 3\nSlayer: Repond, orc\nKarma/Fame: Level 2\nBard Diff: 73\nTame Diff: not tameable\nPack instinct: None\nControl Slots: na\nFood Pref: Players', karma: 2, goldMin: '147', goldMax: '215', alignment: 'Evil', hpMin: '95', hpMax: '123', bardMin: '73', bardMax: '73', taming: 'not tameable', fireMin: '30', fireMax: '40', coldMin: '20', coldMax: '30', poisonMin: '30', poisonMax: '40', energyMin: '30', energyMax: '40', physicalMin: '25', physicalMax: '35', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '75', tacticsMax: '90', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '100', anatomyMax: '100', strengthMin: '147', strengthMax: '215', dexterityMin: '81', dexterityMax: '100', intelligenceMin: '61', intelligenceMax: '85', baseDmgMin: '4', baseDmgMax: '14', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Players', controlSlots: '0', specials: '\nBola: If not adjacent to opponnet, replace action with, dismount the closest mounted opponent within 8 tiles. Opponent struck cannot remount this combat. (Ground Gargoyle)              Bleed: target takes an additional 6pts direct damage for 5 rounds in ' }).fetch();
  var PackHorse = await Monster.create({ name: 'Pack Horse', hoverStats: 'Resist: 1\nSlayer: \nKarma/Fame: Level -1\nBard Diff: 32\nTame Diff: Must Buy\nPack instinct: None\nControl Slots: 1\nFood Pref: fruit. veg', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Nuetral', hpMin: '61', hpMax: '80', bardMin: '32', bardMax: '32', taming: '100,92,42,0', fireMin: '10', fireMax: '15', coldMin: '20', coldMax: '25', poisonMin: '10', poisonMax: '15', energyMin: '10', energyMax: '15', physicalMin: '20', physicalMax: '25', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '1', tacticsMin: '30', tacticsMax: '44', resistSpellMin: '1', resistSpellMax: '1', anatomyMin: '0', anatomyMax: '0', strengthMin: '44', strengthMax: '120', dexterityMin: '36', dexterityMax: '55', intelligenceMin: '6', intelligenceMax: '10', baseDmgMin: '7', baseDmgMax: '16', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'fruit. veg', controlSlots: '1', specials: '\nPack Animal: weight Limit 1000/20 cards \nUninteresting: The Pack Horse is always the last target choice in enemy aggro priority.' }).fetch();
  var Pixie = await Monster.create({ name: 'Pixie', hoverStats: 'Resist: 6\nSlayer: fey\nKarma/Fame: Karma -2\nBard Diff: 84\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Good', hpMin: '15', hpMax: '20', bardMin: '84', bardMax: '84', taming: 'na', fireMin: '40', fireMax: '50', coldMin: '40', coldMax: '50', poisonMin: '40', poisonMax: '50', energyMin: '40', energyMax: '50', physicalMin: '80', physicalMax: '90', mageryMin: '90', mageryMax: '100', evalIntMin: '90', evalIntMax: '100', aggroPriority: '3', tacticsMin: '10', tacticsMax: '20', resistSpellMin: '4', resistSpellMax: '6', anatomyMin: '0', anatomyMax: '0', strengthMin: '21', strengthMax: '30', dexterityMin: '300', dexterityMax: '400', intelligenceMin: '200', intelligenceMax: '250', baseDmgMin: '9', baseDmgMax: '15', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: 'Pixie Dust: target reduces sleep track 8 steps. RESISTABLE Invisibility: DCI 20' }).fetch();
  var GiantRat = await Monster.create({ name: 'Giant Rat', hoverStats: 'Resist: 1\nSlayer: Vermin\nKarma/Fame: Level 0\nBard Diff: 25\nTame Diff: 100,92,42,0\nPack instinct: none\nControl Slots: 1\nFood Pref: fish', karma: 0, goldMin: '25', goldMax: '50', alignment: 'Evil', hpMin: '26', hpMax: '39', bardMin: '25', bardMax: '25', taming: '100,92,42,0', fireMin: '5', fireMax: '10', coldMin: '0', coldMax: '0', poisonMin: '25', poisonMax: '30', energyMin: '0', energyMax: '0', physicalMin: '15', physicalMax: '20', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '30', tacticsMax: '44', resistSpellMin: '1', resistSpellMax: '1', anatomyMin: '0', anatomyMax: '0', strengthMin: '32', strengthMax: '74', dexterityMin: '46', dexterityMax: '65', intelligenceMin: '16', intelligenceMax: '30', baseDmgMin: '5', baseDmgMax: '11', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'fish', controlSlots: '1', specials: '\n' }).fetch();
  var Ratman = await Monster.create({ name: 'Ratman', hoverStats: 'Resist: 1\nSlayer: Repond\nKarma/Fame: Level 0\nBard Diff: 49\nTame Diff: not tameable\nPack instinct: None\nControl Slots: na\nFood Pref: Chicken', karma: 0, goldMin: '50', goldMax: '100', alignment: 'Evil', hpMin: '58', hpMax: '72', bardMin: '49', bardMax: '49', taming: 'not tameable', fireMin: '10', fireMax: '20', coldMin: '10', coldMax: '20', poisonMin: '10', poisonMax: '20', energyMin: '10', energyMax: '20', physicalMin: '25', physicalMax: '30', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '50', tacticsMax: '75', resistSpellMin: '1', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '96', strengthMax: '120', dexterityMin: '81', dexterityMax: '100', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '4', baseDmgMax: '5', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Chicken', controlSlots: '0', specials: '\nLoot(interrupt): Loot 1 equipped item or inventory item if nothing equipped. Can loot bodies they did not kill' }).fetch();
  var RatmanArcher = await Monster.create({ name: 'Ratman Archer', hoverStats: 'Resist: 3\nSlayer: Repond\nKarma/Fame: Level 0\nBard Diff: 73\nTame Diff: not tameable\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 0, goldMin: '30', goldMax: '35', alignment: 'Evil', hpMin: '88', hpMax: '108', bardMin: '73', bardMax: '73', taming: 'not tameable', fireMin: '10', fireMax: '20', coldMin: '10', coldMax: '20', poisonMin: '10', poisonMax: '20', energyMin: '10', energyMax: '20', physicalMin: '25', physicalMax: '30', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '50', tacticsMax: '75', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '60', anatomyMax: '100', strengthMin: '146', strengthMax: '180', dexterityMin: '101', dexterityMax: '130', intelligenceMin: '116', intelligenceMax: '140', baseDmgMin: '4', baseDmgMax: '10', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Loot(interrupt): steal one card from inventory of adj corpse' }).fetch();
  var RatmanMage = await Monster.create({ name: 'Ratman Mage', hoverStats: 'Resist: 2\nSlayer: Repond\nKarma/Fame: Level 1\nBard Diff: 78\nTame Diff: not tameable\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 1, goldMin: '27', goldMax: '35', alignment: 'Evil', hpMin: '88', hpMax: '108', bardMin: '78', bardMax: '82', taming: 'not tameable', fireMin: '10', fireMax: '20', coldMin: '10', coldMax: '20', poisonMin: '10', poisonMax: '20', energyMin: '10', energyMax: '20', physicalMin: '40', physicalMax: '45', mageryMin: '70', mageryMax: '80', evalIntMin: '70', evalIntMax: '80', aggroPriority: '3', tacticsMin: '50', tacticsMax: '75', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '146', strengthMax: '180', dexterityMin: '101', dexterityMax: '130', intelligenceMin: '186', intelligenceMax: '210', baseDmgMin: '7', baseDmgMax: '14', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '0' }).fetch();
  var Reptalon = await Monster.create({ name: 'Reptalon', hoverStats: 'Resist: 3\nSlayer: Dragon, Reptile\nKarma/Fame: Level 5\nBard Diff: 118\nTame Diff: 4,0,0,0\nPack instinct: None\nControl Slots: 5\nFood Pref: Meat', karma: 5, goldMin: '1600', goldMax: '2500', alignment: 'Evil', hpMin: '800', hpMax: '1000', bardMin: '115', bardMax: '120', taming: '4,0,0,0', fireMin: '35', fireMax: '45', coldMin: '35', coldMax: '45', poisonMin: '50', poisonMax: '65', energyMin: '70', energyMax: '85', physicalMin: '50', physicalMax: '65', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '108', resistSpellMin: '3', resistSpellMax: '3', anatomyMin: '55', anatomyMax: '60', strengthMin: '1000', strengthMax: '1025', dexterityMin: '81', dexterityMax: '148', intelligenceMin: '250', intelligenceMax: '290', baseDmgMin: '21', baseDmgMax: '28', damageType: DamageTypeEnum.ENERGY.id, breathDmgType: DamageTypeEnum.ENERGY.id, preferredFood: 'Meat', controlSlots: '5', specials: 'Mount (Move 4): May be ridden as a mount once tamed. Cannot Fly while Mounted' }).fetch();
  var RottingCorpse = await Monster.create({ name: 'Rotting Corpse', hoverStats: 'Resist: 10\nSlayer: Undead\nKarma/Fame: Level 5\nBard Diff: 129\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '1050', goldMax: '1275', alignment: 'Evil', hpMin: '1200', hpMax: '1200', bardMin: '129', bardMax: '129', taming: '0', fireMin: '20', fireMax: '30', coldMin: '50', coldMax: '70', poisonMin: '40', poisonMax: '50', energyMin: '20', energyMax: '30', physicalMin: '35', physicalMax: '45', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '10', resistSpellMax: '10', anatomyMin: '0', anatomyMax: '0', strengthMin: '301', strengthMax: '350', dexterityMin: '75', dexterityMax: '75', intelligenceMin: '151', intelligenceMax: '200', baseDmgMin: '8', baseDmgMax: '10', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: '\nPoison Immunity(5): immune to all poison levels' }).fetch();
  var RuneBeetle = await Monster.create({ name: 'Rune Beetle', hoverStats: 'Resist: 4\nSlayer: Beetle\nKarma/Fame: Level 5\nBard Diff: 112\nTame Diff: 12,0,0,0\nPack instinct: None\nControl Slots: 3\nFood Pref: Fuit, Veg', karma: 5, goldMin: '1000', goldMax: '1200', alignment: 'Evil', hpMin: '310', hpMax: '360', bardMin: '112', bardMax: '112', taming: '12,0,0,0', fireMin: '35', fireMax: '50', coldMin: '35', coldMax: '50', poisonMin: '75', poisonMax: '95', energyMin: '40', energyMax: '60', physicalMin: '40', physicalMax: '65', mageryMin: '100', mageryMax: '110', evalIntMin: '100', evalIntMax: '125', aggroPriority: '4', tacticsMin: '80', tacticsMax: '95', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '400', strengthMax: '465', dexterityMin: '125', dexterityMax: '170', intelligenceMin: '375', intelligenceMax: '450', baseDmgMin: '15', baseDmgMax: '22', damageType: DamageTypeEnum.ENERGY.id, preferredFood: 'Fuit, Veg', controlSlots: '3', specials: '\nCorruption:Opponents damage reduction is 0 til end of turn.   Bleed: target takes an additional 6pts direct damage for 5 rounds in delay phase. Armored: weapons striking this creature must make durability checks upon successful hits.' }).fetch();
  var GiantSerpent = await Monster.create({ name: 'Serpent,Giant', hoverStats: 'Resist: 1\nSlayer: Reptile, Snake\nKarma/Fame: Level 3\nBard Diff: 71\nTame Diff: na\nPack instinct: none\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '125', goldMax: '175', alignment: 'Evil', hpMin: '112', hpMax: '129', bardMin: '71', bardMax: '71', taming: 'na', fireMin: '5', fireMax: '10', coldMin: '10', coldMax: '20', poisonMin: '70', poisonMax: '90', energyMin: '10', energyMax: '20', physicalMin: '30', physicalMax: '35', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '65', tacticsMax: '70', resistSpellMin: '1', resistSpellMax: '1', anatomyMin: '0', anatomyMax: '0', strengthMin: '186', strengthMax: '215', dexterityMin: '56', dexterityMax: '80', intelligenceMin: '66', intelligenceMax: '85', baseDmgMin: '19', baseDmgMax: '35', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Coil: Adjacent target is paralyzed for 2 rounds.' }).fetch();
  var Sheep = await Monster.create({ name: 'Sheep', hoverStats: 'Resist: 0\nSlayer: na\nKarma/Fame: Level 0\nBard Diff: 6.6\nTame Diff: 100,100,78,28\nPack instinct: none\nControl Slots: 1\nFood Pref: Fruits, Veggies', karma: 0, goldMin: '0', goldMax: '0', alignment: 'nuetral', hpMin: '18', hpMax: '18', bardMin: '6.6', bardMax: '6.6', taming: '100,100,78,28', fireMin: '0', fireMax: '0', coldMin: '0', coldMax: '0', poisonMin: '0', poisonMax: '0', energyMin: '0', energyMax: '0', physicalMin: '5', physicalMax: '15', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '1', tacticsMin: '5', tacticsMax: '5', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '30', strengthMax: '30', dexterityMin: '15', dexterityMax: '15', intelligenceMin: '5', intelligenceMax: '5', baseDmgMin: '1', baseDmgMax: '4', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Fruits, Veggies', controlSlots: '1', specials: '\nShear: 1d4 wool per physical day of playing' }).fetch();
  var Siren = await Monster.create({ name: 'Siren', hoverStats: 'Resist: 2\nSlayer: None\nKarma/Fame: Level 2\nBard Diff: 87\nTame Diff: not tameable\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '175', goldMax: '225', alignment: 'Evil', hpMin: '88', hpMax: '108', bardMin: '87', bardMax: '87', taming: 'not tameable', fireMin: '30', fireMax: '40', coldMin: '25', coldMax: '35', poisonMin: '10', poisonMax: '20', energyMin: '10', energyMax: '20', physicalMin: '40', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '80', tacticsMax: '90', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '60', anatomyMax: '100', strengthMin: '251', strengthMax: '350', dexterityMin: '61', dexterityMax: '80', intelligenceMin: '101', intelligenceMax: '150', baseDmgMin: '7', baseDmgMax: '10', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Ranged Mastery: May make ranged attacks vs adjacent enemies.  Elusive: may breakaway from adjacent enemies without drawing attacks of Opportunity.  Siren\'s Song (Resistable): Roll d6 and replace next action with an Arm/Disarm action for that armor slot. D' }).fetch();
  var Skeleton = await Monster.create({ name: 'Skeleton', hoverStats: 'Resist: 2\nSlayer: undead\nKarma/Fame: Level 0\nBard Diff: 39\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 0, goldMin: '25', goldMax: '50', alignment: 'Evil', hpMin: '34', hpMax: '48', bardMin: '39', bardMax: '39', taming: '0', fireMin: '5', fireMax: '10', coldMin: '25', coldMax: '40', poisonMin: '25', poisonMax: '35', energyMin: '5', energyMax: '15', physicalMin: '15', physicalMax: '20', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '45', tacticsMax: '60', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '56', strengthMax: '80', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '3', baseDmgMax: '7', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Health Siphon: Healing spells cast adjacent to this monster, heal it rather than target.\nTaunt: Monster is Aggro Priority 1 to any Pets in LOS.' }).fetch();
  var Succubus = await Monster.create({ name: 'Succubus', hoverStats: 'Resist: 4\nSlayer: Demon\nKarma/Fame: Level 5\nBard Diff: 107\nTame Diff: not tameable\nPack instinct: None\nControl Slots: \nFood Pref: ', karma: 5, goldMin: '1000', goldMax: '1200', alignment: 'Evil', hpMin: '312', hpMax: '353', bardMin: '107', bardMax: '107', taming: 'not tameable', fireMin: '70', fireMax: '80', coldMin: '30', coldMax: '40', poisonMin: '40', poisonMax: '50', energyMin: '50', energyMax: '60', physicalMin: '80', physicalMax: '90', mageryMin: '100', mageryMax: '100', evalIntMin: '100', evalIntMax: '100', aggroPriority: '4', tacticsMin: '80', tacticsMax: '90', resistSpellMin: '4', resistSpellMax: '6', anatomyMin: '0', anatomyMax: '0', strengthMin: '488', strengthMax: '620', dexterityMin: '121', dexterityMax: '170', intelligenceMin: '498', intelligenceMax: '675', baseDmgMin: '5', baseDmgMax: '8', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Curing 80% : if poisoned. Monster will replace next action with a cure attempt.(interrupt)        *Flying: monster can move up to 5 spaces on a ï¿½moveï¿½ action toward target in aggro priority ignoring terrain, if monster has no valid target.   Life Drai' }).fetch();
  var SumAirElemental = await Monster.create({ name: '(Sum) Air Elemental', hoverStats: 'Resist: 2\nSlayer: Elemental\nKarma/Fame: \nBard Diff: 85\nTame Diff: \nPack instinct: None\nControl Slots: 4\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Neutral', hpMin: '150', hpMax: '150', bardMin: '85', bardMax: '85', taming: '0', fireMin: '15', fireMax: '25', coldMin: '10', coldMax: '20', poisonMin: '55', poisonMax: '65', energyMin: '25', energyMax: '35', physicalMin: '35', physicalMax: '45', mageryMin: '70', mageryMax: '70', evalIntMin: '70', evalIntMax: '70', aggroPriority: '3', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '200', strengthMax: '200', dexterityMin: '200', dexterityMax: '200', intelligenceMin: '100', intelligenceMax: '100', baseDmgMin: '8', baseDmgMax: '10', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '4', specials: '\nDeafening Winds: taking a precast action while adjacent to monster = automatic disruption.' }).fetch();
  var SumEarthElemental = await Monster.create({ name: '(Sum) Earth Elemental', hoverStats: 'Resist: 2\nSlayer: Elemental, Earth Elem\nKarma/Fame: \nBard Diff: 68\nTame Diff: \nPack instinct: None\nControl Slots: 2\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Neutral', hpMin: '180', hpMax: '180', bardMin: '68', bardMax: '68', taming: '0', fireMin: '10', fireMax: '20', coldMin: '10', coldMax: '20', poisonMin: '15', poisonMax: '25', energyMin: '15', energyMax: '25', physicalMin: '30', physicalMax: '35', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '200', strengthMax: '200', dexterityMin: '70', dexterityMax: '70', intelligenceMin: '70', intelligenceMax: '70', baseDmgMin: '13', baseDmgMax: '21', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '2', specials: '\nHard to Dispel (40): Reduce any attempt to dispel this monster by 40%.' }).fetch();
  var SumBladeSpirit = await Monster.create({ name: '(Sum)Blade Spirit', hoverStats: 'Resist: 2\nSlayer: \nKarma/Fame: \nBard Diff: 75\nTame Diff: na\nPack instinct: None\nControl Slots: 2\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: '0', hpMin: '75', hpMax: '75', bardMin: '75', bardMax: '75', taming: 'na', fireMin: '40', fireMax: '50', coldMin: '30', coldMax: '40', poisonMin: '100', poisonMax: '100', energyMin: '20', energyMax: '30', physicalMin: '30', physicalMax: '40', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '150', strengthMax: '150', dexterityMin: '150', dexterityMax: '150', intelligenceMin: '100', intelligenceMax: '100', baseDmgMin: '3', baseDmgMax: '7', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '2', specials: 'Blade Spirit cannot be commanded. Summon next to an opponent in LOS. Will attack opponents in aggro priority until dispelled or killed.' }).fetch();
  var SumEnergyVortex = await Monster.create({ name: '(Sum) Energy Vortex', hoverStats: 'Resist: 4\nSlayer: \nKarma/Fame: \nBard Diff: 75\nTame Diff: na\nPack instinct: None\nControl Slots: 2\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: '0', hpMin: '150', hpMax: '150', bardMin: '75', bardMax: '75', taming: 'na', fireMin: '40', fireMax: '50', coldMin: '40', coldMax: '50', poisonMin: '40', poisonMax: '50', energyMin: '90', energyMax: '100', physicalMin: '60', physicalMax: '70', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '4', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '200', strengthMax: '200', dexterityMin: '200', dexterityMax: '200', intelligenceMin: '100', intelligenceMax: '100', baseDmgMin: '6', baseDmgMax: '7', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '2', specials: 'Vortex cannot be commanded. Summon next to an opponent in LOS. Will attack opponents in aggro priority until dispelled or killed.' }).fetch();
  var SumDeamon = await Monster.create({ name: '(Sum) Deamon', hoverStats: 'Resist: 3\nSlayer: Demon\nKarma/Fame: \nBard Diff: 90\nTame Diff: not tameable\nPack instinct: None\nControl Slots: 4\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '200', hpMax: '200', bardMin: '90', bardMax: '90', taming: 'not tameable', fireMin: '50', fireMax: '60', coldMin: '30', coldMax: '40', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '45', physicalMax: '60', mageryMin: '70', mageryMax: '80', evalIntMin: '70', evalIntMax: '80', aggroPriority: '3', tacticsMin: '70', tacticsMax: '80', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '200', strengthMax: '200', dexterityMin: '110', dexterityMax: '110', intelligenceMin: '150', intelligenceMax: '150', baseDmgMin: '7', baseDmgMax: '20', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '4', specials: 'Curing % : if poisoned. Monster will replace next action with a cure attempt.    *Flying: monster can move up to 5 spaces on a ï¿½moveï¿½ action toward target in aggro priority ignoring terrain, if monster has no valid target.' }).fetch();
  var SumFireElemental = await Monster.create({ name: '(Sum) Fire Elemental', hoverStats: 'Resist: 3\nSlayer: Elemental, Fire Elemental, Flame\nKarma/Fame: \nBard Diff: 75\nTame Diff: not tameable\nPack instinct: None\nControl Slots: 4\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '200', hpMax: '200', bardMin: '75', bardMax: '75', taming: 'not tameable', fireMin: '70', fireMax: '80', coldMin: '5', coldMax: '10', poisonMin: '30', poisonMax: '40', energyMin: '30', energyMax: '40', physicalMin: '35', physicalMax: '45', mageryMin: '60', mageryMax: '75', evalIntMin: '60', evalIntMax: '75', aggroPriority: '3', tacticsMin: '80', tacticsMax: '100', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '200', strengthMax: '200', dexterityMin: '200', dexterityMax: '200', intelligenceMin: '100', intelligenceMax: '100', baseDmgMin: '7', baseDmgMax: '9', damageType: DamageTypeEnum.FIRE.id, preferredFood: '0', controlSlots: '4', specials: 'Volatile (1-20 Fire) : melee attacks against this monster cause elemental damage to the attacker every hit.' }).fetch();
  var SumNaturesFury = await Monster.create({ name: '(Sum)Natures Fury', hoverStats: 'Resist: 2\nSlayer: \nKarma/Fame: \nBard Diff: 75\nTame Diff: na\nPack instinct: None\nControl Slots: 1\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: '0', hpMin: '20', hpMax: '20', bardMin: '75', bardMax: '75', taming: 'na', fireMin: '0', fireMax: '0', coldMin: '0', coldMax: '0', poisonMin: '0', poisonMax: '0', energyMin: '0', energyMax: '0', physicalMin: '80', physicalMax: '80', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '150', strengthMax: '150', dexterityMin: '150', dexterityMax: '150', intelligenceMin: '100', intelligenceMax: '100', baseDmgMin: '1', baseDmgMax: '3', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '1', specials: 'Furies cannot be commanded. Summon next to an opponent in LOS. Will attack opponents in aggro priority until dispelled or killed.' }).fetch();
  var SumRevenant = await Monster.create({ name: '(Sum) Revenant', hoverStats: 'Resist: 5\nSlayer: \nKarma/Fame: \nBard Diff: Immune\nTame Diff: \nPack instinct: None\nControl Slots: 3\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '200', hpMax: '200', bardMin: '0', bardMax: '0', taming: '0', fireMin: '20', fireMax: '20', coldMin: '60', coldMax: '70', poisonMin: '100', poisonMax: '100', energyMin: '60', energyMax: '70', physicalMin: '60', physicalMax: '70', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '0', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '5', resistSpellMax: '5', anatomyMin: '0', anatomyMax: '0', strengthMin: '200', strengthMax: '200', dexterityMin: '150', dexterityMax: '150', intelligenceMin: '150', intelligenceMax: '150', baseDmgMin: '18', baseDmgMax: '19', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '3', specials: '*only attacks the target of the spell chosen upon casting until death. If target is not in range during action phase, Revenant Moves 4 toward Target. Dispels itself upon death of target.                    All Seeing: Revenant can freely attack hidden and' }).fetch();
  var SumWaterElemental = await Monster.create({ name: '(Sum) Water Elemental', hoverStats: 'Resist: 4\nSlayer: Elemental, water Elemental\nKarma/Fame: \nBard Diff: 80\nTame Diff: \nPack instinct: None\nControl Slots: 4\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Neutral', hpMin: '165', hpMax: '165', bardMin: '80', bardMax: '80', taming: '0', fireMin: '10', fireMax: '25', coldMin: '10', coldMax: '25', poisonMin: '60', poisonMax: '70', energyMin: '5', energyMax: '10', physicalMin: '35', physicalMax: '45', mageryMin: '70', mageryMax: '70', evalIntMin: '70', evalIntMax: '70', aggroPriority: '3', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '4', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '200', strengthMax: '200', dexterityMin: '70', dexterityMax: '70', intelligenceMin: '100', intelligenceMax: '100', baseDmgMin: '15', baseDmgMax: '20', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '4', specials: 'Water Walk: Monster can freely move across land or water without penalty.    Dispel: if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled.   Curing % : if poisoned. Monster will r' }).fetch();
  var Titan = await Monster.create({ name: 'Titan', hoverStats: 'Resist: 4\nSlayer: Repond\nKarma/Fame: Level 4\nBard Diff: 93\nTame Diff: not tameable\nPack instinct: None\nControl Slots: \nFood Pref: ', karma: 4, goldMin: '600', goldMax: '800', alignment: 'Evil', hpMin: '322', hpMax: '351', bardMin: '93', bardMax: '93', taming: 'not tameable', fireMin: '30', fireMax: '40', coldMin: '25', coldMax: '35', poisonMin: '30', poisonMax: '40', energyMin: '30', energyMax: '40', physicalMin: '35', physicalMax: '45', mageryMin: '85', mageryMax: '100', evalIntMin: '85', evalIntMax: '100', aggroPriority: '4', tacticsMin: '60', tacticsMax: '80', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '536', strengthMax: '585', dexterityMin: '126', dexterityMax: '146', intelligenceMin: '281', intelligenceMax: '305', baseDmgMin: '13', baseDmgMax: '16', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Curing 80% : if poisoned. Monster will replace next action with a cure attempt.(Interrupt)       Dispel: if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled.(interrupt)   Grab: t' }).fetch();
  var Unicorn = await Monster.create({ name: 'Unicorn', hoverStats: 'Resist: 3\nSlayer: Fey\nKarma/Fame: Level -4\nBard Diff: 86\nTame Diff: 10,0,0,0\nPack instinct: None\nControl Slots: 2\nFood Pref: fruit, grain', karma: 0, goldMin: '300', goldMax: '350', alignment: 'Good', hpMin: '191', hpMax: '210', bardMin: '86', bardMax: '86', taming: '10,0,0,0', fireMin: '25', fireMax: '40', coldMin: '25', coldMax: '40', poisonMin: '56', poisonMax: '65', energyMin: '25', energyMax: '40', physicalMin: '55', physicalMax: '65', mageryMin: '60', mageryMax: '80', evalIntMin: '80', evalIntMax: '90', aggroPriority: '2', tacticsMin: '93', tacticsMax: '100', resistSpellMin: '3', resistSpellMax: '3', anatomyMin: '65', anatomyMax: '100', strengthMin: '296', strengthMax: '325', dexterityMin: '96', dexterityMax: '115', intelligenceMin: '186', intelligenceMax: '225', baseDmgMin: '16', baseDmgMax: '22', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'fruit, grain', controlSlots: '2', specials: '\nCure Master (90%): will attempt to cure an adjacent poisoned master and replace current action with cure, even while mounted.                  Mount (4): if tamed, creature can be ridden as a mount.\nPoison Immunity (5)' }).fetch();
  var WanderingHealer = await Monster.create({ name: 'Wandering Healer', hoverStats: 'Resist: 3\nSlayer: none\nKarma/Fame: Level -3\nBard Diff: 96\nTame Diff: not tameable\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Good', hpMin: '304', hpMax: '400', bardMin: '96', bardMax: '96', taming: 'not tameable', fireMin: '40', fireMax: '50', coldMin: '40', coldMax: '50', poisonMin: '40', poisonMax: '50', energyMin: '40', energyMax: '50', physicalMin: '40', physicalMax: '50', mageryMin: '82', mageryMax: '100', evalIntMin: '82', evalIntMax: '100', aggroPriority: '4', tacticsMin: '82', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '73', anatomyMax: '98', strengthMin: '146', strengthMax: '180', dexterityMin: '101', dexterityMax: '130', intelligenceMin: '186', intelligenceMax: '210', baseDmgMin: '10', baseDmgMax: '23', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '\nDispel: if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled. (interupt: cast once as soon as creature is summoned)                   Curing % : if poisoned. Monster will replace' }).fetch();
  var WarCat = await Monster.create({ name: 'War Cat', hoverStats: 'Resist: 3\nSlayer: Fey\nKarma/Fame: Level -5\nBard Diff: 131\nTame Diff: 4,0,0,0\nPack instinct: None\nControl Slots: 4\nFood Pref: Fruit, Veg', karma: 0, goldMin: '1500', goldMax: '1900', alignment: 'Evil', hpMin: '1010', hpMax: '1275', bardMin: '127', bardMax: '131', taming: '4,0,0,0', fireMin: '25', fireMax: '45', coldMin: '70', coldMax: '85', poisonMin: '30', poisonMax: '50', energyMin: '70', energyMax: '85', physicalMin: '50', physicalMax: '65', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '93', tacticsMax: '100', resistSpellMin: '3', resistSpellMax: '3', anatomyMin: '65', anatomyMax: '100', strengthMin: '1200', strengthMax: '1225', dexterityMin: '150', dexterityMax: '170', intelligenceMin: '250', intelligenceMax: '275', baseDmgMin: '21', baseDmgMax: '28', damageType: DamageTypeEnum.ENERGY.id, preferredFood: 'Fruit, Veg', controlSlots: '4', specials: '\nHealer: If adjacent to injuried master, will replace current acction with Heal d20+25, Delay 5. Wont repeat until resolved.                    Mount (4): if tamed, creature can be ridden as a mount.\nBleed: target takes an additional 6pts direct damage fo' }).fetch();
  var WaterElemental = await Monster.create({ name: ' Water Elemental', hoverStats: 'Resist: 5\nSlayer: Elemental, water Elemental\nKarma/Fame: Level 3\nBard Diff: 80\nTame Diff: \nPack instinct: None\nControl Slots: 4\nFood Pref: ', karma: 3, goldMin: '175', goldMax: '225', alignment: 'Neutral', hpMin: '76', hpMax: '93', bardMin: '80', bardMax: '80', taming: '0', fireMin: '10', fireMax: '25', coldMin: '10', coldMax: '25', poisonMin: '60', poisonMax: '70', energyMin: '5', energyMax: '10', physicalMin: '35', physicalMax: '45', mageryMin: '60', mageryMax: '75', evalIntMin: '60', evalIntMax: '75', aggroPriority: '3', tacticsMin: '60', tacticsMax: '75', resistSpellMin: '4', resistSpellMax: '5', anatomyMin: '0', anatomyMax: '0', strengthMin: '126', strengthMax: '155', dexterityMin: '66', dexterityMax: '85', intelligenceMin: '101', intelligenceMax: '125', baseDmgMin: '7', baseDmgMax: '9', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '4', specials: 'Water Walk: Monster can freely move across land or water without penalty.    Dispel: if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled.   Curing % : if poisoned. Monster will r' }).fetch();
  var Wolf = await Monster.create({ name: 'Wolf', hoverStats: 'Resist: 1\nSlayer: Wolf\nKarma/Fame: Level 0\nBard Diff: 32\nTame Diff: 70,20,0,0\nPack instinct: Canine\nControl Slots: 1\nFood Pref: Meat', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Nuetral', hpMin: '34', hpMax: '48', bardMin: '32', bardMax: '32', taming: '70,20,0,0', fireMin: '10', fireMax: '15', coldMin: '20', coldMax: '25', poisonMin: '10', poisonMax: '15', energyMin: '10', energyMax: '15', physicalMin: '15', physicalMax: '20', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '1', tacticsMin: '45', tacticsMax: '60', resistSpellMin: '1', resistSpellMax: '1', anatomyMin: '0', anatomyMax: '0', strengthMin: '56', strengthMax: '80', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '31', intelligenceMax: '55', baseDmgMin: '4', baseDmgMax: '10', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Meat', controlSlots: '1', specials: 'Pack Instinct : (Canine) damage bonus of melee and special attacks based upon the number of other monsters of the same type on combat map. Tracking: Add a bonus to your tracking roll equal to the number of pets with Tracking in your pack.(must have at lea' }).fetch();
  var Wyvern = await Monster.create({ name: 'Wyvern', hoverStats: 'Resist: 2\nSlayer: Reptile\nKarma/Fame: Level 2\nBard Diff: 80\nTame Diff: na\nPack instinct: none\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '175', goldMax: '225', alignment: 'Evil', hpMin: '125', hpMax: '141', bardMin: '80', bardMax: '80', taming: 'na', fireMin: '30', fireMax: '40', coldMin: '20', coldMax: '30', poisonMin: '90', poisonMax: '100', energyMin: '30', energyMax: '40', physicalMin: '35', physicalMax: '45', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '65', tacticsMax: '90', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '202', strengthMax: '240', dexterityMin: '153', dexterityMax: '209', intelligenceMin: '51', intelligenceMax: '90', baseDmgMin: '8', baseDmgMax: '19', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Poison Immunity (4)' }).fetch();
  var Zombie = await Monster.create({ name: 'Zombie', hoverStats: 'Resist: 1\nSlayer: Undead\nKarma/Fame: Level 0\nBard Diff: 34\nTame Diff: Not tameable\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 0, goldMin: '50', goldMax: '100', alignment: 'Evil', hpMin: '28', hpMax: '42', bardMin: '34', bardMax: '34', taming: 'Not tameable', fireMin: '0', fireMax: '0', coldMin: '20', coldMax: '30', poisonMin: '5', poisonMax: '10', energyMin: '0', energyMax: '0', physicalMin: '15', physicalMax: '20', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '35', tacticsMax: '50', resistSpellMin: '1', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '46', strengthMax: '70', dexterityMin: '31', dexterityMax: '50', intelligenceMin: '26', intelligenceMax: '40', baseDmgMin: '3', baseDmgMax: '7', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '\nShriek: roll % dice. 0-40 add 1d4 zombies, 41-60 add 1d4 mummies, 61-85 add lich, 86-100 add rotting corpse.' }).fetch();
  var AbomidableHulk = await Monster.create({ name: 'Abomidable Hulk', hoverStats: 'Resist: 1\nSlayer:  Ice, Snow\nKarma/Fame: Level 5\nBard Diff: 130\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '1000', goldMax: '1400', alignment: 'Evil', hpMin: '1200', hpMax: '1800', bardMin: '130', bardMax: '130', taming: 'na', fireMin: '50', fireMax: '60', coldMin: '60', coldMax: '70', poisonMin: '25', poisonMax: '30', energyMin: '45', energyMax: '55', physicalMin: '60', physicalMax: '75', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '120', tacticsMax: '120', resistSpellMin: '1', resistSpellMax: '1', anatomyMin: '120', anatomyMax: '120', strengthMin: '450', strengthMax: '800', dexterityMin: '96', dexterityMax: '145', intelligenceMin: '71', intelligenceMax: '95', baseDmgMin: '20', baseDmgMax: '30', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Artifact drop: 5% , Rage(500): Double Damage while below 500 hp.' }).fetch();
  var TameBakeKitsune = await Monster.create({ name: '(Tame)Bake Kitsune', hoverStats: 'Resist: 4\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: 96\nTame Diff: 29,0,0,0\nPack instinct: none\nControl Slots: 2\nFood Pref: Fish', karma: 4, goldMin: '700', goldMax: '1000', alignment: 'Evil', hpMin: '310', hpMax: '350', bardMin: '96', bardMax: '96', taming: '29,0,0,0', fireMin: '70', fireMax: '90', coldMin: '40', coldMax: '60', poisonMin: '40', poisonMax: '60', energyMin: '40', energyMax: '60', physicalMin: '40', physicalMax: '60', mageryMin: '80', mageryMax: '90', evalIntMin: '80', evalIntMax: '90', aggroPriority: '4', tacticsMin: '70', tacticsMax: '90', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '170', strengthMax: '220', dexterityMin: '125', dexterityMax: '145', intelligenceMin: '375', intelligenceMax: '425', baseDmgMin: '32', baseDmgMax: '45', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Fish', controlSlots: '2', specials: '\nImpersonate: hits against its master have 30% of hitting this monster instead while adjacent to master.  Copy Cat(interrupt): Kitsune will Teleport, Recall, Hide and Stealth to stay with their master.  Proctective Instinct: A Kitsune will replace its cur' }).fetch();
  var BakeKitsune = await Monster.create({ name: 'Bake Kitsune', hoverStats: 'Resist: 4\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: 96\nTame Diff: 19,10,0,0\nPack instinct: none\nControl Slots: 2\nFood Pref: Fish', karma: 4, goldMin: '700', goldMax: '1000', alignment: 'Evil', hpMin: '310', hpMax: '350', bardMin: '96', bardMax: '96', taming: '19,10,0,0', fireMin: '70', fireMax: '90', coldMin: '40', coldMax: '60', poisonMin: '40', poisonMax: '60', energyMin: '40', energyMax: '60', physicalMin: '40', physicalMax: '60', mageryMin: '80', mageryMax: '90', evalIntMin: '80', evalIntMax: '90', aggroPriority: '4', tacticsMin: '70', tacticsMax: '90', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '170', strengthMax: '220', dexterityMin: '125', dexterityMax: '145', intelligenceMin: '375', intelligenceMax: '425', baseDmgMin: '32', baseDmgMax: '45', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Fish', controlSlots: '2', specials: '\nConfusion: Characters have a 60 second limit to turn prep against this monster.   Mimic: successful hits against monster have 40% chance to targeting a random party member or pet in range. If no alternative target in range, attack misses.  Curing 90%,Dis' }).fetch();
  var TerathanAvenger = await Monster.create({ name: 'Terathan Avenger', hoverStats: 'Resist: 2\nSlayer: Arachnid, Terathan\nKarma/Fame: Level 5\nBard Diff: 92\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '550', goldMax: '600', alignment: 'Evil', hpMin: '296', hpMax: '372', bardMin: '92', bardMax: '92', taming: 'na', fireMin: '30', fireMax: '40', coldMin: '35', coldMax: '45', poisonMin: '90', poisonMax: '100', energyMin: '35', energyMax: '45', physicalMin: '40', physicalMax: '50', mageryMin: '70', mageryMax: '100', evalIntMin: '70', evalIntMax: '100', aggroPriority: '3', tacticsMin: '80', tacticsMax: '95', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '467', strengthMax: '645', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '126', intelligenceMax: '150', baseDmgMin: '18', baseDmgMax: '22', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Acid Blast: upon death, all opponents within 3 tiles take 2d20 poison damage, and all armor and equipped weapons must make durabilty check at -30%. Pets take double damage.(Terathans Immune) Armored' }).fetch();
  var Bogling = await Monster.create({ name: 'Bogling', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: Level 1\nBard Diff: 62\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 1, goldMin: '50', goldMax: '100', alignment: 'Evil', hpMin: '58', hpMax: '72', bardMin: '62', bardMax: '62', taming: 'na', fireMin: '10', fireMax: '20', coldMin: '15', coldMax: '25', poisonMin: '15', poisonMax: '25', energyMin: '15', energyMax: '25', physicalMin: '20', physicalMax: '25', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '96', strengthMax: '120', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '5', baseDmgMax: '7', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Poison Immunity (5),  Poison Skin: melee attacks against this monster deal 5 direct damage to the attacker upon hits' }).fetch();
  var BoneMagi = await Monster.create({ name: 'Bone Magi', hoverStats: 'Resist: 2\nSlayer: mage,Undead\nKarma/Fame: Level 3\nBard Diff: 72\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '125', goldMax: '150', alignment: 'Evil', hpMin: '46', hpMax: '60', bardMin: '72', bardMax: '72', taming: 'na', fireMin: '20', fireMax: '30', coldMin: '50', coldMax: '60', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '35', physicalMax: '40', mageryMin: '60', mageryMax: '70', evalIntMin: '60', evalIntMax: '70', aggroPriority: '3', tacticsMin: '45', tacticsMax: '60', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '76', strengthMax: '100', dexterityMin: '96', dexterityMax: '120', intelligenceMin: '186', intelligenceMax: '210', baseDmgMin: '3', baseDmgMax: '7', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Swords: Melee attacks are swords for purpose of Durability Checks.\nDispel  : if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled.                 Curing % : if poisoned. Monster ' }).fetch();
  var BogThing = await Monster.create({ name: 'Bog Thing', hoverStats: 'Resist: 3\nSlayer: none\nKarma/Fame: Level 5\nBard Diff: 86\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '275', goldMax: '325', alignment: 'Evil', hpMin: '481', hpMax: '540', bardMin: '86', bardMax: '86', taming: 'na', fireMin: '20', fireMax: '25', coldMin: '10', coldMax: '15', poisonMin: '40', poisonMax: '50', energyMin: '20', energyMax: '25', physicalMin: '30', physicalMax: '40', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '70', tacticsMax: '85', resistSpellMin: '3', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '801', strengthMax: '900', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '10', baseDmgMax: '23', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Poison Immunity (5), Bard Immunity. Devour(100): If below 100 hp, monster will replace current action with Heal d20+60.  This devours a present Bogling.  If no boglings present, follow random action.  Once triggered, Bog Thing will devour until fully he' }).fetch();
  var Boura = await Monster.create({ name: 'Boura', hoverStats: 'Resist: 2\nSlayer: none\nKarma/Fame: Level 3\nBard Diff: 80\nTame Diff: 100,56,6,0\nPack instinct: None\nControl Slots: 3\nFood Pref: Fuit,Veg', karma: 3, goldMin: '250', goldMax: '300', alignment: 'Evil', hpMin: '575', hpMax: '666', bardMin: '80', bardMax: '80', taming: '100,56,6,0', fireMin: '30', fireMax: '40', coldMin: '50', coldMax: '60', poisonMin: '40', poisonMax: '50', energyMin: '30', energyMax: '40', physicalMin: '55', physicalMax: '65', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '95', tacticsMax: '104', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '95', anatomyMax: '104', strengthMin: '377', strengthMax: '518', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '25', intelligenceMax: '30', baseDmgMin: '20', baseDmgMax: '24', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Fuit,Veg', controlSlots: '3', specials: 'Stun: on a successful hit, adjacent oppenents are paralyzed for 2 rounds. No RESIST.   Mace: attacks are consider mace for durability.  Mount (3): can be ridden if tamed' }).fetch();
  var BritishKnight = await Monster.create({ name: 'British Knight', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '750', goldMax: '900', alignment: 'War Status', hpMin: '100', hpMax: '150', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '20', fireMax: '50', coldMin: '20', coldMax: '50', poisonMin: '20', poisonMax: '50', energyMin: '20', energyMax: '50', physicalMin: '20', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '100', anatomyMax: '100', strengthMin: '125', strengthMax: '175', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '85', intelligenceMax: '105', baseDmgMin: '14', baseDmgMax: '23', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'NBCmbv  Mortal Strike: Target cannot heal for 5 rounds  Paralyzing Blow - A successful Paralyzing Blow will leave the target stunned, unable to move, attack, or cast spells, for a 3 rounds. The duration is broken by combat damage in the same way as paraly' }).fetch();
  var BritishArcher = await Monster.create({ name: 'British Archer', hoverStats: 'Resist: 2\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '750', goldMax: '900', alignment: 'War Status', hpMin: '100', hpMax: '150', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '20', fireMax: '50', coldMin: '20', coldMax: '50', poisonMin: '20', poisonMax: '50', energyMin: '20', energyMax: '50', physicalMin: '20', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '100', anatomyMax: '100', strengthMin: '125', strengthMax: '175', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '85', intelligenceMax: '105', baseDmgMin: '10', baseDmgMax: '18', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '  Mortal Strike: Target cannot heal for 5 rounds  Paralyzing Blow - A successful Paralyzing Blow will leave the target stunned, unable to move, attack, or cast spells, for a 3 rounds. The duration is broken by combat damage in the same way as paralyze spe' }).fetch();
  var Drake = await Monster.create({ name: 'Drake', hoverStats: 'Resist: 3\nSlayer: Dragon, Reptile\nKarma/Fame: Level 4\nBard Diff: 80\nTame Diff: 32,0,0,0\nPack instinct: None\nControl Slots: 2\nFood Pref: Meat', karma: 4, goldMin: '275', goldMax: '325', alignment: 'Evil', hpMin: '241', hpMax: '251', bardMin: '80', bardMax: '80', taming: '32,0,0,0', fireMin: '50', fireMax: '60', coldMin: '40', coldMax: '50', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '45', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '65', tacticsMax: '90', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '401', strengthMax: '430', dexterityMin: '101', dexterityMax: '140', intelligenceMin: '101', intelligenceMax: '140', baseDmgMin: '11', baseDmgMax: '17', damageType: DamageTypeEnum.FIRE.id, breathDmgType: DamageTypeEnum.FIRE.id, preferredFood: 'Meat', controlSlots: '2', specials: 'Armored, Crushing: Melee attacks cause -20% to durability check on armored locations' }).fetch();
  var EliteNinja = await Monster.create({ name: 'Elite Ninja', hoverStats: 'Resist: 3\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '750', goldMax: '900', alignment: 'Evil', hpMin: '250', hpMax: '350', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '45', fireMax: '65', coldMin: '25', coldMax: '45', poisonMin: '40', poisonMax: '60', energyMin: '40', energyMax: '65', physicalMin: '35', physicalMax: '60', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '115', tacticsMax: '130', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '115', anatomyMax: '130', strengthMin: '125', strengthMax: '175', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '85', intelligenceMax: '105', baseDmgMin: '14', baseDmgMax: '23', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Hide/stealth(lv4): via smoke bomb   Shadow Strike: +50% damage and attacker is hidden.  Defense Mastery: DCI 15  Mirror Image: images dispelled upon hiding    Slicing: Swords and Fencing for purpose of durablity.  Mortal Strike: Target cannot heal for 5 r' }).fetch();
  var FanDancer = await Monster.create({ name: 'Fan Dancer', hoverStats: 'Resist: 3\nSlayer: Deamon\nKarma/Fame: Level 4\nBard Diff: 97\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '700', goldMax: '1000', alignment: 'Evil', hpMin: '350', hpMax: '420', bardMin: '97', bardMax: '97', taming: 'na', fireMin: '50', fireMax: '70', coldMin: '50', coldMax: '70', poisonMin: '50', poisonMax: '70', energyMin: '40', energyMax: '60', physicalMin: '40', physicalMax: '60', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '4', tacticsMin: '70', tacticsMax: '80', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '315', strengthMax: '375', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '85', intelligenceMax: '105', baseDmgMin: '10', baseDmgMax: '20', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Fan the Flames: -25 Fire Reduction to all adjacent opponents.  Damage Deflect: 40% chance to deflect half damage taken back on attacker regardless of type.    Slicing: Swords and Fencing for purpose of durablity.  Mortal Strike: Target cannot heal for 5 r' }).fetch();
  var FleshGolem = await Monster.create({ name: 'Flesh Golem', hoverStats: 'Resist: 2\nSlayer: undead\nKarma/Fame: Level 2\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '125', goldMax: '175', alignment: 'Evil', hpMin: '106', hpMax: '120', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '25', fireMax: '35', coldMin: '15', coldMax: '25', poisonMin: '60', poisonMax: '70', energyMin: '30', energyMax: '40', physicalMin: '50', physicalMax: '60', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '176', strengthMax: '200', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '18', baseDmgMax: '22', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Putrid: Pets will never attack this creature. Immune to Barding.  Wretch: successful melee hits against this creature, lowers the attacks hunger 1 step.  Bleed: hit character takes an additional 6 direct damage during the delay phase for 5 rounds.' }).fetch();
  var FrostGiant = await Monster.create({ name: 'Frost Giant', hoverStats: 'Resist: 5\nSlayer: Ogre, Repond, Ice\nKarma/Fame: Level 5\nBard Diff: 89\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: Fuit,Veg', karma: 5, goldMin: '750', goldMax: '950', alignment: 'Evil', hpMin: '476', hpMax: '552', bardMin: '89', bardMax: '89', taming: 'na', fireMin: '-10', fireMax: '0', coldMin: '60', coldMax: '70', poisonMin: '100', poisonMax: '100', energyMin: '40', energyMax: '50', physicalMin: '45', physicalMax: '55', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '90', tacticsMax: '100', resistSpellMin: '5', resistSpellMax: '6', anatomyMin: '95', anatomyMax: '104', strengthMin: '767', strengthMax: '945', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '66', intelligenceMax: '70', baseDmgMin: '20', baseDmgMax: '25', damageType: DamageTypeEnum.COLD.id, preferredFood: 'Fuit,Veg', controlSlots: '0', specials: 'Freeze: on a successful hit, adjacent oppenents are paralyzed for d4 rounds. RESISTABLE.   Fencing/Swords: attacks are consider Fencing or Swords for durability. ' }).fetch();
  var ChaosDragoon = await Monster.create({ name: 'Chaos Dragoon', hoverStats: 'Resist: 3\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: 103\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '400', goldMax: '500', alignment: 'Evil', hpMin: '276', hpMax: '350', bardMin: '103', bardMax: '103', taming: 'na', fireMin: '15', fireMax: '25', coldMin: '50', coldMax: '50', poisonMin: '25', poisonMax: '35', energyMin: '25', energyMax: '35', physicalMin: '45', physicalMax: '55', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '120', tacticsMax: '120', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '120', anatomyMax: '120', strengthMin: '276', strengthMax: '350', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '24', baseDmgMax: '26', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Charge: Attack combined with full move, will attack at anypoint in move while adjacent and continue past target. Mounted: If dismounted or killed, must fight its mounted swamp dragon.  Unshakable(50): 50% chance to avoid a dismount attempt against it.' }).fetch();
  var FrostOoze = await Monster.create({ name: 'Frost Ooze', hoverStats: 'Resist: 6\nSlayer: Ice\nKarma/Fame: Level 2\nBard Diff: 15\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '100', goldMax: '300', alignment: 'Evil', hpMin: '65', hpMax: '125', bardMin: '15', bardMax: '15', taming: 'na', fireMin: '0', fireMax: '0', coldMin: '40', coldMax: '50', poisonMin: '20', poisonMax: '30', energyMin: '10', energyMax: '20', physicalMin: '10', physicalMax: '20', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '1', tacticsMin: '0', tacticsMax: '0', resistSpellMin: '5', resistSpellMax: '6', anatomyMin: '0', anatomyMax: '0', strengthMin: '18', strengthMax: '30', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '66', intelligenceMax: '70', baseDmgMin: '3', baseDmgMax: '9', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Toxic: Hits by and agaisnt this creature cause a durability check at -30%   Reflective: Spells that target Ooze have 75% chance of targeting caster instead. Dispel(Interrupt): Dispel Summons  Detect Hidden(interrupt) 85%: Reveal a hidden target in LOS' }).fetch();
  var Hellsteed = await Monster.create({ name: 'Hellsteed', hoverStats: 'Resist: 5\nSlayer: undead\nKarma/Fame: Level 0\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: \nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '201', hpMax: '220', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '90', fireMax: '90', coldMin: '0', coldMax: '0', poisonMin: '100', poisonMax: '100', energyMin: '0', energyMax: '0', physicalMin: '60', physicalMax: '70', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '50', tacticsMax: '50', resistSpellMin: '5', resistSpellMax: '5', anatomyMin: '0', anatomyMax: '0', strengthMin: '201', strengthMax: '210', dexterityMin: '101', dexterityMax: '110', intelligenceMin: '101', intelligenceMax: '115', baseDmgMin: '20', baseDmgMax: '24', damageType: DamageTypeEnum.FIRE.id, breathDmgType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Poison Immunity (5), Bard Immunity' }).fetch();
  var IceFiend = await Monster.create({ name: 'Ice Fiend', hoverStats: 'Resist: 2\nSlayer: Demon\nKarma/Fame: Level 5\nBard Diff: 90\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '650', goldMax: '800', alignment: 'Evil', hpMin: '243', hpMax: '500', bardMin: '90', bardMax: '90', taming: 'na', fireMin: '10', fireMax: '20', coldMin: '90', coldMax: '120', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '55', physicalMax: '65', mageryMin: '60', mageryMax: '70', evalIntMin: '60', evalIntMax: '70', aggroPriority: '3', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '120', anatomyMax: '120', strengthMin: '225', strengthMax: '400', dexterityMin: '96', dexterityMax: '120', intelligenceMin: '186', intelligenceMax: '210', baseDmgMin: '8', baseDmgMax: '19', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Swords: Melee attacks are swords for purpose of Durability Checks.\nDispel: if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled.                 Curing 90 % : if poisoned. Monster' }).fetch();
  var Korpre = await Monster.create({ name: 'Korpre', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: Level 1\nBard Diff: 60\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 1, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '58', hpMax: '58', bardMin: '60', bardMax: '60', taming: 'na', fireMin: '35', fireMax: '35', coldMin: '5', coldMax: '5', poisonMin: '100', poisonMax: '100', energyMin: '1', energyMax: '1', physicalMin: '45', physicalMax: '45', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '15', tacticsMax: '15', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '15', anatomyMax: '15', strengthMin: '26', strengthMax: '26', dexterityMin: '19', dexterityMax: '19', intelligenceMin: '17', intelligenceMax: '17', baseDmgMin: '1', baseDmgMax: '5', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Split(15): if reduced to listed hp amount and not slain, creature fully heals and clones itself.  Combine: if 4 or more Korpre are on the same combat map, 3 will combine to spawn a single Void Elemental on a random opponent. Chaos Damage: d6, 5-6 energy' }).fetch();
  var MinaxRider = await Monster.create({ name: 'Minax Rider', hoverStats: 'Resist: 4\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '750', goldMax: '900', alignment: 'War Status', hpMin: '100', hpMax: '150', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '20', fireMax: '50', coldMin: '20', coldMax: '50', poisonMin: '20', poisonMax: '50', energyMin: '20', energyMax: '50', physicalMin: '20', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '100', anatomyMax: '100', strengthMin: '125', strengthMax: '175', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '85', intelligenceMax: '105', baseDmgMin: '18', baseDmgMax: '23', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '  Concussion Blow- automatically strikes head location. Reduce targets mana by 30..  Disarm - Target disarms current weapon, may not rearm that weapon this turn.  Parry:30%    Bandage: trigger in delay phase of round 6, cure 120% or Heal d20+40 hp. Maces:' }).fetch();
  var MinaxMariner = await Monster.create({ name: 'Minax Mariner', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '750', goldMax: '900', alignment: 'War Status', hpMin: '100', hpMax: '150', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '20', fireMax: '50', coldMin: '20', coldMax: '50', poisonMin: '20', poisonMax: '50', energyMin: '20', energyMax: '50', physicalMin: '20', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '0', resistSpellMax: '2', anatomyMin: '100', anatomyMax: '100', strengthMin: '125', strengthMax: '175', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '85', intelligenceMax: '105', baseDmgMin: '18', baseDmgMax: '23', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '  Concussion Blow- automatically strikes head location. Reduce targets mana by 30..  Disarm - Target disarms current weapon, may not rearm that weapon this turn.  Parry:30%    Bandage: trigger in delay phase of round 6, cure 120% or Heal d20+40 hp. Fencin' }).fetch();
  var MinaxMarineOfficer = await Monster.create({ name: 'Minax Marine (Officer)', hoverStats: 'Resist: 2\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '900', goldMax: '1200', alignment: 'War Status', hpMin: '225', hpMax: '350', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '20', fireMax: '50', coldMin: '45', coldMax: '65', poisonMin: '20', poisonMax: '50', energyMin: '20', energyMax: '50', physicalMin: '45', physicalMax: '65', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '0', resistSpellMax: '2', anatomyMin: '100', anatomyMax: '100', strengthMin: '200', strengthMax: '250', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '85', intelligenceMax: '105', baseDmgMin: '20', baseDmgMax: '25', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '  Crushing Blow: -30 Stamina/ -40% Durability.  Parry:30%    Bandage: trigger in delay phase of round 6, cure 120% or Heal d20+40 hp. Fencing: damage purposes  Wrestler: replace damage with d4+10 if disarmed. Automatically Rearm at end of turn. Dispel (80' }).fetch();
  var MindFlayer = await Monster.create({ name: 'Mind Flayer', hoverStats: 'Resist: 4\nSlayer: mage\nKarma/Fame: Level 5\nBard Diff: 72\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '125', goldMax: '150', alignment: 'Evil', hpMin: '300', hpMax: '500', bardMin: '72', bardMax: '72', taming: 'na', fireMin: '20', fireMax: '30', coldMin: '20', coldMax: '30', poisonMin: '20', poisonMax: '30', energyMin: '20', energyMax: '30', physicalMin: '20', physicalMax: '30', mageryMin: '110', mageryMax: '150', evalIntMin: '100', evalIntMax: '130', aggroPriority: '4', tacticsMin: '45', tacticsMax: '60', resistSpellMin: '4', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '76', strengthMax: '100', dexterityMin: '96', dexterityMax: '120', intelligenceMin: '500', intelligenceMax: '800', baseDmgMin: '3', baseDmgMax: '7', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Dispel(Interrupt)  : if an opponent summoned a creature, monster will cast dispel on creature in place of its next action until creature is dispelled.                 Curing 80%(interrupt) : if poisoned. Monster will replace next action with a cure attemp' }).fetch();
  var MinionHordeMinion = await Monster.create({ name: 'Minion-Horde Minion', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: Level 1\nBard Diff: NA\nTame Diff: na\nPack instinct: None\nControl Slots: 1\nFood Pref: ', karma: 1, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '58', hpMax: '72', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '50', fireMax: '50', coldMin: '0', coldMax: '0', poisonMin: '25', poisonMax: '25', energyMin: '25', energyMax: '25', physicalMin: '50', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '75', strengthMax: '75', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '9', baseDmgMax: '13', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '1', specials: 'Gather Loot: Minion will gather loot from kills for the party.  Acts Before Party. Caster decides what the Minion Leaves for the group.  Inventory: Can hold up to 10 Card Items in its inventory for caster, like a pack animal. ' }).fetch();
  var MinionShadowWisp = await Monster.create({ name: 'Minion-Shadow Wisp', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: \nBard Diff: NA\nTame Diff: na\nPack instinct: None\nControl Slots: 1\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'none', hpMin: '10', hpMax: '24', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '10', fireMax: '15', coldMin: '10', coldMax: '15', poisonMin: '10', poisonMax: '15', energyMin: '95', energyMax: '100', physicalMin: '10', physicalMax: '15', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '16', strengthMax: '40', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '2', baseDmgMax: '5', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '1', specials: 'Dark Energy: 30% chance per delay phase of giving mana to a caster and caster\'s party members with negative Karma. Mana returned = negative karma x 2' }).fetch();
  var MinionVampireBat = await Monster.create({ name: 'Minion-Vampire Bat', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: \nBard Diff: NA\nTame Diff: na\nPack instinct: None\nControl Slots: 1\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'none', hpMin: '75', hpMax: '90', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '10', fireMax: '15', coldMin: '10', coldMax: '15', poisonMin: '10', poisonMax: '15', energyMin: '95', energyMax: '100', physicalMin: '10', physicalMax: '15', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '16', strengthMax: '40', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '4', baseDmgMax: '14', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '1', specials: 'Blood Drink: All damage points dealt by bat are gained as life by the caster. ' }).fetch();
  var MinionDarkWolf = await Monster.create({ name: 'Minion-Dark Wolf', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: \nBard Diff: NA\nTame Diff: na\nPack instinct: None\nControl Slots: 1\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'none', hpMin: '50', hpMax: '70', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '25', fireMax: '40', coldMin: '25', coldMax: '40', poisonMin: '25', poisonMax: '40', energyMin: '25', energyMax: '40', physicalMin: '40', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '40', strengthMax: '40', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '10', baseDmgMax: '20', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '1', specials: 'Stamina Regen (15): Caster gains +15 stamina regen  Wolf Mastery: May tame and then command any wolf, including Dire and Bake Kitsune at 100% success. Tamed do not require food and remain wild, cannot be stabled.  If caster has Taming and Animal Lore, the' }).fetch();
  var MinionDeathAdder = await Monster.create({ name: 'Minion-Death Adder', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: \nBard Diff: NA\nTame Diff: na\nPack instinct: None\nControl Slots: 1\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'none', hpMin: '50', hpMax: '70', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '0', fireMax: '0', coldMin: '0', coldMax: '0', poisonMin: '95', poisonMax: '100', energyMin: '0', energyMax: '0', physicalMin: '10', physicalMax: '10', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '40', strengthMax: '40', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '1', baseDmgMax: '3', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '1', specials: 'Snake Provocation: Caster may use Provacation as a Lev 4 Bard (Musicianship+Provocation) vs Snakes' }).fetch();
  var MoonWolf = await Monster.create({ name: 'Moon Wolf', hoverStats: 'Resist: 2\nSlayer: Demon\nKarma/Fame: Level 4\nBard Diff: 77\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '976', goldMax: '1056', alignment: 'Evil', hpMin: '380', hpMax: '440', bardMin: '77', bardMax: '77', taming: 'na', fireMin: '50', fireMax: '70', coldMin: '50', coldMax: '70', poisonMin: '50', poisonMax: '70', energyMin: '50', energyMax: '70', physicalMin: '40', physicalMax: '60', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '110', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '100', anatomyMax: '110', strengthMin: '400', strengthMax: '450', dexterityMin: '150', dexterityMax: '200', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '15', baseDmgMax: '22', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Shifter: monster reflects 100% damage of a random type each hit. d6 1=Physical, 2=fire, 3=Cold, 4=Poison, 5=Energy, 6=none    Claws: damage is considered fencing for durability.' }).fetch();
  var MoundofMaggots = await Monster.create({ name: 'Mound of Maggots', hoverStats: 'Resist: 0\nSlayer: undead\nKarma/Fame: Level 1\nBard Diff: NA\nTame Diff: NA\nPack instinct: None\nControl Slots: 1\nFood Pref: Chicken', karma: 1, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '60', hpMax: '70', bardMin: '0', bardMax: '0', taming: 'NA', fireMin: '0', fireMax: '0', coldMin: '0', coldMax: '0', poisonMin: '100', poisonMax: '100', energyMin: '0', energyMax: '0', physicalMin: '90', physicalMax: '90', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '50', tacticsMax: '50', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '61', strengthMax: '70', dexterityMin: '61', dexterityMax: '70', intelligenceMin: '10', intelligenceMax: '10', baseDmgMin: '3', baseDmgMax: '5', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Chicken', controlSlots: '1', specials: '\n\n' }).fetch();
  var AgateElemental = await Monster.create({ name: 'Agate Elemental', hoverStats: 'Resist: 0\nSlayer: Elemental\nKarma/Fame: Level 3\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '30', goldMax: '1000', alignment: 'Evil', hpMin: '136', hpMax: '153', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '30', fireMax: '100', coldMin: '30', coldMax: '100', poisonMin: '30', poisonMax: '100', energyMin: '30', energyMax: '100', physicalMin: '30', physicalMax: '100', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '176', strengthMax: '450', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '15', baseDmgMax: '32', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Armored,Immune Poion 4, 1: Agate= Gas Attack: 30% chance of 30 direct damage to 5 tiles upon successfully striking monster, Poison Damage      .' }).fetch();
  var ShadowElemental = await Monster.create({ name: 'Shadow Elemental', hoverStats: 'Resist: 2\nSlayer: Elemental\nKarma/Fame: Level 3\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '30', goldMax: '1000', alignment: 'Evil', hpMin: '136', hpMax: '153', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '30', fireMax: '100', coldMin: '30', coldMax: '100', poisonMin: '30', poisonMax: '100', energyMin: '30', energyMax: '100', physicalMin: '30', physicalMax: '100', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '176', strengthMax: '450', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '15', baseDmgMax: '32', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Armored,Immune Poion 4,  Shadow= Immune spells/pets.     .' }).fetch();
  var VioliteElemental = await Monster.create({ name: 'Violite Elemental', hoverStats: 'Resist: 4\nSlayer: Elemental\nKarma/Fame: Level 3\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '30', goldMax: '1000', alignment: 'Evil', hpMin: '136', hpMax: '153', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '30', fireMax: '100', coldMin: '30', coldMax: '100', poisonMin: '30', poisonMax: '100', energyMin: '30', energyMax: '100', physicalMin: '30', physicalMax: '100', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '176', strengthMax: '450', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '15', baseDmgMax: '32', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: 'Armored,Immune Poion 4 , Violite= reflect damage 50%. Energy Damage.       .' }).fetch();
  var IceElemental = await Monster.create({ name: 'Ice Elemental', hoverStats: 'Resist: 1\nSlayer: Elemental\nKarma/Fame: Level 3\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '30', goldMax: '1000', alignment: 'Evil', hpMin: '136', hpMax: '153', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '30', fireMax: '100', coldMin: '30', coldMax: '100', poisonMin: '30', poisonMax: '100', energyMin: '30', energyMax: '100', physicalMin: '30', physicalMax: '100', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '176', strengthMax: '450', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '15', baseDmgMax: '32', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Armored,Immune Poion 4, Ice = Cold Damage, Explode on death 50 Cold 5 tiles.     .' }).fetch();
  var WhiteWyrm = await Monster.create({ name: 'White Wyrm', hoverStats: 'Resist: 4\nSlayer: Dragon, Reptile\nKarma/Fame: Level 5\nBard Diff: 108\nTame Diff: 8,0,0,0\nPack instinct: None\nControl Slots: 4\nFood Pref: 25 gold= 4 ', karma: 5, goldMin: '1200', goldMax: '1400', alignment: 'Evil', hpMin: '433', hpMax: '456', bardMin: '108', bardMax: '108', taming: '8,0,0,0', fireMin: '10', fireMax: '25', coldMin: '80', coldMax: '90', poisonMin: '40', poisonMax: '50', energyMin: '40', energyMax: '50', physicalMin: '55', physicalMax: '70', mageryMin: '100', mageryMax: '120', evalIntMin: '100', evalIntMax: '120', aggroPriority: '4', tacticsMin: '98', tacticsMax: '100', resistSpellMin: '4', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '721', strengthMax: '760', dexterityMin: '101', dexterityMax: '140', intelligenceMin: '386', intelligenceMax: '425', baseDmgMin: '11', baseDmgMax: '17', damageType: DamageTypeEnum.COLD.id, breathDmgType: DamageTypeEnum.ENERGY.id, preferredFood: '25 gold= 4 ', controlSlots: '4', specials: 'Armored, Curing: 90% (interrupt), Dispel: (interrupt) Soul Siphon: drain Mana and Stamina equal to listed amount from all characters in line of breath attack.  Add total amount drained to Wyrms lost HP. ' }).fetch();
  var GoldElemental = await Monster.create({ name: 'Gold Elemental', hoverStats: 'Resist: 2\nSlayer: Elemental\nKarma/Fame: Level 3\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '30', goldMax: '1000', alignment: 'Evil', hpMin: '136', hpMax: '353', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '30', fireMax: '100', coldMin: '30', coldMax: '100', poisonMin: '30', poisonMax: '100', energyMin: '30', energyMax: '100', physicalMin: '30', physicalMax: '100', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '176', strengthMax: '450', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '15', baseDmgMax: '32', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Armored,Immune Poion 4, Gold= Gas Attack: 30% chance of 30 direct damage to 5 tiles upon successfully striking monster, Lucky: parry 40%        .' }).fetch();
  var VeriteElemental = await Monster.create({ name: 'Verite Elemental', hoverStats: 'Resist: 0\nSlayer: Elemental\nKarma/Fame: Level 3\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '30', goldMax: '1000', alignment: 'Evil', hpMin: '136', hpMax: '353', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '30', fireMax: '100', coldMin: '30', coldMax: '100', poisonMin: '30', poisonMax: '100', energyMin: '30', energyMax: '100', physicalMin: '30', physicalMax: '100', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '176', strengthMax: '450', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '15', baseDmgMax: '32', damageType: DamageTypeEnum.FIRE.id, preferredFood: '0', controlSlots: '0', specials: 'Armored,Immune Poion 4 , Verite= Armor stuck by and weapons stiking creature durability -40%, Fire Damage       .' }).fetch();
  var ValoriteElemental = await Monster.create({ name: 'Valorite Elemental', hoverStats: 'Resist: 2\nSlayer: Elemental\nKarma/Fame: Level 3\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '30', goldMax: '1000', alignment: 'Evil', hpMin: '136', hpMax: '353', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '30', fireMax: '100', coldMin: '30', coldMax: '100', poisonMin: '30', poisonMax: '100', energyMin: '30', energyMax: '100', physicalMin: '30', physicalMax: '100', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '176', strengthMax: '450', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '70', baseDmgMin: '15', baseDmgMax: '32', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: 'Armored,Immune Poion 4, Valorite= reflect damage 50%. Immune Pets/Spells. Energy Damage      .' }).fetch();
  var PatchworkSkeleton = await Monster.create({ name: 'Patchwork Skeleton', hoverStats: 'Resist: 4\nSlayer: undead\nKarma/Fame: Level 1\nBard Diff: 60\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 1, goldMin: '58', goldMax: '72', alignment: 'Evil', hpMin: '34', hpMax: '48', bardMin: '60', bardMax: '60', taming: 'na', fireMin: '50', fireMax: '60', coldMin: '70', coldMax: '80', poisonMin: '100', poisonMax: '100', energyMin: '40', energyMax: '50', physicalMin: '55', physicalMax: '65', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '96', strengthMax: '120', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '10', baseDmgMax: '14', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '0' }).fetch();
  var Quickling = await Monster.create({ name: 'Quickling', hoverStats: 'Resist: 4\nSlayer: Fey\nKarma/Fame: Level 3\nBard Diff: 93\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 3, goldMin: '200', goldMax: '250', alignment: 'Evil', hpMin: '120', hpMax: '160', bardMin: '93', bardMax: '93', taming: 'na', fireMin: '50', fireMax: '60', coldMin: '15', coldMax: '25', poisonMin: '20', poisonMax: '50', energyMin: '65', energyMax: '75', physicalMin: '55', physicalMax: '65', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '3', tacticsMin: '110', tacticsMax: '110', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '100', anatomyMax: '100', strengthMin: '120', strengthMax: '140', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '10', baseDmgMax: '14', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: 'Pester: Successful hits against a pet add 1 aggravation token. Spoil: on a successful hit, discard all food items from targets inventory.   Flee: if not adjacent to an opponent and below 60 hp, replace monsters actions with a full move toward map edge.  I' }).fetch();
  var Raptor = await Monster.create({ name: 'Raptor', hoverStats: 'Resist: 3\nSlayer: Reptile\nKarma/Fame: Level 4\nBard Diff: 86\nTame Diff: 4,0,0,0\nPack instinct: Raptor\nControl Slots: 2\nFood Pref: Fish', karma: 4, goldMin: '449', goldMax: '449', alignment: 'Evil', hpMin: '342', hpMax: '400', bardMin: '86', bardMax: '86', taming: '4,0,0,0', fireMin: '50', fireMax: '60', coldMin: '40', coldMax: '50', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '45', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '75', tacticsMax: '100', resistSpellMin: '3', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '401', strengthMax: '464', dexterityMin: '81', dexterityMax: '105', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '11', baseDmgMax: '17', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'Fish', controlSlots: '2', specials: 'Pack Instinct : (Raptor) damage bonus of melee and special attacks based upon the number of other monsters of the same type on combat map.   Shriek: spawn an additional 1d2 Raptors around priority target. Max 6 (Pets do not shriek)  Bleed: hit oppenent, t' }).fetch();
  var Ronin = await Monster.create({ name: 'Ronin', hoverStats: 'Resist: 3\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '750', goldMax: '900', alignment: 'Evil', hpMin: '250', hpMax: '350', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '45', fireMax: '65', coldMin: '25', coldMax: '45', poisonMin: '40', poisonMax: '60', energyMin: '40', energyMax: '65', physicalMin: '55', physicalMax: '70', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '115', tacticsMax: '130', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '115', anatomyMax: '130', strengthMin: '125', strengthMax: '175', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '85', intelligenceMax: '105', baseDmgMin: '20', baseDmgMax: '25', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Armored.    Swords: Swords for purpose of durablity. Parry(37): percent chance to parry melee, ranged and spell attacks that target this creature. Counterattack: (interrupt) melee attack against a parryed attacker.' }).fetch();
  var SabretoothTiger = await Monster.create({ name: 'Sabretooth Tiger', hoverStats: 'Resist: 3\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: 73\nTame Diff: 25,10,0,0\nPack instinct: none\nControl Slots: 2\nFood Pref: meat', karma: 4, goldMin: '200', goldMax: '400', alignment: 'Evil', hpMin: '362', hpMax: '423', bardMin: '70', bardMax: '80', taming: '25,10,0,0', fireMin: '31', fireMax: '40', coldMin: '50', coldMax: '64', poisonMin: '26', poisonMax: '34', energyMin: '38', energyMax: '45', physicalMin: '48', physicalMax: '65', mageryMin: '80', mageryMax: '90', evalIntMin: '80', evalIntMax: '90', aggroPriority: '2', tacticsMin: '110', tacticsMax: '110', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '496', strengthMax: '523', dexterityMin: '125', dexterityMax: '145', intelligenceMin: '375', intelligenceMax: '425', baseDmgMin: '21', baseDmgMax: '28', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'meat', controlSlots: '2', specials: 'Detect Hidden 90% : If hidden character is in LOS of Tiger, Roll % as its action to reveal.' }).fetch();
  var Scorpion = await Monster.create({ name: 'Scorpion', hoverStats: 'Resist: 1\nSlayer: Arachnid, Scorpion\nKarma/Fame: Level 1\nBard Diff: 66\nTame Diff: 100,56,6,0\nPack instinct: None\nControl Slots: 1\nFood Pref: Meat', karma: 1, goldMin: '57', goldMax: '65', alignment: 'Evil', hpMin: '50', hpMax: '63', bardMin: '66', bardMax: '66', taming: '100,56,6,0', fireMin: '10', fireMax: '15', coldMin: '20', coldMax: '25', poisonMin: '40', poisonMax: '50', energyMin: '10', energyMax: '15', physicalMin: '20', physicalMax: '25', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '60', tacticsMax: '75', resistSpellMin: '1', resistSpellMax: '1', anatomyMin: '0', anatomyMax: '0', strengthMin: '73', strengthMax: '115', dexterityMin: '76', dexterityMax: '95', intelligenceMin: '10', intelligenceMax: '30', baseDmgMin: '5', baseDmgMax: '10', damageType: DamageTypeEnum.POISON.id, preferredFood: 'Meat', controlSlots: '1', specials: 'Pack Instinct : damage bonus of melee and special attacks based upon the number of other monsters of the same type on combat map.' }).fetch();
  var ShadowlordAssassin = await Monster.create({ name: 'Shadowlord Assassin', hoverStats: 'Resist: 4\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '750', goldMax: '900', alignment: 'War Status', hpMin: '100', hpMax: '150', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '20', fireMax: '50', coldMin: '20', coldMax: '50', poisonMin: '20', poisonMax: '50', energyMin: '20', energyMax: '50', physicalMin: '20', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '0', resistSpellMax: '4', anatomyMin: '100', anatomyMax: '100', strengthMin: '125', strengthMax: '175', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '85', intelligenceMax: '105', baseDmgMin: '14', baseDmgMax: '23', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: '  Armor Ignore - ignore damage reduction of targeted location Infectious Strike - Deadly Poison- d12+15/delay 2/cooldown 2/3 turns -30 cure.   Parry:30%     Fencing: damage purposes  Poisoner: 40% Lethal Poison d20+13/delay 1/cooldown 2/4 turns -35 cure. ' }).fetch();
  var ShadowlordBomber = await Monster.create({ name: 'Shadowlord Bomber', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: Level 4\nBard Diff: 70\nTame Diff: \nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '600', goldMax: '900', alignment: 'War Status', hpMin: '100', hpMax: '150', bardMin: '70', bardMax: '70', taming: '0', fireMin: '20', fireMax: '50', coldMin: '20', coldMax: '50', poisonMin: '20', poisonMax: '50', energyMin: '20', energyMax: '50', physicalMin: '20', physicalMax: '50', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '100', tacticsMax: '100', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '100', strengthMax: '150', dexterityMin: '76', dexterityMax: '95', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '8', baseDmgMax: '15', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Crushing Blow- reduce targets stamina by 30. -40% to durability check this hit. Conflag. bomb: d8+14 3 tiles, 2 turn Cure Pot: 85% (Interrupt) replace action if unsuccessful., Greater Heal Pot: d6+20 at end of turn. Parry: 30% all attacks and spells.  Mac' }).fetch();
  var SilverSerpent = await Monster.create({ name: 'Silver Serpent', hoverStats: 'Resist: 4\nSlayer: Reptile, Snake\nKarma/Fame: Level 4\nBard Diff: 80\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '250', goldMax: '300', alignment: 'Evil', hpMin: '97', hpMax: '216', bardMin: '80', bardMax: '80', taming: 'na', fireMin: '5', fireMax: '10', coldMin: '5', coldMax: '10', poisonMin: '100', poisonMax: '100', energyMin: '5', energyMax: '10', physicalMin: '35', physicalMax: '45', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '80', tacticsMax: '95', resistSpellMin: '4', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '161', strengthMax: '360', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '5', baseDmgMax: '21', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Hypnosis: Ranged attacks against this creature have 40% of targeting a random Party member or Pet.' }).fetch();
  var SkeletalSteed = await Monster.create({ name: 'Skeletal Steed', hoverStats: 'Resist: 4\nSlayer: undead\nKarma/Fame: Level 0\nBard Diff: 49\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '41', hpMax: '50', bardMin: '49', bardMax: '49', taming: 'na', fireMin: '0', fireMax: '0', coldMin: '90', coldMax: '95', poisonMin: '100', poisonMax: '100', energyMin: '10', energyMax: '15', physicalMin: '50', physicalMax: '60', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '50', tacticsMax: '50', resistSpellMin: '4', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '91', strengthMax: '100', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '46', intelligenceMax: '60', baseDmgMin: '5', baseDmgMax: '12', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Poison Immunity (5)' }).fetch();
  var SnowElemental = await Monster.create({ name: 'Snow Elemental', hoverStats: 'Resist: 1\nSlayer: Elemental, Ice, Snow\nKarma/Fame: Level 4\nBard Diff: 78\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '250', goldMax: '350', alignment: 'Evil', hpMin: '196', hpMax: '213', bardMin: '78', bardMax: '78', taming: 'na', fireMin: '10', fireMax: '15', coldMin: '60', coldMax: '70', poisonMin: '25', poisonMax: '35', energyMin: '25', energyMax: '35', physicalMin: '44', physicalMax: '55', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '120', tacticsMax: '120', resistSpellMin: '1', resistSpellMax: '1', anatomyMin: '120', anatomyMax: '120', strengthMin: '196', strengthMax: '213', dexterityMin: '96', dexterityMax: '145', intelligenceMin: '71', intelligenceMax: '95', baseDmgMin: '11', baseDmgMax: '17', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Swords,Fencing,Ranged : Half Damage  Aura of Cold: Characters adjacent to Snow Elemental suffer 20 cold damage during delay phase.' }).fetch();
  var SumStoneTitan = await Monster.create({ name: ' (Sum) Stone Titan', hoverStats: 'Resist: \nSlayer: \nKarma/Fame: \nBard Diff: 111.3\nTame Diff: \nPack instinct: None\nControl Slots: 5\nFood Pref: ', karma: 0, goldMin: '0', goldMax: '0', alignment: '0', hpMin: '391', hpMax: '391', bardMin: '111.3', bardMax: '111.3', taming: '0', fireMin: '44', fireMax: '44', coldMin: '44', coldMax: '44', poisonMin: '83', poisonMax: '83', energyMin: '57', energyMax: '57', physicalMin: '56', physicalMax: '56', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '0', tacticsMin: '0', tacticsMax: '0', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '650', strengthMax: '650', dexterityMin: '180', dexterityMax: '180', intelligenceMin: '200', intelligenceMax: '200', baseDmgMin: '16', baseDmgMax: '20', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '5', specials: 'Aggro: 1:Closest opponent, 2: highest aggro or intel' }).fetch();
  var TerathanQueen = await Monster.create({ name: 'Terathan Queen', hoverStats: 'Resist: 5\nSlayer: Arachnid, Terathan\nKarma/Fame: Level 5\nBard Diff: Na\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '1000', goldMax: '1500', alignment: 'Evil', hpMin: '600', hpMax: '850', bardMin: '0', bardMax: '0', taming: 'na', fireMin: '55', fireMax: '65', coldMin: '35', coldMax: '45', poisonMin: '90', poisonMax: '100', energyMin: '55', energyMax: '65', physicalMin: '65', physicalMax: '75', mageryMin: '100', mageryMax: '150', evalIntMin: '100', evalIntMax: '150', aggroPriority: '4', tacticsMin: '80', tacticsMax: '95', resistSpellMin: '5', resistSpellMax: '5', anatomyMin: '0', anatomyMax: '0', strengthMin: '200', strengthMax: '225', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '450', intelligenceMax: '650', baseDmgMin: '18', baseDmgMax: '22', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Acid Blast: upon death, all opponents within 3 tiles take 2d20 poison damage, and all armor and equipped weapons must make durabilty check at -30%. Pets take double damage. Armored, Birth: 1-50% Spawn 1d4 Terathan warrior, 51-100% 1d2 Avengers. Curing/Dis' }).fetch();
  var SwampDragon = await Monster.create({ name: 'Swamp Dragon', hoverStats: 'Resist: 0\nSlayer: none\nKarma/Fame: Level 2\nBard Diff: 59\nTame Diff: 12,0,0,0\nPack instinct: none\nControl Slots: 2\nFood Pref: meat', karma: 2, goldMin: '0', goldMax: '0', alignment: 'Evil', hpMin: '121', hpMax: '180', bardMin: '59', bardMax: '59', taming: '12,0,0,0', fireMin: '20', fireMax: '30', coldMin: '20', coldMax: '30', poisonMin: '20', poisonMax: '30', energyMin: '30', energyMax: '40', physicalMin: '35', physicalMax: '40', mageryMin: '80', mageryMax: '90', evalIntMin: '80', evalIntMax: '90', aggroPriority: '2', tacticsMin: '70', tacticsMax: '90', resistSpellMin: '0', resistSpellMax: '0', anatomyMin: '0', anatomyMax: '0', strengthMin: '201', strengthMax: '300', dexterityMin: '125', dexterityMax: '145', intelligenceMin: '375', intelligenceMax: '425', baseDmgMin: '7', baseDmgMax: '9', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: 'meat', controlSlots: '2', specials: '\nMount 4: Rideable once tamed. Barding: randomly distribute this % of points to all resists, per crafting rules. While mounted, add these resists to the rider. Generated upon taming.  ' }).fetch();
  var TerathanWarrior = await Monster.create({ name: 'Terathan Warrior', hoverStats: 'Resist: 2\nSlayer: Arachnid, Terathan\nKarma/Fame: Level 2\nBard Diff: 70\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '125', goldMax: '175', alignment: 'Evil', hpMin: '100', hpMax: '129', bardMin: '70', bardMax: '70', taming: 'na', fireMin: '20', fireMax: '30', coldMin: '25', coldMax: '35', poisonMin: '30', poisonMax: '40', energyMin: '25', energyMax: '35', physicalMin: '30', physicalMax: '35', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '80', tacticsMax: '100', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '166', strengthMax: '215', dexterityMin: '96', dexterityMax: '145', intelligenceMin: '41', intelligenceMax: '65', baseDmgMin: '7', baseDmgMax: '17', damageType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Acid Blast: upon death, all opponents within 3 tiles take 2d20 poison damage, and all armor and equipped weapons must make durabilty check at -30%. Pets take double damage.(Terathan\'s Immune) Armored' }).fetch();
  var WailingBanshee = await Monster.create({ name: 'Wailing Banshee', hoverStats: 'Resist: 3\nSlayer: undead\nKarma/Fame: Level 2\nBard Diff: 60\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '50', goldMax: '100', alignment: 'Evil', hpMin: '34', hpMax: '48', bardMin: '60', bardMax: '60', taming: 'na', fireMin: '25', fireMax: '30', coldMin: '70', coldMax: '80', poisonMin: '70', poisonMax: '80', energyMin: '40', energyMax: '50', physicalMin: '50', physicalMax: '60', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '55', tacticsMax: '80', resistSpellMin: '3', resistSpellMax: '4', anatomyMin: '0', anatomyMax: '0', strengthMin: '96', strengthMax: '120', dexterityMin: '56', dexterityMax: '75', intelligenceMin: '16', intelligenceMax: '40', baseDmgMin: '10', baseDmgMax: '14', damageType: DamageTypeEnum.PHYSICAL.id, preferredFood: '0', controlSlots: '0', specials: 'Life Curse: upon resolving hp damage from this monsters attack, the targets current hp becomes is max hp.  Duration: 4 turns after all Banshee\'s are killed in current combat. (Curse applied after all monsters damage target for the round)' }).fetch();
  var Wraith = await Monster.create({ name: 'Wraith', hoverStats: 'Resist: 2\nSlayer: Undead\nKarma/Fame: Level 2\nBard Diff: 68\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '50', goldMax: '100', alignment: 'Evil', hpMin: '46', hpMax: '60', bardMin: '68', bardMax: '68', taming: 'na', fireMin: '0', fireMax: '0', coldMin: '15', coldMax: '25', poisonMin: '10', poisonMax: '20', energyMin: '0', energyMax: '0', physicalMin: '25', physicalMax: '30', mageryMin: '60', mageryMax: '70', evalIntMin: '60', evalIntMax: '70', aggroPriority: '2', tacticsMin: '45', tacticsMax: '60', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '76', strengthMax: '100', dexterityMin: '96', dexterityMax: '120', intelligenceMin: '36', intelligenceMax: '60', baseDmgMin: '7', baseDmgMax: '11', damageType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Incorporeal: DCI 15  Poison Immunity (2)' }).fetch();
  var VoidElemental = await Monster.create({ name: 'Void Elemental', hoverStats: 'Resist: 2\nSlayer: Elemental\nKarma/Fame: Level 5\nBard Diff: 150\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '800', goldMax: '2000', alignment: 'Evil', hpMin: '2500', hpMax: '2650', bardMin: '150', bardMax: '150', taming: 'na', fireMin: '55', fireMax: '65', coldMin: '55', coldMax: '65', poisonMin: '100', poisonMax: '100', energyMin: '65', energyMax: '75', physicalMin: '65', physicalMax: '75', mageryMin: '60', mageryMax: '73', evalIntMin: '60', evalIntMax: '75', aggroPriority: '2', tacticsMin: '60', tacticsMax: '75', resistSpellMin: '2', resistSpellMax: '2', anatomyMin: '0', anatomyMax: '0', strengthMin: '376', strengthMax: '403', dexterityMin: '183', dexterityMax: '230', intelligenceMin: '164', intelligenceMax: '213', baseDmgMin: '15', baseDmgMax: '17', damageType: DamageTypeEnum.ENERGY.id, preferredFood: '0', controlSlots: '0', specials: 'Swords: Melee attacks are swords for purpose of Durability Checks.\nConsume: corpses of fallen opponents are consumed and replaced with a void orb. All loot is lost.  Teleport: if creature cannot end movement adjacent to an opponent after a move action, cr' }).fetch();
  var DeepSeaSerpent = await Monster.create({ name: 'Deep Sea Serpent', hoverStats: 'Resist: 2\nSlayer: Snake, Reptile\nKarma/Fame: Level 4\nBard Diff: 77\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 4, goldMin: '50', goldMax: '100', alignment: 'Evil', hpMin: '225', hpMax: '300', bardMin: '77', bardMax: '77', taming: 'na', fireMin: '70', fireMax: '80', coldMin: '40', coldMax: '50', poisonMin: '30', poisonMax: '40', energyMin: '15', energyMax: '20', physicalMin: '30', physicalMax: '40', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '60', tacticsMax: '70', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '251', strengthMax: '425', dexterityMin: '58', dexterityMax: '85', intelligenceMin: '58', intelligenceMax: '85', baseDmgMin: '7', baseDmgMax: '14', damageType: DamageTypeEnum.COLD.id, breathDmgType: DamageTypeEnum.FIRE.id, preferredFood: '0', controlSlots: '0', specials: 'Reach 4: Creature can make melee attacks against enemies up to 4 tiles away. Dive(20): Creature at listed hp or less during action phase will end combat and flee. No attacks of opportunity.' }).fetch();
  var FairyDragon = await Monster.create({ name: 'Fairy Dragon', hoverStats: 'Resist: 5\nSlayer: Dragon, Reptile\nKarma/Fame: Level -5\nBard Diff: 110\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: fish', karma: 0, goldMin: '1500', goldMax: '1750', alignment: 'Good', hpMin: '393', hpMax: '409', bardMin: '110', bardMax: '110', taming: 'na', fireMin: '42', fireMax: '48', coldMin: '43', coldMax: '50', poisonMin: '43', poisonMax: '50', energyMin: '40', energyMax: '46', physicalMin: '18', physicalMax: '29', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '94', tacticsMax: '98', resistSpellMin: '5', resistSpellMax: '5', anatomyMin: '94', anatomyMax: '98', strengthMin: '506', strengthMax: '561', dexterityMin: '226', dexterityMax: '245', intelligenceMin: '401', intelligenceMax: '580', baseDmgMin: '15', baseDmgMax: '20', damageType: DamageTypeEnum.CHAOS.id, preferredFood: 'fish', controlSlots: '0', specials: 'Charge: Full move 4 and Melee attack   Heal: self target, if full hp, will target closest injured ally. Can Heal Invisible Allies  Blink: creature goes invisible and relocates to a new tile based off its current facing (d8 facing, d6 distance).  If AOE at' }).fetch();
  var Kraken = await Monster.create({ name: 'Kraken', hoverStats: 'Resist: 3\nSlayer: Snake, Reptile\nKarma/Fame: Level 5\nBard Diff: 81\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 5, goldMin: '400', goldMax: '600', alignment: 'Evil', hpMin: '454', hpMax: '568', bardMin: '81', bardMax: '81', taming: 'na', fireMin: '30', fireMax: '40', coldMin: '30', coldMax: '40', poisonMin: '20', poisonMax: '30', energyMin: '10', energyMax: '20', physicalMin: '45', physicalMax: '55', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '60', tacticsMax: '70', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '756', strengthMax: '780', dexterityMin: '226', dexterityMax: '245', intelligenceMin: '58', intelligenceMax: '85', baseDmgMin: '19', baseDmgMax: '33', damageType: DamageTypeEnum.PHYSICAL.id, breathDmgType: DamageTypeEnum.POISON.id, preferredFood: '0', controlSlots: '0', specials: 'Reach 6: Creature can make melee attacks against enemies up to 6 tiles away. Dive(20): Creature at listed hp or less during action phase will end combat and flee. No attacks of opportunity.  Ambidextrous (8): Melee attacks can target up to 8 enemies in wi' }).fetch();
  var SeaSerpent = await Monster.create({ name: 'Sea Serpent', hoverStats: 'Resist: 2\nSlayer: Snake, Reptile\nKarma/Fame: Level 2\nBard Diff: 73\nTame Diff: na\nPack instinct: None\nControl Slots: na\nFood Pref: ', karma: 2, goldMin: '50', goldMax: '100', alignment: 'Evil', hpMin: '110', hpMax: '127', bardMin: '73', bardMax: '73', taming: 'na', fireMin: '50', fireMax: '60', coldMin: '30', coldMax: '40', poisonMin: '30', poisonMax: '40', energyMin: '15', energyMax: '20', physicalMin: '25', physicalMax: '35', mageryMin: '0', mageryMax: '0', evalIntMin: '0', evalIntMax: '0', aggroPriority: '2', tacticsMin: '60', tacticsMax: '70', resistSpellMin: '2', resistSpellMax: '3', anatomyMin: '0', anatomyMax: '0', strengthMin: '168', strengthMax: '225', dexterityMin: '58', dexterityMax: '85', intelligenceMin: '58', intelligenceMax: '85', baseDmgMin: '7', baseDmgMax: '13', damageType: DamageTypeEnum.PHYSICAL.id, breathDmgType: DamageTypeEnum.COLD.id, preferredFood: '0', controlSlots: '0', specials: 'Reach 2: Creature can make melee attacks against enemies up to 2 tiles away. ' }).fetch();

  /**
   * Actions
   */
  var aMove = await Action.create({ name: 'Move', value: '2', description: 'Tiles', initiative: '4' }).fetch();
  var aHideStealth = await Action.create({ name: 'Hide/Stealth', value: '2', description: 'Tiles', initiative: '4' }).fetch();
  var aSwim = await Action.create({ name: 'Swim', value: '2', description: 'Tiles', initiative: '4' }).fetch();
  var amelee = await Action.create({ name: 'melee', description: '', initiative: '0' }).fetch();
  var aDeadlyPoisonSpell = await Action.create({ name: 'Deadly Poison Spell', vaClue: '-30', description: '%', initiative: '3' }).fetch();
  var aParalyzeSpell = await Action.create({ name: 'Paralyze Spell', value: '4', description: 'rounds', initiative: '5' }).fetch();
  var aManaDrain = await Action.create({ name: 'Mana Drain ', value: '44', description: 'mana', initiative: '4' }).fetch();
  var aMassCurse = await Action.create({ name: 'Mass Curse', value: '6', description: 'tiles', initiative: '6' }).fetch();
  var aHarm = await Action.create({ name: 'Harm', description: '', initiative: '2' }).fetch();
  var aPoisonSpell = await Action.create({ name: 'Poison Spell', value: '-10', description: '%', initiative: '3' }).fetch();
  var aFeeblemind = await Action.create({ name: 'Feeblemind', value: '20', description: 'mana', initiative: '1' }).fetch();
  var aFly = await Action.create({ name: 'Fly', description: '', initiative: '4' }).fetch();
  var aLethalPoisonSpell = await Action.create({ name: 'Lethal Poison Spell', value: '-35', description: '%', initiative: '3' }).fetch();
  var aMagicArrow = await Action.create({ name: 'Magic Arrow', description: '', initiative: '1' }).fetch();
  var aFireball = await Action.create({ name: 'Fireball', description: '', initiative: '3' }).fetch();
  var aLightning = await Action.create({ name: 'Lightning', description: '', initiative: '4' }).fetch();
  var aMindBlast = await Action.create({ name: 'Mind Blast', value: '3', description: 'delay', initiative: '5' }).fetch();
  var aEnergyBolt = await Action.create({ name: 'Energy Bolt', description: '', initiative: '6' }).fetch();
  var aExplosion = await Action.create({ name: 'Explosion', description: '', initiative: '6' }).fetch();
  var aFlamestrike = await Action.create({ name: 'Flamestrike', description: '', initiative: '7' }).fetch();
  var aMeleeTailswipe = await Action.create({ name: 'Melee + Tailswipe', value: '3', description: 'tiles AOE', initiative: '0' }).fetch();
  var aBreathWeapon = await Action.create({ name: 'Breath Weapon', description: 'LOS', initiative: '10' }).fetch();
  var aCurse = await Action.create({ name: 'Curse', description: '', initiative: '4' }).fetch();
  var aMeleeSmash = await Action.create({ name: 'Melee + Smash', value: '2', description: 'tiles AOE', initiative: '0' }).fetch();
  var aStaminaDrain = await Action.create({ name: 'Stamina Drain', value: '50', description: 'mana', initiative: '4' }).fetch();
  var aBloodOath = await Action.create({ name: 'Blood Oath', value: '4', description: 'Spirit Speak', initiative: '1' }).fetch();
  var aMeleeDisarm = await Action.create({ name: 'Melee + Disarm', description: '', initiative: '0' }).fetch();
  var aCongflagPot = await Action.create({ name: 'Congflag Pot.', value: '4', description: 'Cooldown, d8+14, 3 Tiles, 2 turns', initiative: '6' }).fetch();
  var aGreaterExplosionPot = await Action.create({ name: 'Greater Explosion Pot.', value: '4', description: 'Cooldown, d20+30', initiative: '6' }).fetch();
  var aMeleeDeadlyPoison = await Action.create({ name: 'Melee + Deadly Poison', value: '-30', description: '%', initiative: '0' }).fetch();
  var aMeleeLethalPoison = await Action.create({ name: 'Melee + Lethal Poison', value: '-35', description: '%', initiative: '0' }).fetch();
  var aMirrorImage = await Action.create({ name: 'Mirror Image', description: '1-4 Images', initiative: '3' }).fetch();
  var aWither = await Action.create({ name: 'Wither 35 Cold', value: '3', description: 'tiles', initiative: '5' }).fetch();
  var aGreaterHealSpell = await Action.create({ name: 'Greater Heal d10+25', description: '', initiative: '4' }).fetch();
  var aSummonEarthElemental = await Action.create({ name: 'Summon Earth Elemental', value: '24', description: 'rounds', initiative: '8' }).fetch();
  var aCorpseSkin = await Action.create({ name: 'Corpse Skin Target', description: '', initiative: '1' }).fetch();
  var aMeleePoison = await Action.create({ name: 'Melee + Poison', value: '-10', description: '%', initiative: '0' }).fetch();
  var aMeleeDismount = await Action.create({ name: 'Melee + Dismount', description: '', initiative: '0' }).fetch();
  var aMeleeArmorIgnore = await Action.create({ name: 'Melee + Armor Ignore', description: '', initiative: '0' }).fetch();
  var aHungerPains = await Action.create({ name: 'Hunger Pains*', value: '-8', description: 'Hunger', initiative: '8' }).fetch();
  var aArcheryDoubleShot = await Action.create({ name: 'Archery + Double Shot', value: '-15', description: '% Hit', initiative: '0' }).fetch();
  var aArcheryLethal = await Action.create({ name: 'Archery + Lethal Poison', value: '-35', description: '%', initiative: '0' }).fetch();
  var aArcheryParalyze = await Action.create({ name: 'Archery + Paralyzing Blow', description: '', initiative: '0' }).fetch();
  var aArcheryMortalStrike = await Action.create({ name: 'Archery + Mortal Strike', description: '', initiative: '0' }).fetch();
  var aArcheryCorrupt = await Action.create({ name: 'Archery + Corrupt', description: '-1d6 Karma', initiative: '0' }).fetch();
  var aArchery = await Action.create({ name: 'Archery', description: '', initiative: '0' }).fetch();
  var aGreaterPoisonSpell = await Action.create({ name: 'Greater Poison Spell', vaClue: '-25', description: '%', initiative: '3' }).fetch();
  var aMeleeBleed = await Action.create({ name: 'Melee + Poison', value: '-10', description: '%', initiative: '0' }).fetch();
  var aPixieDust = await Action.create({ name: 'Pixie Dust*', value: '-8', description: 'Sleep', initiative: '5' }).fetch();
  var aParalyzeBlow = await Action.create({ name: ' Melee + Paralyzing Blow', value: '3', description: 'rounds', initiative: '0' }).fetch();
  var aMeleeCorruption = await Action.create({ name: 'Melee + Armor Corruption', value: '-50', description: '% Damage Reduction', initiative: '0' }).fetch();
  var aMeleeGreaterPoison = await Action.create({ name: 'Melee +Greater Poison', vaClue: '-25', description: '%', initiative: '0' }).fetch();
  var aMeleeNerve = await Action.create({ name: 'Melee + Nerve Strike', vaClue: '2', description: 'rounds', initiative: '0' }).fetch();
  var aSirenSong = await Action.create({ name: 'Siren Song*', description: '', initiative: '6' }).fetch();
  var aMeleeCorrupt = await Action.create({ name: 'Melee + Corrupt', description: '-1d6 Karma', initiative: '0' }).fetch();
  var aMeleeGrab = await Action.create({ name: 'Melee + Grab', description: '', initiative: '0' }).fetch();
  var aShriek = await Action.create({ name: 'Shriek', description: '', initiative: '8' }).fetch();
  var aSpellReflect = await Action.create({ name: 'Spell Reflect Field', description: 'self', initiative: '4' }).fetch();
  var aSumBogling = await Action.create({ name: 'Summon Boglings', description: '1d6 Boglings', initiative: '8' }).fetch();
  var aMeleeMortal = await Action.create({ name: 'Melee + Mortalstrike', description: '', initiative: '0' }).fetch();
  var aShadowStrike = await Action.create({ name: 'ShadowStrike', description: '', initiative: '0' }).fetch();
  var aDeathStrike = await Action.create({ name: 'Deathstrike', value: '120', description: 'Physical Damage', initiative: '0' }).fetch();
  var aWhirlwindStrike = await Action.create({ name: 'Whirlwind Strike', description: '', initiative: '0' }).fetch();
  var aConcussionBlow = await Action.create({ name: 'Concussion Blow', description: '', initiative: '0' }).fetch();
  var aMeleeFreeze = await Action.create({ name: 'Melee + Freeze', description: '', initiative: '0' }).fetch();
  var aCharge = await Action.create({ name: 'Charge', description: '', initiative: '0' }).fetch();
  var aChargeDismount = await Action.create({ name: 'Charge + Dismount', description: '', initiative: '0' }).fetch();
  var aChargeConcussion = await Action.create({ name: 'Charge + Concussion', description: '', initiative: '0' }).fetch();
  var aMeleeDoubleStrike = await Action.create({ name: 'Melee + Double Strike', description: '', initiative: '0' }).fetch();
  var aMeleeColdAura = await Action.create({ name: 'Melee + Cold Aura', description: '', initiative: '0' }).fetch();
  var aMeleeCrushingBlow = await Action.create({ name: 'Melee + CrushingBlow', description: '', initiative: '0' }).fetch();
  var aCharm = await Action.create({ name: 'Charm*', description: '', initiative: '6' }).fetch();
  var aSiphonSoul = await Action.create({ name: 'Siphon Soul*', description: '', initiative: '8' }).fetch();
  var aMeleeSpoil = await Action.create({ name: 'Melee + Spoil*', description: '', initiative: '0' }).fetch();
  var aMeleeMomentum = await Action.create({ name: 'Momentum Strike', description: '', initiative: '0' }).fetch();
  var aBirth = await Action.create({ name: 'Birth*', description: '', initiative: '8' }).fetch();
  var aMeleeBlink = await Action.create({ name: 'Melee + Blink*', description: '', initiative: '0' }).fetch();
  var aMeleeSeed = await Action.create({ name: 'Melee + Seed*', description: '', initiative: '0' }).fetch();

  /**
   * Monster Loot
   */
  await MonsterLoot.createEach([
    { monster: AcidElemental.id, category: ItemCategoryEnum.GEM.id, qty: 2, level: 1 },
    { monster: AcidElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 1 },
    { monster: AcidElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },
    { monster: AcidElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: AcidElemental.id, category: ItemCategoryEnum.MAP.id,         level: 2, chance: 0.3 },
    { monster: AcidElemental.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 0,        chance: 0.3 },

    { monster: AirElemental.id, category: ItemCategoryEnum.GEM.id, qty: 2 , level: 2},
    { monster: AirElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 1 },
    { monster: AirElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },
    { monster: AirElemental.id, category: ItemCategoryEnum.MAP.id,         level: 1, chance: 0.3 },

    { monster: AncientWyrm.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 3},
    { monster: AncientWyrm.id, category: ItemCategoryEnum.POTION.id, qty: 4 , level: 2},
    { monster: AncientWyrm.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: AncientWyrm.id, category: ItemCategoryEnum.NEC_REG.id, qty: 4 },
    { monster: AncientWyrm.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: AncientWyrm.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 6, level: 3 },
    { monster: AncientWyrm.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 8, level: 4 },
    { monster: AncientWyrm.id, category: ItemCategoryEnum.MAP.id,         level: 5, chance: 0.75 },
    { monster: AncientWyrm.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 0,        chance: 0.3 },
    { monster: AncientWyrm.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: Balron.id, category: ItemCategoryEnum.GEM.id, qty: 2 , level:3},
    { monster: Balron.id, category: ItemCategoryEnum.MAG_REG.id, qty: 2 },
    { monster: Balron.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 3 },
    { monster: Balron.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 4 },
    { monster: Balron.id, category: ItemCategoryEnum.MAP.id,         level: 5, chance: 0.5 },
    { monster: Balron.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 6,        chance: 0.3 },
    { monster: Balron.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.3 },

    { monster: BoneKnight.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },

    { monster: BloodElemental.id, category: ItemCategoryEnum.GEM.id, qty: 12, pool: 1 },
    { monster: BloodElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: BloodElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 1 },
    { monster: BloodElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },
    { monster: BloodElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 3 },
    { monster: BloodElemental.id, category: ItemCategoryEnum.MAP.id, level: 5, chance: 0.3 },

    { monster: Buccaneer.id, category: ItemCategoryEnum.POTION.id, qty: 2 , level: 3},
    { monster: Buccaneer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Buccaneer.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 5, chance: 0.3 },

    { monster: Dragon.id, category: ItemCategoryEnum.GEM.id, qty: 9 , level: 2},
    { monster: Dragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Dragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 3 },
    { monster: Dragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: Dragon.id, category: ItemCategoryEnum.MAP.id, level: 4, chance: 0.5 },
    { monster: Dragon.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 18, chance: 0.3 },
    { monster: Dragon.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.3 },

    { monster: SkeletalDragon.id, category: ItemCategoryEnum.GEM.id, qty: 9, level: 1 },
    { monster: SkeletalDragon.id, category: ItemCategoryEnum.NEC_REG.id, qty: 4 },
    { monster: SkeletalDragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: SkeletalDragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 3 },
    { monster: SkeletalDragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 4 },
    { monster: SkeletalDragon.id, category: ItemCategoryEnum.MAP.id, level: 4, chance: 0.5 },
    { monster: SkeletalDragon.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: DreadSpider.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: DreadSpider.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: DreadSpider.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 4 },
    { monster: DreadSpider.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 29, chance: 0.3 },
    { monster: DreadSpider.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.3 },

    { monster: BuccaneerLord.id, category: ItemCategoryEnum.GEM.id, qty: 9 , level: 2},
    { monster: BuccaneerLord.id, category: ItemCategoryEnum.POTION.id, qty: 4 ,level: 2 },
    { monster: BuccaneerLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: BuccaneerLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: BuccaneerLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: BuccaneerLord.id, category: ItemCategoryEnum.MAP.id, level: 5, chance: 0.3 },
    { monster: BuccaneerLord.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 5, chance: 0.3 },

    { monster: Deamon.id, category: ItemCategoryEnum.GEM.id, qty: 2 ,level: 1},
    { monster: Deamon.id, category: ItemCategoryEnum.MAG_REG.id, qty: 2 },
    { monster: Deamon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Deamon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: Deamon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: Deamon.id, category: ItemCategoryEnum.MAP.id, level: 4, chance: 0.3 },
    { monster: Deamon.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 6, chance: 0.2 },

    { monster: DisplacerBeast.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: DisplacerBeast.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: DisplacerBeast.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: DisplacerBeast.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 10, chance: 0.3 },

    { monster: EarthElemental.id, category: ItemCategoryEnum.GEM.id, qty: 2 ,level: 3},
    { monster: EarthElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: EarthElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 1 },

    { monster: Ettin.id, category: ItemCategoryEnum.GEM.id, qty: 3,level: 1 },
    { monster: Ettin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 0 },

    { monster: EvilMage.id, category: ItemCategoryEnum.GEM.id, qty: 3 ,level: 2},
    { monster: EvilMage.id, category: ItemCategoryEnum.MAG_REG.id, qty: 3 },
    { monster: EvilMage.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: EvilMage.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },
    { monster: EvilMage.id, category: ItemCategoryEnum.MAP.id, level: 1, chance: 0.5 },

    { monster: FireBeetle.id, category: ItemCategoryEnum.GEM.id, qty: 10,level: 2 },
    { monster: FireBeetle.id, category: ItemCategoryEnum.MAG_REG.id, qty: 2 },
    { monster: FireBeetle.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 25, chance: 0.3 },
    { monster: FireBeetle.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.3 },

    { monster: FireElemental.id, category: ItemCategoryEnum.POTION.id, qty: 1 ,level: 3},
    { monster: FireElemental.id, category: ItemCategoryEnum.MAG_REG.id, qty: 1 },
    { monster: FireElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: FireElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 1 },
    { monster: FireElemental.id, category: ItemCategoryEnum.MAP.id, level: 2, chance: 0.5 },

    { monster: GiantBeetle.id, category: ItemCategoryEnum.GEM.id, qty: 3,level: 1 },
    { monster: GiantBeetle.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: GiantBeetle.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: GiantBeetle.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 25, chance: 0.3 },
    { monster: GiantBeetle.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.3 },

    { monster: Gargoyle.id, category: ItemCategoryEnum.GEM.id, qty: 2 ,level: 2},
    { monster: Gargoyle.id, category: ItemCategoryEnum.MAG_REG.id, qty: 2 },
    { monster: Gargoyle.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Gargoyle.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },
    { monster: Gargoyle.id, category: ItemCategoryEnum.MAP.id, level: 1, chance: 0.5 },
    { monster: Gargoyle.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.3 },

    { monster: Gazer.id, category: ItemCategoryEnum.GEM.id, qty: 2,level: 1 },
    { monster: Gazer.id, category: ItemCategoryEnum.MAG_REG.id, qty: 2 },
    { monster: Gazer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Gazer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 1 },
    { monster: Gazer.id, category: ItemCategoryEnum.MAP.id, level: 1, chance: 0.5 },
    { monster: Gazer.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 31, chance: 0.3 },

    { monster: ElderGazer.id, category: ItemCategoryEnum.GEM.id, qty: 8 ,level: 3},
    { monster: ElderGazer.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: ElderGazer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: ElderGazer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: ElderGazer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 3 },
    { monster: ElderGazer.id, category: ItemCategoryEnum.MAP.id, level: 4, chance: 0.5 },
    { monster: ElderGazer.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 31, chance: 0.5 },
    { monster: ElderGazer.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.3 },

    { monster: GreaterDragon.id, category: ItemCategoryEnum.GEM.id, qty: 10 ,level: 1},
    { monster: GreaterDragon.id, category: ItemCategoryEnum.POTION.id, qty: 6 ,level: 2},
    { monster: GreaterDragon.id, category: ItemCategoryEnum.NEC_REG.id, qty: 6 },
    { monster: GreaterDragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 0 },
    { monster: GreaterDragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 3 },
    { monster: GreaterDragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 8, level: 4 },
    { monster: GreaterDragon.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 18, chance: 0.8, qty: 3 },
    { monster: GreaterDragon.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.8 },

    { monster: Griffin.id, category: ItemCategoryEnum.GEM.id, qty: 10 ,level: 3},
    { monster: Griffin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Griffin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: Griffin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 4 },
    { monster: Griffin.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.75 },

    { monster: HellHound.id, category: ItemCategoryEnum.MAG_REG.id, qty: 2},
    { monster: HellHound.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: HellHound.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },
    { monster: HellHound.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 11, chance: 0.3 },

    { monster: Imp.id, category: ItemCategoryEnum.GEM.id, qty: 3,level: 1 },
    { monster: Imp.id, category: ItemCategoryEnum.NEC_REG.id, qty: 4 },
    { monster: Imp.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Imp.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },

    { monster: Lich.id, category: ItemCategoryEnum.GEM.id2, qty: 5 ,level: 2},
    { monster: Lich.id, category: ItemCategoryEnum.GEM.id4, qty: 4 ,level: 2},
    { monster: Lich.id, category: ItemCategoryEnum.NEC_REG.id, qty: 4 },
    { monster: Lich.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Lich.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 1 },
    { monster: Lich.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: Lich.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 30, chance: 0.3 },

    { monster: LichLord.id, category: ItemCategoryEnum.GEM.id, qty: 7 ,level: 1},
    { monster: LichLord.id, category: ItemCategoryEnum.GEM.id3, qty: 6 ,level: 3},
    { monster: LichLord.id, category: ItemCategoryEnum.NEC_REG.id, qty: 4 },
    { monster: LichLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 0 },
    { monster: LichLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },
    { monster: LichLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: LichLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 3 },
    { monster: LichLord.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 30, chance: 0.6 },
    { monster: LichLord.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: Medusa.id, category: ItemCategoryEnum.GEM.id, qty: 10,level: 3 },
    { monster: Medusa.id, category: ItemCategoryEnum.POTION.id, qty: 6 ,level: 1},
    { monster: Medusa.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: Medusa.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 0 },
    { monster: Medusa.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 5, level: 2 },
    { monster: Medusa.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 6, level: 3 },
    { monster: Medusa.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 8, level: 4 },
    { monster: Medusa.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.9 },

    { monster: Mummy.id, category: ItemCategoryEnum.GEM.id4, qty: 2 ,level: 2},
    { monster: Mummy.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Mummy.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 1 },

    { monster: Nightmare.id, category: ItemCategoryEnum.GEM.id, qty: 2 ,level: 2},
    { monster: Nightmare.id, category: ItemCategoryEnum.MAG_REG.id, qty: 2 },
    { monster: Nightmare.id, category: ItemCategoryEnum.NEC_REG.id, qty: 2 },
    { monster: Nightmare.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Nightmare.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: Nightmare.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },

    { monster: Ogre.id, category: ItemCategoryEnum.GEM.id2, qty: 3 ,level: 2},
    { monster: Ogre.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Ogre.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },
    { monster: Ogre.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: Ogre.id, category: ItemCategoryEnum.MAP.id, level: 3, chance: 0.5 },
    { monster: Ogre.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 17, chance: 0.3 },

    { monster: OgreLord.id, category: ItemCategoryEnum.GEM.id, qty: 8,level: 1 },
    { monster: OgreLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: OgreLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: OgreLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: OgreLord.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 4 },
    { monster: OgreLord.id, category: ItemCategoryEnum.MAP.id, level: 5, chance: 0.75 },
    { monster: OgreLord.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 17, chance: 0.5 },

    { monster: Orc.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Orc.id, category: ItemCategoryEnum.GEM.id1, itemId: 2, chance: 0.75 },

    { monster: Pixie.id, category: ItemCategoryEnum.GEM.id2, qty: 3 ,level: 3},
    { monster: Pixie.id, category: ItemCategoryEnum.MAG_REG.id, qty: 2 },
    { monster: Pixie.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Pixie.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },
    { monster: Pixie.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 15, chance: 0.3 },

    { monster: GiantRat.id, category: ItemCategoryEnum.GEM.id, qty: 1 ,level: 1},

    { monster: Ratman.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },

    { monster: RatmanArcher.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },

    { monster: RatmanMage.id, category: ItemCategoryEnum.POTION.id, qty: 2 ,level: 1},
    { monster: RatmanMage.id, category: ItemCategoryEnum.MAG_REG.id, qty: 2 },
    { monster: RatmanMage.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: RatmanMage.id, category: ItemCategoryEnum.MAP.id, level: 2, chance: 0.3 },

    { monster: Reptalon.id, category: ItemCategoryEnum.GEM.id1, qty: 10  ,level: 2},
    { monster: Reptalon.id, category: ItemCategoryEnum.GEM.id4, qty: 4,level: 2 },
    { monster: Reptalon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 0 },
    { monster: Reptalon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 6, level: 3 },
    { monster: Reptalon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 6, level: 4 },
    { monster: Reptalon.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.7 },

    { monster: RottingCorpse.id, category: ItemCategoryEnum.NEC_REG.id, qty: 4 },
    { monster: RottingCorpse.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 0 },
    { monster: RottingCorpse.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 6, level: 3 },
    { monster: RottingCorpse.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 4 },
    { monster: RottingCorpse.id, category: ItemCategoryEnum.MAP.id, level: 5, chance: 0.5 },
    { monster: RottingCorpse.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.7 },

    { monster: RuneBeetle.id, category: ItemCategoryEnum.GEM.id, qty: 2 , level: 1},
    { monster: RuneBeetle.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: RuneBeetle.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },
    { monster: RuneBeetle.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: RuneBeetle.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: RuneBeetle.id, category: ItemCategoryEnum.MAP.id, level: 2, chance: 0.3 },
    { monster: RuneBeetle.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 25, chance: 0.6 },
    { monster: RuneBeetle.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: GiantSerpent.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },

    { monster: Siren.id, category: ItemCategoryEnum.GEM.id, qty: 3 , level: 3},
    { monster: Siren.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Siren.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },
    { monster: Siren.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 1, chance: 0.3 },

    { monster: Succubus.id, category: ItemCategoryEnum.GEM.id, qty: 2 , level: 2},
    { monster: Succubus.id, category: ItemCategoryEnum.POTION.id, qty: 3, level: 2 },
    { monster: Succubus.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: Succubus.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 0 },
    { monster: Succubus.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },
    { monster: Succubus.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: Succubus.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 4 },
    { monster: Succubus.id, category: ItemCategoryEnum.MAP.id, level: 4, chance: 0.3 },
    { monster: Succubus.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 6, chance: 0.5 },
    { monster: Succubus.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: Titan.id, category: ItemCategoryEnum.GEM.id, qty: 2 , level: 2},
    { monster: Titan.id, category: ItemCategoryEnum.NEC_REG.id, qty: 3 },
    { monster: Titan.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Titan.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },
    { monster: Titan.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: Titan.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 4 },
    { monster: Titan.id, category: ItemCategoryEnum.MAP.id, level: 5, chance: 0.5 },
    { monster: Titan.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 17, chance: 0.5 },
    { monster: Titan.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: Unicorn.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Unicorn.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 1 },
    { monster: Unicorn.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },
    { monster: Unicorn.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 3 },
    { monster: Unicorn.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.3 },

    { monster: WanderingHealer.id, category: ItemCategoryEnum.POTION.id, qty: 6, level: 1 },
    { monster: WanderingHealer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 0 },
    { monster: WanderingHealer.id, category: ItemCategoryEnum.GEM.id0, itemId: 11, chance: 1.0 },

    { monster: WarCat.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: WarCat.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: WarCat.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 4 },
    { monster: WarCat.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.7 },

    { monster: WaterElemental.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 3},

    { monster: Wyvern.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Wyvern.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 1 },
    { monster: Wyvern.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },

    { monster: AbomidableHulk.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 2},
    { monster: AbomidableHulk.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: AbomidableHulk.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 5, level: 4 },
    { monster: AbomidableHulk.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 0, chance: 0.3, qty: 3 },
    { monster: AbomidableHulk.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: BakeKitsune.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: BakeKitsune.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: BakeKitsune.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 4 },
    { monster: BakeKitsune.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 9, chance: 0.4 },

    { monster: TerathanAvenger.id, category: ItemCategoryEnum.GEM.id, qty: 3 , level: 3},
    { monster: TerathanAvenger.id, category: ItemCategoryEnum.POTION.id, qty: 4, level: 3 },
    { monster: TerathanAvenger.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: TerathanAvenger.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 3 },
    { monster: TerathanAvenger.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 14, chance: 0.3 },
    { monster: TerathanAvenger.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.4 },

    { monster: Bogling.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 23, chance: 0.3 },

    { monster: BoneMagi.id, category: ItemCategoryEnum.GEM.id, qty: 3 , level: 1},
    { monster: BoneMagi.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: BoneMagi.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: BoneMagi.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },

    { monster: BogThing.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: BogThing.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: BogThing.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 6, level: 3 },
    { monster: BogThing.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 8, level: 4 },
    { monster: BogThing.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 23, chance: 0.8, qty: 3 },

    { monster: Boura.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Boura.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: Boura.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: Boura.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 2, chance: 0.4 },

    { monster: BritishKnight.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: BritishKnight.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
//    { monster: BritishKnight.id, category: ItemCategoryEnum.GEM.id1, itemId: 1, qty: '30-50' },

    { monster: BritishArcher.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: BritishArcher.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
//    { monster: BritishArcher.id, category: ItemCategoryEnum.GEM.id1, itemId: 1, qty: '30-50' },

    { monster: Drake.id, category: ItemCategoryEnum.GEM.id, qty: 3 , level: 1},
    { monster: Drake.id, category: ItemCategoryEnum.POTION.id, qty: 3, level: 3 },
    { monster: Drake.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Drake.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: Drake.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 3 },
    { monster: Drake.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 18, chance: 0.3 },
    { monster: Drake.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.3 },

    { monster: EliteNinja.id, category: ItemCategoryEnum.POTION.id, qty: 5, level: 3},
    { monster: EliteNinja.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: EliteNinja.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: EliteNinja.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: EliteNinja.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 32, chance: 0.4 },

    { monster: FanDancer.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 2},
    { monster: FanDancer.id, category: ItemCategoryEnum.POTION.id, qty: 4, level: 1 },
    { monster: FanDancer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: FanDancer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: FanDancer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 4 },
    { monster: FanDancer.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 12, chance: 0.4 },
    { monster: FanDancer.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: FleshGolem.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: FleshGolem.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 1 },
    { monster: FleshGolem.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },

    { monster: FrostGiant.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 1},
    { monster: FrostGiant.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: FrostGiant.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 1 },
    { monster: FrostGiant.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: FrostGiant.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: FrostGiant.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 4 },
    { monster: FrostGiant.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: ChaosDragoon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: ChaosDragoon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 2 },

    { monster: FrostOoze.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 2},
    { monster: FrostOoze.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 27, chance: 0.4, qty: 2 },

    { monster: IceFiend.id, category: ItemCategoryEnum.GEM.id, qty: 2 , level: 2},
    { monster: IceFiend.id, category: ItemCategoryEnum.POTION.id, qty: 4, level: 2 },
    { monster: IceFiend.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: IceFiend.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: IceFiend.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 1 },
    { monster: IceFiend.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: IceFiend.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: IceFiend.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: IceFiend.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.7 },

    { monster: Korpre.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 27, chance: 0.3 },

    { monster: MinaxRider.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: MinaxRider.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
//    { monster: MinaxRider.id, category: ItemCategoryEnum.GEM.id1, itemId: 1, qty: '50-80' },

    { monster: MinaxMariner.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: MinaxMariner.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
//    { monster: MinaxMariner.id, category: ItemCategoryEnum.GEM.id1, itemId: 1, qty: '50-80' },

    { monster: MinaxMarineOfficer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: MinaxMarineOfficer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
//    { monster: MinaxMarineOfficer.id, category: ItemCategoryEnum.GEM.id1, itemId: 1, qty: '50-80' },

    { monster: MindFlayer.id, category: ItemCategoryEnum.GEM.id, qty: 2 , level: 1},
    { monster: MindFlayer.id, category: ItemCategoryEnum.POTION.id, qty: 3, level: 1 },
    { monster: MindFlayer.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: MindFlayer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: MindFlayer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: MindFlayer.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 4 },
    { monster: MindFlayer.id, category: ItemCategoryEnum.MAP.id, level: 2, chance: 0.75 },
    { monster: MindFlayer.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.6 },

    { monster: MoonWolf.id, category: ItemCategoryEnum.POTION.id, qty: 4, level: 2 },
    { monster: MoonWolf.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: MoonWolf.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 1 },
    { monster: MoonWolf.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: MoonWolf.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: MoonWolf.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 22, chance: 0.4 },
    { monster: MoonWolf.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.4 },

    { monster: AgateElemental.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 3},
    { monster: AgateElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: AgateElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: AgateElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: AgateElemental.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 5, chance: 0.3 },

    { monster: ShadowElemental.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 2},
    { monster: ShadowElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: ShadowElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: ShadowElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: ShadowElemental.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 5, chance: 0.3 },

    { monster: VioliteElemental.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 1},
    { monster: VioliteElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: VioliteElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: VioliteElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: VioliteElemental.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 5, chance: 0.3 },

    { monster: IceElemental.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 3},
    { monster: IceElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: IceElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: IceElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: IceElemental.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 5, chance: 0.3 },

    { monster: GoldElemental.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 2},
    { monster: GoldElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: GoldElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: GoldElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: GoldElemental.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 5, chance: 0.3 },

    { monster: VeriteElemental.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 1},
    { monster: VeriteElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: VeriteElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: VeriteElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: VeriteElemental.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 5, chance: 0.3 },

    { monster: ValoriteElemental.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 3},
    { monster: ValoriteElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: ValoriteElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: ValoriteElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: ValoriteElemental.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 5, chance: 0.3 },

    { monster: WhiteWyrm.id, category: ItemCategoryEnum.GEM.id, qty: 3, level: 2},
    { monster: WhiteWyrm.id, category: ItemCategoryEnum.POTION.id, qty: 4, level: 2 },
    { monster: WhiteWyrm.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: WhiteWyrm.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: WhiteWyrm.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 3 },
    { monster: WhiteWyrm.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 4 },
    { monster: WhiteWyrm.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: Quickling.id, category: ItemCategoryEnum.GEM.id, qty: 3 , level: 1},
    { monster: Quickling.id, category: ItemCategoryEnum.POTION.id, qty: 4, level: 1 },
    { monster: Quickling.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Quickling.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: Quickling.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 3 },
    { monster: Quickling.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 3, chance: 0.3 },

    { monster: Raptor.id, category: ItemCategoryEnum.GEM.id, qty: 3 , level: 1},
    { monster: Raptor.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Raptor.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: Raptor.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: Raptor.id, category: ItemCategoryEnum.MAP.id, level: 5, chance: 0.75 },
    { monster: Raptor.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 21, chance: 0.4 },

    { monster: Ronin.id, category: ItemCategoryEnum.GEM.id, qty: 3 , level: 1},
    { monster: Ronin.id, category: ItemCategoryEnum.POTION.id, qty: 4, level: 3 },
    { monster: Ronin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Ronin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: Ronin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 3 },
    { monster: Ronin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },
    { monster: Ronin.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 13, chance: 0.4 },
    { monster: Ronin.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: SabretoothTiger.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: SabretoothTiger.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: SabretoothTiger.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: SabretoothTiger.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 4 },

    { monster: ShadowlordAssassin.id, category: ItemCategoryEnum.POTION.id, qty: 4, level: 3 },
    { monster: ShadowlordAssassin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: ShadowlordAssassin.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
//    { monster: ShadowlordAssassin.id, category: ItemCategoryEnum.GEM.id1, itemId: 1, qty: '40-70' },

    { monster: ShadowlordBomber.id, category: ItemCategoryEnum.POTION.id, qty: 4, level: 3 },
    { monster: ShadowlordBomber.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: ShadowlordBomber.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
//    { monster: ShadowlordBomber.id, category: ItemCategoryEnum.GEM.id1, itemId: 1, qty: '40-70' },

    { monster: SilverSerpent.id, category: ItemCategoryEnum.GEM.id, qty: 3 , level: 2},
    { monster: SilverSerpent.id, category: ItemCategoryEnum.POTION.id, qty: 1, level: 1 },
    { monster: SilverSerpent.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: SilverSerpent.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: SilverSerpent.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 24, chance: 0.3 },
    { monster: SilverSerpent.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: SnowElemental.id, category: ItemCategoryEnum.GEM.id, qty: 8 , level: 1},
    { monster: SnowElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: SnowElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: SnowElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: SnowElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 4 },
    { monster: SnowElemental.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: TerathanQueen.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 1},
    { monster: TerathanQueen.id, category: ItemCategoryEnum.POTION.id, qty: 8, level: 3 },
    { monster: TerathanQueen.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: TerathanQueen.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 3 },
    { monster: TerathanQueen.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 6, level: 4 },
    { monster: TerathanQueen.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 14, chance: 0.5, qty: 3},
    { monster: TerathanQueen.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: TerathanWarrior.id, category: ItemCategoryEnum.GEM.id, qty: 4 , level: 2},
    { monster: TerathanWarrior.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: TerathanWarrior.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: TerathanWarrior.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 3 },
    { monster: TerathanWarrior.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 6, level: 4 },
    { monster: TerathanWarrior.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 14, chance: 0.4},

    { monster: Wraith.id, category: ItemCategoryEnum.GEM.id, qty: 2 , level: 1},
    { monster: Wraith.id, category: ItemCategoryEnum.POTION.id, qty: 2, level: 1 },
    { monster: Wraith.id, category: ItemCategoryEnum.NEC_REG.id, qty: 3 },
    { monster: Wraith.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Wraith.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },

    { monster: VoidElemental.id, category: ItemCategoryEnum.GEM.id, qty: 4 , level: 1},
    { monster: VoidElemental.id, category: ItemCategoryEnum.POTION.id, qty: 3, level: 3 },
    { monster: VoidElemental.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: VoidElemental.id, category: ItemCategoryEnum.NEC_REG.id, qty: 4 },
    { monster: VoidElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 0 },
    { monster: VoidElemental.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 8, level: 4 },
    { monster: VoidElemental.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 27, chance: 0.5, qty: 3 },

    { monster: DeepSeaSerpent.id, category: ItemCategoryEnum.MAG_REG.id, qty: 8 },
    { monster: DeepSeaSerpent.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: DeepSeaSerpent.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 2 },
    { monster: DeepSeaSerpent.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 3 },
    { monster: DeepSeaSerpent.id, category: ItemCategoryEnum.MAP.id, level: 3, chance: 0.5 },

    { monster: FairyDragon.id, category: ItemCategoryEnum.GEM.id, qty: 8 , level: 2},
    { monster: FairyDragon.id, category: ItemCategoryEnum.MAG_REG.id, qty: 4 },
    { monster: FairyDragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: FairyDragon.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 4, level: 1 },
    { monster: FairyDragon.id, category: ItemCategoryEnum.ENCH_REG.id, itemId: 16, chance: 0.3 },
    { monster: FairyDragon.id, category: ItemCategoryEnum.MAP.id, level: 4, chance: 0.5 },
    { monster: FairyDragon.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: Kraken.id, category: ItemCategoryEnum.GEM.id, qty: 10 , level: 1},
    { monster: Kraken.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: Kraken.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },
    { monster: Kraken.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 3, level: 2 },
    { monster: Kraken.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 3 },
    { monster: Kraken.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 4 },
    { monster: Kraken.id, category: ItemCategoryEnum.MAP.id, level: 6, chance: 0.3 },
    { monster: Kraken.id, category: ItemCategoryEnum.WONDROUS.id, chance: 0.5 },

    { monster: SeaSerpent.id, category: ItemCategoryEnum.GEM.id, qty: 4 , level: 1},
    { monster: SeaSerpent.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 0 },
    { monster: SeaSerpent.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 2, level: 1 },
    { monster: SeaSerpent.id, category: ItemCategoryEnum.MAG_ITEM.id, qty: 1, level: 2 },
    { monster: SeaSerpent.id, category: ItemCategoryEnum.MAP.id, level: 4, chance: 0.5 },
  ]);

  /**
   * Monster Actions
   */
  await MonsterAction.createEach([
    { value: 0, description: '', weight: 2, monster: AcidElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: AcidElemental.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: AcidElemental.id, action: aDeadlyPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: AcidElemental.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: AcidElemental.id, action: aManaDrain.id },
    { value: 0, description: '', weight: 1, monster: AcidElemental.id, action: aMassCurse.id },

    { value: 0, description: '', weight: 2, monster: AirElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: AirElemental.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: AirElemental.id, action: aHarm.id },
    { value: 0, description: '', weight: 2, monster: AirElemental.id, action: aFeeblemind.id },
    { value: 0, description: '', weight: 1, monster: AirElemental.id, action: aManaDrain.id },
    { value: 0, description: '', weight: 1, monster: AirElemental.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: AirElemental.id, action: aMassCurse.id },

    { value: 0, description: '', weight: 2, monster: AncientWyrm.id, action: aFly.id },
    { value: 0, description: '', weight: 1, monster: AncientWyrm.id, action: aLethalPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: AncientWyrm.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 2, monster: AncientWyrm.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: AncientWyrm.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: AncientWyrm.id, action: aMeleeTailswipe.id },
    { value: 0, description: '', weight: 1, monster: AncientWyrm.id, action: aFlamestrike.id },
    { value: 0, description: '', weight: 1, monster: AncientWyrm.id, action: aBreathWeapon.id },

    { value: 0, description: '', weight: 3, monster: Balron.id, action: aMove.id },
    { value: 0, description: '', weight: 1, monster: Balron.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 2, monster: Balron.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: Balron.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: Balron.id, action: aMeleeSmash.id },
    { value: 0, description: '', weight: 1, monster: Balron.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: Balron.id, action: aFireball.id },
    { value: 0, description: '', weight: 1, monster: Balron.id, action: aExplosion.id },
    { value: 0, description: '', weight: 1, monster: Balron.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: Balron.id, action: aFlamestrike.id },

    { value: 0, description: '', weight: 3, monster: BoneKnight.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: BoneKnight.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: BloodElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: BloodElemental.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: BloodElemental.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: BloodElemental.id, action: aDeadlyPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: BloodElemental.id, action: aStaminaDrain.id },
    { value: 0, description: '', weight: 1, monster: BloodElemental.id, action: aBloodOath.id },

    { value: 0, description: '', weight: 2, monster: Buccaneer.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: Buccaneer.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Buccaneer.id, action: aMeleeDisarm.id },
    { value: 0, description: '', weight: 1, monster: Buccaneer.id, action: aCongflagPot.id },
    { value: 0, description: '', weight: 2, monster: Buccaneer.id, action: aGreaterExplosionPot.id },

    { value: 0, description: '', weight: 2, monster: BuccaneerLord.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: BuccaneerLord.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: BuccaneerLord.id, action: aMeleeDeadlyPoison.id },
    { value: 0, description: '', weight: 1, monster: BuccaneerLord.id, action: aMeleeDisarm.id },
    { value: 0, description: '', weight: 1, monster: BuccaneerLord.id, action: aCongflagPot.id },
    { value: 0, description: '', weight: 2, monster: BuccaneerLord.id, action: aGreaterExplosionPot.id },

    { value: 0, description: '', weight: 2, monster: Deamon.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: Deamon.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: Deamon.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 2, monster: Deamon.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: Deamon.id, action: aCurse.id },
    { value: 0, description: '', weight: 2, monster: Deamon.id, action: aExplosion.id },
    { value: 0, description: '', weight: 1, monster: Deamon.id, action: aHarm.id },
    { value: 0, description: '', weight: 1, monster: Deamon.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: Deamon.id, action: aFireball.id },
    { value: 0, description: '', weight: 1, monster: Deamon.id, action: aFlamestrike.id },

    { value: 4, description: 'Tiles', weight: 4, monster: DireWolf.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: DireWolf.id, action: amelee.id },

    { value: 4, description: 'Tiles', weight: 2, monster: DisplacerBeast.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: DisplacerBeast.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: DisplacerBeast.id, action: aMeleeDisarm.id },
    { value: 0, description: '', weight: 2, monster: DisplacerBeast.id, action: aMirrorImage.id },

    { value: 4, description: 'Tiles', weight: 3, monster: Dragon.id, action: aFly.id },
    { value: 0, description: '', weight: 3, monster: Dragon.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Dragon.id, action: aFireball.id },
    { value: 0, description: '', weight: 1, monster: Dragon.id, action: aMeleeTailswipe.id },
    { value: 0, description: '', weight: 1, monster: Dragon.id, action: aBreathWeapon.id },

    { value: 4, description: 'Tiles', weight: 2, monster: SkeletalDragon.id, action: aMove.id },
    { value: 0, description: '', weight: 1, monster: SkeletalDragon.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: SkeletalDragon.id, action: aFlamestrike.id },
    { value: 0, description: '', weight: 1, monster: SkeletalDragon.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 2, monster: SkeletalDragon.id, action: aBreathWeapon.id },
    { value: 0, description: '', weight: 1, monster: SkeletalDragon.id, action: aMeleeTailswipe.id },
    { value: 0, description: '', weight: 1, monster: SkeletalDragon.id, action: aBloodOath.id },
    { value: 0, description: '', weight: 1, monster: SkeletalDragon.id, action: aWither.id },

    { value: 3, description: 'Tiles', weight: 2, monster: DreadSpider.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: DreadSpider.id, action: aCurse.id },
    { value: 0, description: '', weight: 4, monster: DreadSpider.id, action: aMeleeDeadlyPoison.id },
    { value: 0, description: '', weight: 1, monster: DreadSpider.id, action: aMeleeLethalPoison.id },
    { value: 0, description: '', weight: 2, monster: DreadSpider.id, action: aMindBlast.id },

    { value: 0, description: '', weight: 2, monster: EarthElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 8, monster: EarthElemental.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: Ettin.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: Ettin.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: EvilMage.id, action: aMove.id },
    { value: 0, description: '', weight: 1, monster: EvilMage.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: EvilMage.id, action: aMagicArrow.id },
    { value: 0, description: '', weight: 1, monster: EvilMage.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: EvilMage.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: EvilMage.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: EvilMage.id, action: aGreaterHealSpell.id },
    { value: 0, description: '', weight: 1, monster: EvilMage.id, action: aSummonEarthElemental.id },

    { value: 4, description: 'Tiles', weight: 2, monster: FireBeetle.id, action: aMove.id },
    { value: 0, description: '', weight: 8, monster: FireBeetle.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: FireElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: FireElemental.id, action: aFireball.id },
    { value: 0, description: '', weight: 2, monster: FireElemental.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: FireElemental.id, action: aExplosion.id },
    { value: 0, description: '', weight: 1, monster: FireElemental.id, action: aCorpseSkin.id },

    { value: 4, description: 'Tiles', weight: 2, monster: GiantBeetle.id, action: aMove.id },
    { value: 0, description: '', weight: 8, monster: GiantBeetle.id, action: amelee.id },

    { value: 3, description: 'Tiles', weight: 3, monster: GiantSpider.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: GiantSpider.id, action: amelee.id },
    { value: 0, description: '', weight: 4, monster: GiantSpider.id, action: aMeleePoison.id },

    { value: 3, description: 'Tiles', weight: 3, monster: Gargoyle.id, action: aFly.id },
    { value: 0, description: '', weight: 2, monster: Gargoyle.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Gargoyle.id, action: aMagicArrow.id },
    { value: 0, description: '', weight: 2, monster: Gargoyle.id, action: aLightning.id },
    { value: 0, description: '', weight: 2, monster: Gargoyle.id, action: aGreaterHealSpell.id },

    { value: 0, description: 'Tiles', weight: 3, monster: Gazer.id, action: aFly.id },
    { value: 0, description: '', weight: 2, monster: Gazer.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: Gazer.id, action: aMagicArrow.id },
    { value: 0, description: '', weight: 2, monster: Gazer.id, action: aLightning.id },
    { value: 0, description: '', weight: 2, monster: Gazer.id, action: aGreaterHealSpell.id },
    { value: 0, description: '', weight: 1, monster: Gazer.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: Gazer.id, action: aPoisonSpell.id },

    { value: 0, description: 'Tiles', weight: 2, monster: ElderGazer.id, action: aFly.id },
    { value: 0, description: '', weight: 1, monster: ElderGazer.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: ElderGazer.id, action: aMagicArrow.id },
    { value: 0, description: '', weight: 1, monster: ElderGazer.id, action: aFlamestrike.id },
    { value: 0, description: '', weight: 1, monster: ElderGazer.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 2, monster: ElderGazer.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: ElderGazer.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: ElderGazer.id, action: aLightning.id },

    { value: 4, description: 'Tiles', weight: 4, monster: GreatHart.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: GreatHart.id, action: amelee.id },

    { value: 4, description: 'Tiles', weight: 2, monster: GreaterDragon.id, action: aFly.id },
    { value: 0, description: '', weight: 2, monster: GreaterDragon.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: GreaterDragon.id, action: aFireball.id },
    { value: 0, description: '', weight: 1, monster: GreaterDragon.id, action: aMeleeTailswipe.id },
    { value: 0, description: '', weight: 1, monster: GreaterDragon.id, action: aBreathWeapon.id },
    { value: 0, description: '', weight: 1, monster: GreaterDragon.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: GreaterDragon.id, action: aFlamestrike.id },

    { value: 4, description: 'Tiles', weight: 4, monster: Griffin.id, action: aFly.id },
    { value: 0, description: '', weight: 4, monster: Griffin.id, action: aMeleeDismount.id },
    { value: 0, description: '', weight: 2, monster: Griffin.id, action: aMeleeArmorIgnore.id },

    { value: 4, description: 'Tiles', weight: 2, monster: HellHound.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: HellHound.id, action: amelee.id },
    { value: 4, description: 'Tiles', weight: 4, monster: HellHound.id, action: aBreathWeapon.id },

    { value: 4, description: 'Tiles', weight: 4, monster: Horse.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: Horse.id, action: amelee.id },

    { value: 3, description: 'Tiles', weight: 2, monster: Imp.id, action: aFly.id },
    { value: 0, description: '', weight: 2, monster: Imp.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Imp.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: Imp.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: Imp.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: Imp.id, action: aHungerPains.id },

    { value: 0, description: '', weight: 3, monster: Lich.id, action: aMove.id },
    { value: 0, description: '', weight: 1, monster: Lich.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: Lich.id, action: aHarm.id },
    { value: 0, description: '', weight: 1, monster: Lich.id, action: aDeadlyPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: Lich.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: Lich.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 1, monster: Lich.id, action: aExplosion.id },
    { value: 0, description: '', weight: 1, monster: Lich.id, action: aFlamestrike.id },

    { value: 0, description: '', weight: 2, monster: LichLord.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: LichLord.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: LichLord.id, action: aHarm.id },
    { value: 0, description: '', weight: 1, monster: LichLord.id, action: aDeadlyPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: LichLord.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: LichLord.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 1, monster: LichLord.id, action: aExplosion.id },
    { value: 0, description: '', weight: 1, monster: LichLord.id, action: aFlamestrike.id },

    { value: 4, description: 'Tiles', weight: 3, monster: Medusa.id, action: aMove.id },
    { value: 0, description: '', weight: 1, monster: Medusa.id, action: aArcheryDoubleShot.id },
    { value: 0, description: '', weight: 2, monster: Medusa.id, action: aArcheryLethal.id },
    { value: 0, description: '', weight: 1, monster: Medusa.id, action: aArcheryParalyze.id },
    { value: 0, description: '', weight: 1, monster: Medusa.id, action: aArcheryCorrupt.id },
    { value: 0, description: '', weight: 1, monster: Medusa.id, action: aArcheryMortalStrike.id },
    { value: 0, description: '', weight: 1, monster: Medusa.id, action: aArchery.id },

    { value: 0, description: '', weight: 4, monster: Mummy.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: Mummy.id, action: amelee.id },

    { value: 4, description: 'Tiles', weight: 2, monster: Nightmare.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: Nightmare.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Nightmare.id, action: aFireball.id },
    { value: 0, description: '', weight: 2, monster: Nightmare.id, action: aBreathWeapon.id },
    { value: 0, description: '', weight: 1, monster: Nightmare.id, action: aGreaterPoisonSpell.id },

    { value: 3, description: 'Tiles', weight: 5, monster: Ogre.id, action: aMove.id },
    { value: 0, description: '', weight: 5, monster: Ogre.id, action: amelee.id },

    { value: 3, description: 'Tiles', weight: 3, monster: OgreLord.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: OgreLord.id, action: amelee.id },

    { value: 0, description: '', weight: 4, monster: Orc.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: Orc.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: Orc.id, action: aMeleeBleed.id },

    { value: 4, description: 'Tiles', weight: 5, monster: PackHorse.id, action: aMove.id },
    { value: 0, description: '', weight: 5, monster: PackHorse.id, action: amelee.id },

    { value: 5, description: 'Tiles', weight: 2, monster: Pixie.id, action: aFly.id },
    { value: 0, description: '', weight: 1, monster: Pixie.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: Pixie.id, action: aHarm.id },
    { value: 0, description: '', weight: 1, monster: Pixie.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: Pixie.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: Pixie.id, action: aFireball.id },
    { value: 0, description: '', weight: 1, monster: Pixie.id, action: aExplosion.id },
    { value: 0, description: '', weight: 1, monster: Pixie.id, action: aMassCurse.id },
    { value: 0, description: '', weight: 1, monster: Pixie.id, action: aPixieDust.id },

    { value: 0, description: 'Tiles', weight: 4, monster: GiantRat.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: GiantRat.id, action: amelee.id },

    { value: 0, description: 'Tiles', weight: 5, monster: Ratman.id, action: aMove.id },
    { value: 0, description: '', weight: 5, monster: Ratman.id, action: amelee.id },

    { value: 0, description: 'Tiles', weight: 4, monster: RatmanArcher.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: RatmanArcher.id, action: aArchery.id },

    { value: 0, description: 'Tiles', weight: 3, monster: RatmanMage.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: RatmanMage.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: RatmanMage.id, action: aFireball.id },
    { value: 0, description: '', weight: 1, monster: RatmanMage.id, action: aMagicArrow.id },
    { value: 0, description: '', weight: 1, monster: RatmanMage.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: RatmanMage.id, action: aLightning.id },

    { value: 4, description: 'Tiles', weight: 3, monster: Reptalon.id, action: aFly.id },
    { value: 0, description: '', weight: 3, monster: Reptalon.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Reptalon.id, action: aBreathWeapon.id },
    { value: 0, description: '', weight: 2, monster: Reptalon.id, action: aParalyzeBlow.id },

    { value: 3, description: 'Tiles', weight: 3, monster: RottingCorpse.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: RottingCorpse.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: RottingCorpse.id, action: aMeleeLethalPoison.id },

    { value: 5, description: 'Tiles', weight: 2, monster: RuneBeetle.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: RuneBeetle.id, action: aMeleeBleed.id },
    { value: 0, description: '', weight: 2, monster: RuneBeetle.id, action: aMeleeLethalPoison.id },
    { value: 0, description: '', weight: 2, monster: RuneBeetle.id, action: aMeleeCorruption.id },
    { value: 0, description: '', weight: 1, monster: RuneBeetle.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 1, monster: RuneBeetle.id, action: aMindBlast.id },

    { value: 0, description: 'Tiles', weight: 4, monster: GiantSerpent.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: GiantSerpent.id, action: aMeleeGreaterPoison.id },
    { value: 0, description: '', weight: 3, monster: GiantSerpent.id, action: aMeleeNerve.id },

    { value: 0, description: '', weight: 4, monster: Sheep.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: Sheep.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: Siren.id, action: aSwim.id },
    { value: 0, description: '', weight: 5, monster: Siren.id, action: aArchery.id },
    { value: 0, description: '', weight: 2, monster: Siren.id, action: aSirenSong.id },

    { value: 0, description: '', weight: 4, monster: Skeleton.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: Skeleton.id, action: amelee.id },

    { value: 0, description: '', weight: 2, monster: Succubus.id, action: aFly.id },
    { value: 0, description: '', weight: 2, monster: Succubus.id, action: aMeleeCorrupt.id },
    { value: 0, description: '', weight: 2, monster: Succubus.id, action: aDeadlyPoisonSpell.id },
    { value: 0, description: '', weight: 2, monster: Succubus.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: Succubus.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: Succubus.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: Succubus.id, action: aExplosion.id },
    { value: 0, description: '', weight: 1, monster: Succubus.id, action: aHarm.id },
    { value: 0, description: '', weight: 1, monster: Succubus.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: Succubus.id, action: aFlamestrike.id },

    { value: 5, description: 'Tiles', weight: 2, monster: SumAirElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: SumAirElemental.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: SumAirElemental.id, action: aHarm.id },
    { value: 0, description: '', weight: 1, monster: SumAirElemental.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: SumAirElemental.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: SumAirElemental.id, action: aManaDrain.id },
    { value: 0, description: '', weight: 1, monster: SumAirElemental.id, action: aMassCurse.id },
    { value: 0, description: '', weight: 1, monster: SumAirElemental.id, action: aFeeblemind.id },

    { value: 0, description: '', weight: 2, monster: SumEarthElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 8, monster: SumEarthElemental.id, action: amelee.id },

    { value: 0, description: '', weight: 1, monster: SumBladeSpirit.id, action: amelee.id },
    { value: 8, description: '', weight: 0, monster: SumBladeSpirit.id, action: aMove.id },

    { value: 0, description: '', weight: 1, monster: SumEnergyVortex.id, action: amelee.id },
    { value: 6, description: '', weight: 0, monster: SumEnergyVortex.id, action: aMove.id },

    { value: 0, description: '', weight: 2, monster: SumDeamon.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: SumDeamon.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: SumDeamon.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 2, monster: SumDeamon.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: SumDeamon.id, action: aCurse.id },
    { value: 0, description: '', weight: 2, monster: SumDeamon.id, action: aExplosion.id },
    { value: 0, description: '', weight: 1, monster: SumDeamon.id, action: aHarm.id },
    { value: 0, description: '', weight: 1, monster: SumDeamon.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: SumDeamon.id, action: aFireball.id },
    { value: 0, description: '', weight: 1, monster: SumDeamon.id, action: aFlamestrike.id },

    { value: 0, description: '', weight: 1, monster: SumRevenant.id, action: amelee.id },
    { value: 8, description: '', weight: 0, monster: SumRevenant.id, action: aMove.id },

    { value: 0, description: '', weight: 2, monster: SumWaterElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: SumWaterElemental.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: SumWaterElemental.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: SumWaterElemental.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: SumWaterElemental.id, action: aFeeblemind.id },
    { value: 0, description: '', weight: 1, monster: SumWaterElemental.id, action: aManaDrain.id },

    { value: 3, description: '', weight: 3, monster: Titan.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: Titan.id, action: aMeleeGrab.id },
    { value: 0, description: '', weight: 1, monster: Titan.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 2, monster: Titan.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: Titan.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: Titan.id, action: aExplosion.id },
    { value: 0, description: '', weight: 1, monster: Titan.id, action: aHarm.id },
    { value: 0, description: '', weight: 1, monster: Titan.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: Titan.id, action: aFireball.id },
    { value: 0, description: '', weight: 1, monster: Titan.id, action: aFlamestrike.id },

    { value: 4, description: 'Tiles', weight: 4, monster: Unicorn.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: Unicorn.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: Unicorn.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: Unicorn.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: Unicorn.id, action: aMindBlast.id },

    { value: 0, description: '', weight: 3, monster: WanderingHealer.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: WanderingHealer.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: WanderingHealer.id, action: aFireball.id },
    { value: 0, description: '', weight: 1, monster: WanderingHealer.id, action: aHarm.id },
    { value: 0, description: '', weight: 1, monster: WanderingHealer.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: WanderingHealer.id, action: aManaDrain.id },
    { value: 0, description: '', weight: 1, monster: WanderingHealer.id, action: aGreaterHealSpell.id },
    { value: 0, description: '', weight: 1, monster: WanderingHealer.id, action: aEnergyBolt.id },

    { value: 4, description: 'Tiles', weight: 4, monster: WarCat.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: WarCat.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: WarCat.id, action: aMeleeBleed.id },

    { value: 0, description: '', weight: 2, monster: WaterElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: WaterElemental.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: WaterElemental.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: WaterElemental.id, action: aParalyzeSpell.id },
    { value: 0, description: '', weight: 1, monster: WaterElemental.id, action: aFeeblemind.id },
    { value: 0, description: '', weight: 1, monster: WaterElemental.id, action: aManaDrain.id },

    { value: 4, description: 'Tiles', weight: 4, monster: Wolf.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: Wolf.id, action: amelee.id },

    { value: 0, description: '', weight: 4, monster: Wyvern.id, action: aFly.id },
    { value: 0, description: '', weight: 3, monster: Wyvern.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: Wyvern.id, action: aMeleeDeadlyPoison.id },

    { value: 1, description: '', weight: 5, monster: Zombie.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: Zombie.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: Zombie.id, action: aShriek.id },

    { value: 3, description: '', weight: 3, monster: AbomidableHulk.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: AbomidableHulk.id, action: amelee.id },
    { value: 0, description: 'Physical Damage', weight: 3, monster: AbomidableHulk.id, action: aArchery.id },

    { value: 4, description: '', weight: 3, monster: BakeKitsune.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: BakeKitsune.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: BakeKitsune.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: BakeKitsune.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 1, monster: BakeKitsune.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: BakeKitsune.id, action: aSpellReflect.id },

    { value: 4, description: '', weight: 3, monster: TameBakeKitsune.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: TameBakeKitsune.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: TameBakeKitsune.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: TameBakeKitsune.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 1, monster: TameBakeKitsune.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: TameBakeKitsune.id, action: aSpellReflect.id },

    { value: 4, description: '', weight: 3, monster: TerathanAvenger.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: TerathanAvenger.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: TerathanAvenger.id, action: aMeleeDeadlyPoison.id },
    { value: 0, description: '', weight: 1, monster: TerathanAvenger.id, action: aFlamestrike.id },
    { value: 0, description: '', weight: 1, monster: TerathanAvenger.id, action: aLightning.id },

    { value: 0, description: '', weight: 4, monster: Bogling.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: Bogling.id, action: amelee.id },

    { value: 0, description: '', weight: 2, monster: BoneMagi.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: BoneMagi.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: BoneMagi.id, action: aMagicArrow.id },
    { value: 0, description: '', weight: 1, monster: BoneMagi.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 2, monster: BoneMagi.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: BoneMagi.id, action: aMindBlast.id },

    { value: 0, description: '', weight: 3, monster: BogThing.id, action: aMove.id },
    { value: 0, description: '', weight: 5, monster: BogThing.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: BogThing.id, action: aMeleeSeed.id },
    { value: 0, description: '', weight: 1, monster: BogThing.id, action: aSumBogling.id },

    { value: 4, description: '', weight: 4, monster: Boura.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: Boura.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Boura.id, action: aMeleeNerve.id },

    { value: 0, description: '', weight: 3, monster: BritishKnight.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: BritishKnight.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: BritishKnight.id, action: aMeleeMortal.id },
    { value: 0, description: '', weight: 2, monster: BritishKnight.id, action: aParalyzeBlow.id },

    { value: 0, description: '', weight: 3, monster: BritishArcher.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: BritishArcher.id, action: aArchery.id },
    { value: 0, description: '', weight: 2, monster: BritishArcher.id, action: aArcheryParalyze.id },
    { value: 0, description: '', weight: 2, monster: BritishArcher.id, action: aArcheryMortalStrike.id },

    { value: 0, description: '', weight: 3, monster: Drake.id, action: aMove.id },
    { value: 0, description: '', weight: 5, monster: Drake.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Drake.id, action: aBreathWeapon.id },

    { value: 5, description: '', weight: 2, monster: EliteNinja.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: EliteNinja.id, action: aMeleeMortal.id },
    { value: 0, description: '', weight: 2, monster: EliteNinja.id, action: aHideStealth.id },
    { value: 0, description: '', weight: 1, monster: EliteNinja.id, action: aMirrorImage.id },
    { value: 0, description: '', weight: 1, monster: EliteNinja.id, action: aDeathStrike.id },
    { value: 0, description: '', weight: 2, monster: EliteNinja.id, action: aShadowStrike.id },

    { value: 0, description: '', weight: 2, monster: FanDancer.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: FanDancer.id, action: aMeleeMortal.id },
    { value: 0, description: '', weight: 2, monster: FanDancer.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: FanDancer.id, action: aDeathStrike.id },
    { value: 0, description: '', weight: 1, monster: FanDancer.id, action: aConcussionBlow.id },
    { value: 0, description: '', weight: 2, monster: FanDancer.id, action: aWhirlwindStrike.id },

    { value: 0, description: '', weight: 4, monster: FleshGolem.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: FleshGolem.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: FleshGolem.id, action: aMeleeBleed.id },

    { value: 3, description: '', weight: 4, monster: FrostGiant.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: FrostGiant.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: FrostGiant.id, action: aMeleeFreeze.id },

    { value: 0, description: '', weight: 3, monster: ChaosDragoon.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: ChaosDragoon.id, action: aCharge.id },
    { value: 0, description: '', weight: 2, monster: ChaosDragoon.id, action: aChargeConcussion.id },
    { value: 0, description: '', weight: 2, monster: ChaosDragoon.id, action: aChargeDismount.id },

    { value: 5, description: '', weight: 3, monster: FrostOoze.id, action: aMove.id },
    { value: 0, description: '', weight: 5, monster: FrostOoze.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: FrostOoze.id, action: aMeleeDoubleStrike.id },

    { value: 4, description: 'Tiles', weight: 2, monster: Hellsteed.id, action: aMove.id },
    { value: 0, description: '', weight: 5, monster: Hellsteed.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: Hellsteed.id, action: aBreathWeapon.id },

    { value: 4, description: '', weight: 3, monster: IceFiend.id, action: aFly.id },
    { value: 0, description: '', weight: 4, monster: IceFiend.id, action: aMeleeColdAura.id },
    { value: 0, description: '', weight: 1, monster: IceFiend.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: IceFiend.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: IceFiend.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: IceFiend.id, action: aCurse.id },

    { value: 4, description: '', weight: 4, monster: Korpre.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: Korpre.id, action: amelee.id },

    { value: 4, description: '', weight: 3, monster: MinaxRider.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: MinaxRider.id, action: aMeleeDisarm.id },
    { value: 0, description: '', weight: 2, monster: MinaxRider.id, action: aConcussionBlow.id },
    { value: 0, description: '', weight: 2, monster: MinaxRider.id, action: amelee.id },

    { value: 5, description: '', weight: 3, monster: MinaxMariner.id, action: aSwim.id },
    { value: 0, description: '', weight: 2, monster: MinaxMariner.id, action: aMeleeDisarm.id },
    { value: 0, description: '', weight: 3, monster: MinaxMariner.id, action: aConcussionBlow.id },
    { value: 0, description: '', weight: 2, monster: MinaxMariner.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: MinaxMarineOfficer.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: MinaxMarineOfficer.id, action: aMeleeCrushingBlow.id },
    { value: 0, description: '', weight: 2, monster: MinaxMarineOfficer.id, action: aWhirlwindStrike.id },
    { value: 0, description: '', weight: 1, monster: MinaxMarineOfficer.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: MinaxMarineOfficer.id, action: aCurse.id },

    { value: 0, description: '', weight: 2, monster: MindFlayer.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: MindFlayer.id, action: aCharm.id },
    { value: 0, description: '', weight: 2, monster: MindFlayer.id, action: aLightning.id },
    { value: 0, description: '', weight: 1, monster: MindFlayer.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: MindFlayer.id, action: aEnergyBolt.id },

    { value: 0, description: '', weight: 4, monster: MinionHordeMinion.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: MinionHordeMinion.id, action: amelee.id },

    { value: 0, description: '', weight: 4, monster: MinionShadowWisp.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: MinionShadowWisp.id, action: amelee.id },

    { value: 0, description: '', weight: 5, monster: MinionVampireBat.id, action: aFly.id },
    { value: 0, description: '', weight: 5, monster: MinionVampireBat.id, action: amelee.id },

    { value: 4, description: '', weight: 4, monster: MinionDarkWolf.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: MinionDarkWolf.id, action: amelee.id },

    { value: 4, description: '', weight: 4, monster: MoonWolf.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: MoonWolf.id, action: aMeleeDisarm.id },
    { value: 0, description: '', weight: 2, monster: MoonWolf.id, action: amelee.id },
    { value: 0, description: '', weight: 1, monster: MoonWolf.id, action: aBloodOath.id },

    { value: 1, description: '', weight: 4, monster: MoundofMaggots.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: MoundofMaggots.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: AgateElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: AgateElemental.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: ShadowElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: ShadowElemental.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: VioliteElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: VioliteElemental.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: IceElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: IceElemental.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: GoldElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: GoldElemental.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: VeriteElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: VeriteElemental.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: ValoriteElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 7, monster: ValoriteElemental.id, action: amelee.id },

    { value: 4, description: '', weight: 2, monster: WhiteWyrm.id, action: aFly.id },
    { value: 0, description: '', weight: 2, monster: WhiteWyrm.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: WhiteWyrm.id, action: aLightning.id },
    { value: 0, description: '', weight: 2, monster: WhiteWyrm.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 2, monster: WhiteWyrm.id, action: aSiphonSoul.id },

    { value: 0, description: '', weight: 4, monster: PatchworkSkeleton.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: PatchworkSkeleton.id, action: aMeleeDismount.id },

    { value: 6, description: '', weight: 4, monster: Quickling.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: Quickling.id, action: aMeleeDisarm.id },
    { value: 0, description: '', weight: 2, monster: Quickling.id, action: aMeleeDismount.id },
    { value: 0, description: '', weight: 2, monster: Quickling.id, action: aMeleeSpoil.id },

    { value: 4, description: '', weight: 3, monster: Raptor.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: Raptor.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: Raptor.id, action: aMeleeBleed.id },
    { value: 0, description: '', weight: 1, monster: Raptor.id, action: aShriek.id },

    { value: 3, description: '', weight: 3, monster: Ronin.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: Ronin.id, action: aMeleeDisarm.id },
    { value: 0, description: '', weight: 2, monster: Ronin.id, action: aMeleeMomentum.id },
    { value: 0, description: '', weight: 1, monster: Ronin.id, action: aGreaterHealSpell.id },
    { value: 0, description: '', weight: 1, monster: Ronin.id, action: aMeleeArmorIgnore.id },
    { value: 0, description: '', weight: 1, monster: Ronin.id, action: aMeleeDoubleStrike.id },

    { value: 4, description: '', weight: 3, monster: SabretoothTiger.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: SabretoothTiger.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: SabretoothTiger.id, action: aMeleeDisarm.id },
    { value: 0, description: '', weight: 2, monster: SabretoothTiger.id, action: aMeleeDismount.id },

    { value: 0, description: '', weight: 4, monster: Scorpion.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: Scorpion.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: Scorpion.id, action: aMeleePoison.id },

    { value: 0, description: '', weight: 3, monster: ShadowlordAssassin.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: ShadowlordAssassin.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: ShadowlordAssassin.id, action: aMeleeDeadlyPoison.id },
    { value: 0, description: '', weight: 2, monster: ShadowlordAssassin.id, action: aMeleeArmorIgnore.id },

    { value: 0, description: '', weight: 2, monster: ShadowlordBomber.id, action: aMove.id },
    { value: 0, description: '', weight: 1, monster: ShadowlordBomber.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: ShadowlordBomber.id, action: aMeleeCrushingBlow.id },
    { value: 0, description: '', weight: 3, monster: ShadowlordBomber.id, action: aGreaterExplosionPot.id },
    { value: 0, description: '', weight: 2, monster: ShadowlordBomber.id, action: aCongflagPot.id },

    { value: 4, description: '', weight: 4, monster: SilverSerpent.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: SilverSerpent.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: SilverSerpent.id, action: aMeleeLethalPoison.id },

    { value: 4, description: '', weight: 4, monster: SkeletalSteed.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: SkeletalSteed.id, action: amelee.id },

    { value: 0, description: '', weight: 3, monster: SnowElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: SnowElemental.id, action: amelee.id },
    { value: 0, description: '', weight: 3, monster: SnowElemental.id, action: aArchery.id },

    { value: 0, description: '', weight: 4, monster: SumStoneTitan.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: SumStoneTitan.id, action: amelee.id },

    { value: 4, description: '', weight: 2, monster: TerathanQueen.id, action: aMove.id },
    { value: 0, description: '', weight: 2, monster: TerathanQueen.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: TerathanQueen.id, action: aGreaterHealSpell.id },
    { value: 0, description: '', weight: 1, monster: TerathanQueen.id, action: aCurse.id },
    { value: 0, description: '', weight: 1, monster: TerathanQueen.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 1, monster: TerathanQueen.id, action: aLethalPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: TerathanQueen.id, action: aBirth.id },

    { value: 4, description: '', weight: 6, monster: SwampDragon.id, action: aMove.id },
    { value: 0, description: '', weight: 4, monster: SwampDragon.id, action: amelee.id },

    { value: 4, description: '', weight: 4, monster: TerathanWarrior.id, action: aMove.id },
    { value: 0, description: '', weight: 1, monster: TerathanWarrior.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: TerathanWarrior.id, action: aConcussionBlow.id },
    { value: 0, description: '', weight: 3, monster: TerathanWarrior.id, action: aMeleeGreaterPoison.id },

    { value: 0, description: '', weight: 4, monster: WailingBanshee.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: WailingBanshee.id, action: amelee.id },

    { value: 0, description: '', weight: 2, monster: Wraith.id, action: aFly.id },
    { value: 0, description: '', weight: 2, monster: Wraith.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Wraith.id, action: aMagicArrow.id },
    { value: 0, description: '', weight: 1, monster: Wraith.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 1, monster: Wraith.id, action: aMindBlast.id },
    { value: 0, description: '', weight: 1, monster: Wraith.id, action: aManaDrain.id },
    { value: 0, description: '', weight: 1, monster: Wraith.id, action: aStaminaDrain.id },

    { value: 4, description: '', weight: 3, monster: VoidElemental.id, action: aMove.id },
    { value: 0, description: '', weight: 3, monster: VoidElemental.id, action: aMeleeDismount.id },
    { value: 0, description: '', weight: 2, monster: VoidElemental.id, action: aWither.id },
    { value: 0, description: '', weight: 1, monster: VoidElemental.id, action: aEnergyBolt.id },
    { value: 0, description: '', weight: 1, monster: VoidElemental.id, action: aFlamestrike.id },

    { value: 3, description: '', weight: 3, monster: DeepSeaSerpent.id, action: aSwim.id },
    { value: 0, description: '', weight: 3, monster: DeepSeaSerpent.id, action: amelee.id },
    { value: 0, description: '', weight: 4, monster: DeepSeaSerpent.id, action: aBreathWeapon.id },

    { value: 3, description: '', weight: 3, monster: SeaSerpent.id, action: aSwim.id },
    { value: 0, description: '', weight: 3, monster: SeaSerpent.id, action: amelee.id },
    { value: 0, description: '', weight: 4, monster: SeaSerpent.id, action: aBreathWeapon.id },

    { value: 4, description: '', weight: 3, monster: FairyDragon.id, action: aFly.id },
    { value: 0, description: '', weight: 2, monster: FairyDragon.id, action: aCharge.id },
    { value: 0, description: '', weight: 2, monster: FairyDragon.id, action: aGreaterHealSpell.id },
    { value: 0, description: '', weight: 2, monster: FairyDragon.id, action: aMeleeBlink.id },
    { value: 0, description: '', weight: 1, monster: FairyDragon.id, action: aMindBlast.id },

    { value: 4, description: '', weight: 4, monster: Kraken.id, action: aSwim.id },
    { value: 0, description: '', weight: 4, monster: Kraken.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: Kraken.id, action: aBreathWeapon.id },

    { value: 0, description: '', weight: 2, monster: SumFireElemental.id, action: aSwim.id },
    { value: 0, description: '', weight: 2, monster: SumFireElemental.id, action: amelee.id },
    { value: 0, description: '', weight: 2, monster: SumFireElemental.id, action: aPoisonSpell.id },
    { value: 0, description: '', weight: 2, monster: SumFireElemental.id, action: aFireball.id },
    { value: 0, description: '', weight: 2, monster: SumFireElemental.id, action: aExplosion.id },

    { value: 0, description: '', weight: 8, monster: SumNaturesFury.id, action: amelee.id },
    { value: 8, description: '', weight: 0, monster: SumNaturesFury.id, action: aMove.id },

    { value: 4, description: '', weight: 4, monster: MinionDeathAdder.id, action: aMove.id },
    { value: 0, description: '', weight: 6, monster: MinionDeathAdder.id, action: aMeleeDeadlyPoison.id },
  ]);
};
