var ArmorClassEnum = require('../api/services/EnumService').ArmorClass();
var EquipLocationEnum = require('../api/services/EnumService').EquipLocation();
var ArmorLocationEnum = require('../api/services/EnumService').ArmorLocation();
var DamageTypeEnum = require('../api/services/EnumService').DamageType();

module.exports = async function() {
  /**
   * Armor Class
   */
  for(var armor in ArmorClassEnum){
    await ArmorClass.create(ArmorClassEnum[armor]);
  }

  for(var loc in EquipLocationEnum){
    await EquipLocation.create(EquipLocationEnum[loc]);
  }

  /**
   * Armor Location
   */
  for(var aloc in ArmorLocationEnum){
    await ArmorLocation.create(ArmorLocationEnum[aloc]);
  }

  /**
   * Armor class reductions
   */
  await ClassDamageReduction.createEach([
    // Lev 0 armor reduction stats
    //Leather
    { armorClass: ArmorClassEnum.LEATHER.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 2 },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 4 },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 3 },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 3 },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 3 },
    //Leaf
    { armorClass: ArmorClassEnum.LEAF.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 2 },
    { armorClass: ArmorClassEnum.LEAF.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 3 },
    { armorClass: ArmorClassEnum.LEAF.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 2 },
    { armorClass: ArmorClassEnum.LEAF.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 4 },
    { armorClass: ArmorClassEnum.LEAF.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 4 },
    //Studded
    { armorClass: ArmorClassEnum.STUDDED.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 2 },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 4 },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 3 },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 3 },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 4 },
    //Hide
    { armorClass: ArmorClassEnum.HIDE.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 3 },
    { armorClass: ArmorClassEnum.HIDE.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 3 },
    { armorClass: ArmorClassEnum.HIDE.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 4 },
    { armorClass: ArmorClassEnum.HIDE.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 3 },
    { armorClass: ArmorClassEnum.HIDE.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 2 },
    //Bone
    { armorClass: ArmorClassEnum.BONE.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 3 },
    { armorClass: ArmorClassEnum.BONE.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 3 },
    { armorClass: ArmorClassEnum.BONE.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 4 },
    { armorClass: ArmorClassEnum.BONE.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 2 },
    { armorClass: ArmorClassEnum.BONE.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 4 },
    //Ringmail
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 3 },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 3 },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 1 },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 5 },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 3 },
    //Chainmail
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 4 },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 4 },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 4 },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 1 },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 2 },
    //Platemail
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 5 },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 3 },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 2 },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 3 },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 2 },
    //Dragonmail
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 3 },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 3 },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 3 },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 3 },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 3 },
    //Woodland
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 0, damageType: DamageTypeEnum.PHYSICAL.id, reduction: 5 },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 0, damageType: DamageTypeEnum.FIRE.id, reduction: 3 },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 0, damageType: DamageTypeEnum.COLD.id, reduction: 2 },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 0, damageType: DamageTypeEnum.POISON.id, reduction: 3 },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 0, damageType: DamageTypeEnum.ENERGY.id, reduction: 2 },



    //Leather
    { armorClass: ArmorClassEnum.LEATHER.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '1-3' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '3-5' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-4' },
    //Leaf
    { armorClass: ArmorClassEnum.LEAF.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '1-3' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '0-3' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '1-3' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '3-5' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-5' },
    //Studded
    { armorClass: ArmorClassEnum.STUDDED.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '1-3' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '3-5' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-5' },
    //Hide
    { armorClass: ArmorClassEnum.HIDE.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '3-5' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-3' },
    //Bone
    { armorClass: ArmorClassEnum.BONE.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.BONE.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.BONE.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '3-5' },
    { armorClass: ArmorClassEnum.BONE.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '1-3' },
    { armorClass: ArmorClassEnum.BONE.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-5' },
    //Ringmail
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '0-2' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '4-6' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-4' },
    //Chainmail
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '3-5' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '3-5' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '3-5' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '0-2' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-3' },
    //Platemail
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '4-6' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '1-4' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-3' },
    //Dragonmail
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-4' },
    //Woodland
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 1, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '4-6' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 1, damageType: DamageTypeEnum.FIRE.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 1, damageType: DamageTypeEnum.COLD.id, reduction: '1-4' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 1, damageType: DamageTypeEnum.POISON.id, reduction: '2-4' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 1, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-3' },



    // Lev 2 armor reduction stats
    //Leather
    { armorClass: ArmorClassEnum.LEATHER.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '1-3' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '3-6' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-5' },
    //Leaf
    { armorClass: ArmorClassEnum.LEAF.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '1-3' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '0-4' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '1-4' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '3-6' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-6' },
    //Studded
    { armorClass: ArmorClassEnum.STUDDED.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '1-3' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '3-6' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-6' },
    //Hide
    { armorClass: ArmorClassEnum.HIDE.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '3-6' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-4' },
    //Bone
    { armorClass: ArmorClassEnum.BONE.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.BONE.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.BONE.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '3-6' },
    { armorClass: ArmorClassEnum.BONE.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '1-4' },
    { armorClass: ArmorClassEnum.BONE.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-6' },
    //Ringmail
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '0-3' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '4-7' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-5' },
    //Chainmail
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '3-6' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '4-6' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '3-6' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '0-3' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-4' },
    //Platemail
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '4-7' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '1-4' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-3' },
    //Dragonmail
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-5' },
    //Woodland
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 2, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '4-7' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 2, damageType: DamageTypeEnum.FIRE.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 2, damageType: DamageTypeEnum.COLD.id, reduction: '1-4' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 2, damageType: DamageTypeEnum.POISON.id, reduction: '2-5' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 2, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-3' },



    // Lev 3 armor reduction stats
    //Leather
    { armorClass: ArmorClassEnum.LEATHER.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '1-4' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-6' },
    //Leaf
    { armorClass: ArmorClassEnum.LEAF.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '1-5' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '1-4' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '1-5' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-7' },
    //Studded
    { armorClass: ArmorClassEnum.STUDDED.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '1-5' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-7' },
    //Hide
    { armorClass: ArmorClassEnum.HIDE.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-5' },
    //Bone
    { armorClass: ArmorClassEnum.BONE.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.BONE.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.BONE.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.BONE.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '1-5' },
    { armorClass: ArmorClassEnum.BONE.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-7' },
    //Ringmail
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '0-3' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-6' },
    //Chainmail
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '4-7' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '0-4' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-5' },
    //Platemail
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '5-8' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '1-5' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-5' },
    //Dragonmail
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-6' },
    //Woodland
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 3, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 3, damageType: DamageTypeEnum.FIRE.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 3, damageType: DamageTypeEnum.COLD.id, reduction: '1-5' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 3, damageType: DamageTypeEnum.POISON.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 3, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-5' },



    // Lev 4 armor reduction stats
    //Leather
    { armorClass: ArmorClassEnum.LEATHER.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.LEATHER.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-7' },
    //Leaf
    { armorClass: ArmorClassEnum.LEAF.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '1-5' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.LEAF.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '4-8' },
    //Studded
    { armorClass: ArmorClassEnum.STUDDED.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.STUDDED.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '4-8' },
    //Hide
    { armorClass: ArmorClassEnum.HIDE.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.HIDE.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-6' },
    //Bone
    { armorClass: ArmorClassEnum.BONE.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.BONE.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.BONE.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.BONE.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.BONE.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '4-8' },
    //Ringmail
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '1-4' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '5-9' },
    { armorClass: ArmorClassEnum.RINGMAIL.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-7' },
    //Chainmail
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '5-8' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '4-8' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '1-5' },
    { armorClass: ArmorClassEnum.CHAINMAIL.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '1-6' },
    //Platemail
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '5-9' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.PLATEMAIL.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-6' },
    //Dragonmail
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.DRAGONMAIL.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '3-7' },
    //Woodland
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 4, damageType: DamageTypeEnum.PHYSICAL.id, reduction: '5-9' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 4, damageType: DamageTypeEnum.FIRE.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 4, damageType: DamageTypeEnum.COLD.id, reduction: '2-6' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 4, damageType: DamageTypeEnum.POISON.id, reduction: '3-7' },
    { armorClass: ArmorClassEnum.WOODLAND.id, level: 4, damageType: DamageTypeEnum.ENERGY.id, reduction: '2-6' },
  ]);

  /**
   * Armor attributes
   */
  await ArmorAttribute.createEach([
    { name: 'Antique' },
    { name: 'Cursed' },
    { name: 'Damage Eater', value: '1-15' },
    { name: 'Brittle' },
    { name: 'Mana Increase', value: '1-8' },
    { name: 'Mana Regeneration', value: '1-3' },
    { name: 'Hit Point Increase', value: '1-10' },
    { name: 'Reflect Phsyical Damage', value: '1-15' },
    { name: 'Stamina Regeneration', value: '1-3' },
    { name: 'Self Repair', value: '50-100' },
    { name: 'Casting Focus', value: '1-12' },
    { name: 'Lower Reagent Cost', value: 1 },
    { name: 'Hit Point Regeneration', value: '1-3' },
    { name: 'Mage Armor' },
    { name: 'Stamina Increase', value: '1-10' },
    { name: 'Lower Mana Cost', value: '1-8' },
  ]);


};
