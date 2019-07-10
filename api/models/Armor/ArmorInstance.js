/**
 * Armor/ArmorInstance.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    equipped: {
      type: 'boolean',
    },
    damaged: {
      type: 'boolean',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    armorClass: { model: 'armorclass' },
    location: { model: 'armorlocation' },
    attributes: { collection: 'armorinstanceattributes', via: 'armor' },
    inventory: { model: 'inventory' },
    reductions: { collection: 'armorinstancedamagereductions', via: 'armor' },
  },

  equip: async function(itemId){
    await Inventory.equip(itemId, 'armor');
  },

  damage: async function(itemId){
    var result = {};
    var chance = RandomService.getRandomInRange(1,100);
    if(chance > 95){
      await ArmorInstance.destroyOne({id: itemId});
      result.destroyed = true;
    } else if(chance > await ArmorInstance.getDurability(itemId)){
      var item = await ArmorInstance.findOne({id: itemId});
      if(item.damaged){
        await ArmorInstance.destroyOne({id: itemId});
        result.destroyed = true;
      } else {
        await ArmorInstance.update({id: itemId}, {damaged: true});
        result.broken = true;
      }
    }
    return result;
  },

  getDurability: async function(itemId){
    var item = await ArmorInstance.findOne({id: itemId}).populate('armorClass');
    return item.armorClass.durability;
  },

  generateLoot: async function(level,inventoryId){
    var armorClass = RandomService.getOneRandomItem(await ArmorClass.find().populate('reductions'));
    var location = RandomService.getOneRandomItem(await ArmorLocation.find());
    var armor = await ArmorInstance.create({
      armorClass: armorClass.id,
      location: location.id
    }).fetch();
    //generate the damage reduction values
    var reductions = [];
    for (var reduc of armorClass.reductions) {
      if (reduc.level === level) {
        reductions.push({
          damageType: reduc.damageType,
          value: RandomService.getRandomInRange(reduc.reduction),
          armor: armor.id
        });
      }
    }
    await ArmorInstanceDamageReductions.createEach(reductions);
    await LootService.createInstanceAttributes(
      ArmorInstanceAttributes,
      RandomService.getRandomItems(await ArmorAttribute.find(), level),
      'armor',
      armor.id
    );
    await Inventory.addToCollection(inventoryId, 'armor').members([ armor.id ]);
  },

};
