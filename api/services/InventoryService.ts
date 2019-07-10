import { IInventory, IWeaponInstance, IWeapon, IWeaponAttribute, IArmorInstance, IArmorClass, IDamageType, IArmorAttribute, IJewelryInstance, IJewelryAttribute, ISpellbookAttribute, IArmorInstanceDamageReductions, ISkill, ISpecialMove, IMaterial, IWeaponInstanceAttributes } from "../openworld";
import _ = require("lodash");
import { Model } from "waterline";
//import { any } from "bluebird";

declare var Inventory: IInventory;
declare var WeaponInstance: IWeaponInstance;
declare var ArmorInstance: IArmorInstance;
declare var ArmorClass: IArmorClass;
declare var Weapon: IWeapon;
declare var WeaponAttribute: IWeaponAttribute;
declare var ArmorAttribute: IArmorAttribute;
declare var DamageType: IDamageType;
declare var JewelryInstance: IJewelryInstance;
declare var JewelryAttribute: IJewelryInstance;
declare var SpellbookInstance: ISpellbookAttribute;
declare var SpellbookAttribute: ISpellbookAttribute;

export class OWInventoryService {
  async populateAllAndFlatten(inventory: number | IInventory) {
    if (inventory) {
      var inv: IInventory;
      if (!(<IInventory>inventory).id) {
        inv = await Inventory.findOne({
          id: inventory
        }).populate('weapons').populate('armor').populate('jewelry').populate('spellbooks');
      }
      inv = await this.populateAndFlattenWeapons(inv);
      inv = await this.populateAndFlattenArmor(inv);
      inv = await this.populateAndFlattenJewelry(inv);
      inv = await this.populateAndFlattenSpellbooks(inv);
      if (inv.limit) {
        inv.slotsAvailable = await Inventory.emptySlots(inv.id);
      }
    }
    return inv;
  }

  async populateAndFlattenWeapons(inventory: IInventory) {
    if (inventory.weapons) {
      var weapons: IWeaponInstance[] = await WeaponInstance.find({
        id: _.map(<any[]>inventory.weapons, 'id')
      }).populate('weapon').populate('attributes').populate('material');
      var newWeapons: any[] = [];
      for (var weapon of weapons) {
        var w: IWeapon = await Weapon.findOne({
          id: (<IWeapon>weapon.weapon).id
        }).populate('skill').populate('primaryMove').populate('secondaryMove');
        var attributes = await this.flattenAttributes(WeaponAttribute, weapon.attributes);
        newWeapons.push({
          id: weapon.id,
          itemType: 'weapons',
          name: w.name,
          skill: (<ISkill>w.skill).name,
          primary: {
            name: (<ISpecialMove>w.primaryMove).name,
            stamina: (<ISpecialMove>w.primaryMove).stamina
          },
          secondary: {
            name: (<ISpecialMove>w.secondaryMove).name,
            stamina: (<ISpecialMove>w.secondaryMove).stamina
          },
          durability: (<IMaterial>weapon.material).weaponDurability,
          attributes: attributes,
          equipped: weapon.equipped,
          damaged: weapon.damaged
        });
      }
      inventory.weapons = newWeapons;
    }
    return inventory;
  }

  async populateAndFlattenArmor(inventory: IInventory) {
    if (inventory.armor) {
      var armors = await ArmorInstance.find({
        id: _.map(<any[]>inventory.armor, 'id')
      }).populate('armorClass').populate('location').populate('attributes').populate('reductions');
      var newArmors: any[] = [];
      for (var armor of armors) {
        var a = await ArmorClass.findOne({
          id: armor.armorClass.id
        });
        //attributes
        var attributes = await this.flattenAttributes(ArmorAttribute, armor.attributes);
        //reductions
        var reductions: IArmorInstanceDamageReductions[] = [];
        for (var reduc of armor.reductions) {
          var dmgType = await DamageType.findOne({
            id: reduc.damageType
          });
          reductions.push(<IArmorInstanceDamageReductions>{
            name: dmgType.name,
            value: reduc.value
          });
        }
        newArmors.push({
          id: armor.id,
          itemType: 'armor',
          name: a.name + ' ' + armor.location.name,
          durability: a.durability,
          attributes: attributes,
          reductions: reductions,
          equipped: armor.equipped,
          damaged: armor.damaged
        });
      }
      inventory.armor = newArmors;
    }
    return inventory;
  }

  async populateAndFlattenJewelry(inventory: IInventory) {
    if (inventory.jewelry) {
      var jewelrys = await JewelryInstance.find({
        id: _.map(<any[]>inventory.jewelry, 'id')
      }).populate('location').populate('gem').populate('attributes');
      var newJewelry: any[] = [];
      for (var jewelry of jewelrys) {
        var attributes = await this.flattenAttributes(JewelryAttribute, jewelry.attributes);
        newJewelry.push({
          id: jewelry.id,
          itemType: 'jewelry',
          // name: jewelry.gem.name + ' ' + jewelry.location.name,
          name: jewelry.location.name,
          durability: jewelry.gem.durability,
          attributes: attributes,
          equipped: jewelry.equipped,
          damaged: jewelry.damaged
        });
      }
      inventory.jewelry = newJewelry;
    }
    return inventory;
  }

  async populateAndFlattenSpellbooks(inventory: IInventory) {
    if (inventory.spellbooks) {
      var spellbooks = await SpellbookInstance.find({
        id: _.map(<any[]>inventory.spellbooks, 'id')
      }).populate('attributes');
      var newSpellbooks: any[] = [];
      for (var spellbook of spellbooks) {
        var attributes = await this.flattenAttributes(SpellbookAttribute, spellbook.attributes);
        newSpellbooks.push({
          id: spellbook.id,
          itemType: 'spellbooks',
          name: 'Spellbook',
          attributes: attributes
        });
      }
      inventory.spellbooks = newSpellbooks;
    }
    return inventory;
  }

  async flattenAttributes(accessor: Model, attributes: any[]) {
    var ret = [];
    for (var att of attributes) {
      var base = await accessor.findOne({
        id: att.attribute
      });
      ret.push({
        name: base.name,
        value: att.value
      });
    }
    return ret;
  }
};

module.exports = new OWInventoryService();