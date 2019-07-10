var WeaponSkillEnum = require('../api/services/EnumService').WeaponSkill();
var MaterialTypeEnum = require('../api/services/EnumService').MaterialType();
var SlayerTypeEnum = require('../api/services/EnumService').SlayerType();

module.exports = async function() {
  /**
   * Weapon Proficiencies
   */
  for(var skill in WeaponSkillEnum){
    await WeaponSkill.create(WeaponSkillEnum[skill]);
  }

  /** Material Types */
  for(var mat in MaterialTypeEnum){
    await MaterialType.create(MaterialTypeEnum[mat]);
  }

  /**
   * Materials
   */
  await Material.createEach([
    { id: 1, name: 'Iron', weaponDurability: 60, canSpawn: true, base: MaterialTypeEnum.METAL.id },
    { id: 2, name: 'Wood', weaponDurability: 60, canSpawn: true, base: MaterialTypeEnum.WOOD.id },
    { id: 3, name: 'Agate', weaponDurability: 120, base: MaterialTypeEnum.METAL.id },
    { id: 4, name: 'Shadow', weaponDurability: 100, base: MaterialTypeEnum.METAL.id },
    { id: 5, name: 'Violite', weaponDurability: 70, base: MaterialTypeEnum.METAL.id },
    { id: 6, name: 'Ice', weaponDurability: 70 },
    { id: 7, name: 'Gold', weaponDurability: 65, base: MaterialTypeEnum.METAL.id },
    { id: 8, name: 'Verite', weaponDurability: 70, base: MaterialTypeEnum.METAL.id },
    { id: 9, name: 'Valorite', weaponDurability: 100, base: MaterialTypeEnum.METAL.id },
    { id: 10, name: 'Oak', weaponDurability: 90, base: MaterialTypeEnum.WOOD.id },
    { id: 11, name: 'Ash', weaponDurability: 60, base: MaterialTypeEnum.WOOD.id },
    { id: 12, name: 'Yew', weaponDurability: 75, base: MaterialTypeEnum.WOOD.id },
    { id: 13, name: 'Heartwood', weaponDurability: 75, base: MaterialTypeEnum.WOOD.id },
    { id: 14, name: 'Bloodwood', weaponDurability: 75, base: MaterialTypeEnum.WOOD.id },
    { id: 15, name: 'Frostwood', weaponDurability: 85, base: MaterialTypeEnum.WOOD.id },
  ]);

  /**
   * Weapon Special Moves
   */
  await SpecialMove.createEach([
    { id: 1, name: 'Armor Ignore', stamina: 30 },
    { id: 2, name: 'Armor Pierce', stamina: 30 },
    { id: 3, name: 'Bleed Attack', stamina: 30 },
    { id: 4, name: 'Crushing Blow', stamina: 20 },
    { id: 5, name: 'Concussion Blow', stamina: 20 },
    { id: 6, name: 'Disarm', stamina: 20 },
    { id: 7, name: 'Dismount', stamina: 25 },
    { id: 8, name: 'Double Shot', stamina: 35 },
    { id: 9, name: 'Double Strike', stamina: 30 },
    { id: 10, name: 'Feint', stamina: 30 },
    { id: 11, name: 'Force Arrow', stamina: 20 },
    { id: 12, name: 'Scrambling Strike', stamina: 20 },
    { id: 13, name: 'Infectious Strike', stamina: 20 },
    { id: 14, name: 'Mortal Strike', stamina: 30 },
    { id: 15, name: 'Moving Shot', stamina: 20 },
    { id: 16, name: 'Mystic Arc', stamina: 20 },
    { id: 17, name: 'Nerve Strike', stamina: 30 },
    { id: 18, name: 'Paralyzing Blow', stamina: 30 },
    { id: 19, name: 'Riding Swipe', stamina: 25 },
    { id: 20, name: 'Serpent Arrow', stamina: 25 },
    { id: 21, name: 'Shadow Strike', stamina: 20 },
    { id: 22, name: 'Whirlwind Attack', stamina: 40 },
  ]);

  /**
   * Core Weapons
   */
  await Weapon.createEach([
    { id: 1, damageMin: 10, damageMax: 12, name: 'Assassin Spike', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 13, secondaryMove: 21, speed: 2, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 2, damageMin: 10, damageMax: 12, name: 'Dagger', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 13, secondaryMove: 21, speed: 2, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 3, damageMin: 10, damageMax: 12, name: 'Kryss', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 1, secondaryMove: 13, speed: 2, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 4, damageMin: 10, damageMax: 13, name: 'Short Spear', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 21, secondaryMove: 14, speed: 2, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 5, damageMin: 10, damageMax: 14, name: 'Club', skill: WeaponSkillEnum.MACE.id,range: 0, primaryMove: 1, secondaryMove: 2, speed: 2, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 6, damageMin: 10, damageMax: 14, name: 'War Fork', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 3, secondaryMove: 6, speed: 4, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 7, damageMin: 11, damageMax: 13, name: 'Cleaver', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 3, secondaryMove: 13, speed: 4, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 8, damageMin: 11, damageMax: 13, name: 'Cutlass', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 3, secondaryMove: 21, speed: 4, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 9, damageMin: 11, damageMax: 13, name: 'Katana', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 9, secondaryMove: 1, speed: 4, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 10, damageMin: 11, damageMax: 13, name: 'Wakizashi', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 12, secondaryMove: 9, speed: 4, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 11, damageMin: 11, damageMax: 14, name: 'Crescent Blade', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 9, secondaryMove: 14, speed: 4, strength: 3, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 12, damageMin: 11, damageMax: 14, name: 'Quarter Staff', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 9, secondaryMove: 5, speed: 3, strength: 2, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 13, damageMin: 11, damageMax: 15, name: 'Mace', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 5, secondaryMove: 6, speed: 4, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 14, damageMin: 11, damageMax: 15, name: 'Wand', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 7, secondaryMove: 6, speed: 4, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 15, damageMin: 11, damageMax: 15, name: 'Leafblade', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 10, secondaryMove: 1, speed: 4, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 16, damageMin: 11, damageMax: 15, name: 'Repeating Crossbow', skill: WeaponSkillEnum.ARCHERY.id, range: 7, primaryMove: 8, secondaryMove: 15, speed: 4, strength: 2, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 17, damageMin: 12, damageMax: 13, name: 'Double Bladed Staff', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 9, secondaryMove: 13, speed: 3, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 18, damageMin: 12, damageMax: 15, name: 'Tetsubo', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 4, secondaryMove: 12, speed: 4, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 19, damageMin: 13, damageMax: 14, name: 'Pitchfork', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 3, secondaryMove: 7, speed: 4, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 20, damageMin: 13, damageMax: 15, name: 'Bone Harvester', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 18, secondaryMove: 14, speed: 5, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 21, damageMin: 13, damageMax: 15, name: 'Pickaxe', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 9, secondaryMove: 6, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 22, damageMin: 13, damageMax: 15, name: 'Scimitar', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 9, secondaryMove: 18, speed: 5, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 23, damageMin: 13, damageMax: 15, name: 'Daisho', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 10, secondaryMove: 9, speed: 4, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 24, damageMin: 13, damageMax: 15, name: 'Hatchet', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 1, secondaryMove: 6, speed: 4, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 25, damageMin: 13, damageMax: 15, name: 'Spear', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 1, secondaryMove: 18, speed: 4, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 26, damageMin: 13, damageMax: 16, name: 'Black Staff', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 22, secondaryMove: 18, speed: 4, strength: 2, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 27, damageMin: 13, damageMax: 16, name: 'Shepherd Crook', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 4, secondaryMove: 6, speed: 4, strength: 1, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 28, damageMin: 13, damageMax: 17, name: 'Diamond Mace', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 5, secondaryMove: 4, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 29, damageMin: 13, damageMax: 17, name: 'Sledge Hammer', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 4, secondaryMove: 21, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 30, damageMin: 13, damageMax: 17, name: 'Smith Hammer', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 4, secondaryMove: 21, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 31, damageMin: 13, damageMax: 17, name: 'War Axe', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 1, secondaryMove: 3, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 32, damageMin: 13, damageMax: 17, name: 'Yumi', skill: WeaponSkillEnum.ARCHERY.id, range: 10, primaryMove: 2, secondaryMove: 8, speed: 5, strength: 2, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 33, damageMin: 13, damageMax: 17, name: 'Cyclone', skill: WeaponSkillEnum.THROWING.id, range: 3, primaryMove: 15, secondaryMove: 7, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 34, damageMin: 14, damageMax: 16, name: 'Broadsword', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 4, secondaryMove: 1, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 35, damageMin: 14, damageMax: 16, name: 'Axe', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 4, secondaryMove: 7, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 36, damageMin: 14, damageMax: 16, name: 'Bladed Staff', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 1, secondaryMove: 7, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 37, damageMin: 14, damageMax: 16, name: 'Pike', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 18, secondaryMove: 13, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 38, damageMin: 14, damageMax: 18, name: 'Maul', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 9, secondaryMove: 5, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 39, damageMin: 14, damageMax: 18, name: 'Scepter', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 4, secondaryMove: 14, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 40, damageMin: 15, damageMax: 16, name: 'Longsword', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 1, secondaryMove: 5, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 41, damageMin: 15, damageMax: 17, name: 'Viking Sword', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 4, secondaryMove: 18, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 42, damageMin: 15, damageMax: 17, name: 'Battle Axe', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 3, secondaryMove: 5, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 43, damageMin: 15, damageMax: 17, name: 'Double Axe', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 9, secondaryMove: 22, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 44, damageMin: 15, damageMax: 17, name: 'Executioner Axe', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 3, secondaryMove: 14, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 45, damageMin: 15, damageMax: 17, name: 'Hammer Pick', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 1, secondaryMove: 14, speed: 5, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 46, damageMin: 15, damageMax: 18, name: 'Scythe', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 3, secondaryMove: 18, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 47, damageMin: 15, damageMax: 19, name: 'War Mace', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 4, secondaryMove: 14, speed: 6, strength: 4, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 48, damageMin: 15, damageMax: 19, name: 'Bow', skill: WeaponSkillEnum.ARCHERY.id, range: 10, primaryMove: 18, secondaryMove: 14, speed: 7, strength: 2, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 49, damageMin: 15, damageMax: 19, name: 'Elven Longbow', skill: WeaponSkillEnum.ARCHERY.id, range: 10, primaryMove: 11, secondaryMove: 20, speed: 6, strength: 2, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 50, damageMin: 16, damageMax: 17, name: 'Large Battle Axe', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 22, secondaryMove: 3, speed: 6, strength: 4, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 51, damageMin: 16, damageMax: 17, name: 'Two Handed Axe', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 9, secondaryMove: 21, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 52, damageMin: 16, damageMax: 18, name: 'No-Dachi', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 19, secondaryMove: 7, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 53, damageMin: 16, damageMax: 20, name: 'Composoite Bow', skill: WeaponSkillEnum.ARCHERY.id, range: 10, primaryMove: 1, secondaryMove: 15, speed: 7, strength: 2, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 54, damageMin: 17, damageMax: 18, name: 'Bardiche', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 18, secondaryMove: 7, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 55, damageMin: 17, damageMax: 20, name: 'War Hammer', skill: WeaponSkillEnum.MACE.id, range: 0, primaryMove: 22, secondaryMove: 4, speed: 6, strength: 4, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 56, damageMin: 18, damageMax: 19, name: 'Halbard', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 22, secondaryMove: 5, speed: 7, strength: 4, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 57, damageMin: 18, damageMax: 20, name: 'Ornate Axe', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 6, secondaryMove: 4, speed: 6, strength: 2, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 58, damageMin: 18, damageMax: 22, name: 'Lance', skill: WeaponSkillEnum.FENCING.id, range: 0, primaryMove: 7, secondaryMove: 5, speed: 7, strength: 4, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 59, damageMin: 18, damageMax: 22, name: 'Crossbow', skill: WeaponSkillEnum.ARCHERY.id, range: 0, primaryMove: 5, secondaryMove: 14, speed: 6, strength: 2, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 60, damageMin: 18, damageMax: 22, name: 'Soul Glaive', skill: WeaponSkillEnum.THROWING.id, range: 5, primaryMove: 1, secondaryMove: 14, speed: 7, strength: 3, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 61, damageMin: 20, damageMax: 24, name: 'Paladin Sword', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 22, secondaryMove: 6, speed: 6, strength: 4, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 62, damageMin: 20, damageMax: 24, name: 'Paladin Sword', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 22, secondaryMove: 6, speed: 6, strength: 4, material: MaterialTypeEnum.METAL.id, hand: 2},
    { id: 63, damageMin: 20, damageMax: 24, name: 'Heavy Crossbow', skill: WeaponSkillEnum.ARCHERY.id, range: 8, primaryMove: 15, secondaryMove: 7, speed: 8, strength: 4, material: MaterialTypeEnum.WOOD.id, hand: 2},
    { id: 64, damageMin: 8, damageMax: 12, name: 'Boomerang', skill: WeaponSkillEnum.THROWING.id, range: 0, primaryMove: 16, secondaryMove: 5, speed: 4, strength: 1, material: MaterialTypeEnum.WOOD.id, hand: 1},
    { id: 65, damageMin: 9, damageMax: 11, name: 'Bokuto', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 10, secondaryMove: 17, speed: 2, strength: 1, material: MaterialTypeEnum.WOOD.id, hand: 1},
    { id: 66, damageMin: 9, damageMax: 11, name: 'Butcher Knife', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 13, secondaryMove: 6, speed: 3, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
    { id: 67, damageMin: 9, damageMax: 11, name: 'Skinning Knife', skill: WeaponSkillEnum.SWORDS.id, range: 0, primaryMove: 21, secondaryMove: 6, speed: 3, strength: 1, material: MaterialTypeEnum.METAL.id, hand: 1},
  ]);

  /**
   * Weapon Attributes
   */
  await WeaponAttribute.createEach([
    { id: 1, min: 1, max: 15, name: 'Defence Chance Increase' },
    { id: 2, name: 'Antique' },
    { id: 3, name: 'Slayer' },
    { id: 4, name: 'Spell Channeling' },
    { id: 5, name: 'Faster Casting 1' },
    { id: 6, name: 'Cursed' },
    { id: 7, min: 1, max: 15, name: 'Hit Chance Increase' },
    { id: 8, min: 1, max: 50, name: 'Damage Increase' },
    { id: 9, min: 1, max: 15, name: 'Hit Chance Increase' },
    { id: 10, min: 1, max: 15, name: 'Energy Reduction' },
    { id: 11, min: 1, max: 15, name: 'Fire Reduction' },
    { id: 12, min: 1, max: 15, name: 'Physical Reduction' },
    { id: 13, min: 1, max: 15, name: 'Poison Reduction' },
    { id: 14, min: 1, max: 50, name: 'Hit Cold Area' },
    { id: 15, min: 1, max: 50, name: 'Hit Curse' },
    { id: 16, min: 1, max: 50, name: 'Hit Dispel' },
    { id: 17, min: 1, max: 50, name: 'Hit Energy Area' },
    { id: 18, min: 1, max: 50, name: 'Hit Fatigue' },
    { id: 19, min: 1, max: 15, name: 'Cold Reduction' },
    { id: 20, min: 1, max: 50, name: 'Hit Fire Area' },
    { id: 21, min: 1, max: 50, name: 'Hit Fireball' },
    { id: 22, min: 1, max: 50, name: 'Hit Harm' },
    { id: 23, min: 1, max: 50, name: 'Hit Life Leech' },
    { id: 24, min: 1, max: 50, name: 'Hit Lightning' },
    { id: 25, min: 1, max: 50, name: 'Hit Lower Attack' },
    { id: 26, min: 1, max: 50, name: 'Hit Lower Defense' },
    { id: 27, min: 1, max: 50, name: 'Hit Magic Arrow' },
    { id: 28, min: 1, max: 50, name: 'Hit Mana Drain' },
    { id: 29, min: 1, max: 50, name: 'Hit Mana Leech' },
    { id: 30, min: 1, max: 50, name: 'Hit Physical Area' },
    { id: 31, min: 1, max: 50, name: 'Hit Poison Area' },
    { id: 32, min: 1, max: 50, name: 'Hit Stamina Leech' },
    { id: 33, min: 1, max: 50, name: 'Hit Life Leech' },
    { id: 34, min: 1, max: 50, name: 'Hit Lightning' },
    { id: 35, name: 'Mage Weapon' },
    { id: 36, name: 'Massive' },
    { id: 37, name: 'Swing Speed Inc 1' },
    { id: 38, name: 'Unwieldy' },
    { id: 39, name: 'Use Best Weapon Skill' },
    { id: 40, name: 'Brittle' },
    { id: 41, name: 'Balanced', hand: 2 },
    { id: 42, name: 'Velocity', skill: WeaponSkillEnum.ARCHERY.id },
  ]);

  /**
   * Slayers
   */
  for (var slayer in SlayerTypeEnum){
    await SlayerType.create(SlayerTypeEnum[slayer]);
  }
};
