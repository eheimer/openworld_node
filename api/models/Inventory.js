/**
 * Inventory.js
 *
 * @description :: A container for items
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    capacity: {
      type: 'number',
    },

    limit: {
      type: 'boolean',
      description: 'whether or not to restrict contents based on the capacity field'
    },

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    weapons: { collection: 'weaponinstance', via: 'inventory' },
    armor: { collection: 'armorinstance', via: 'inventory' },
    jewelry: { collection: 'jewelryinstance', via: 'inventory' },
    spellbooks: { collection: 'spellbookinstance', via: 'inventory' },
    //reagents
    //etc, etc.

  },

  equip: async function (itemId, itemType){
    var accessor = await LootService.getItemAccessor(itemType);
    var item;
    if(accessor.attributes.location){
      item = await accessor.findOne(itemId).populate('location');
    } else {
      item = await accessor.findOne(itemId);
    }
    var valid = true;
    switch (itemType) {
      case 'weapons':
        //unequip all weapons
        await WeaponInstance.update({ inventory: item.inventory, equipped: true }, { equipped: false });
        item.weapon = await Weapon.find(item.weapon);
        if(item.weapon.hand === 2){
          //TODO: if it's a two-handed weapon, unequip all shields as well
        }
        break;
      case 'armor':
      case 'jewelry':
        //unequip any armor and jewelry with the same location
        var aloc = await ArmorLocation.findOne({ location: item.location.location });
        var jloc = await JewelryLocation.findOne({ location: item.location.location });
        if(aloc){
          await ArmorInstance.update({ inventory: item.inventory, location: aloc.id, equipped: true }, { equipped: false });
        }
        if(jloc){
          await JewelryInstance.update({ inventory: item.inventory, location: jloc.id, equipped: true }, { equipped: false });
        }
        break;
      default:
        //unable to equip
        valid = false;
        break;
    }
    if(valid){
      //equip the item
      await accessor.update({id: itemId},{equipped: true});
    }
  },

  hasRoom: async function (inventoryId, count){
    if(!count){
      count = 1;
    }
    return (await Inventory.emptySlots(inventoryId)) >= count;
  },

  emptySlots: async function (inventoryId) {
    var inv = await Inventory.findOne({ id: inventoryId }).populate('armor').populate('weapons').populate('jewelry').populate('spellbooks');
    var usedSlots = [];
    usedSlots = _.filter(usedSlots.concat(inv.armor, inv.weapons, inv.jewelry, inv.spellbooks), (item) => { return !item.equipped; });
    return inv.capacity - usedSlots.length;
  },

  slotsAvailable: { type: 'number'},

};

