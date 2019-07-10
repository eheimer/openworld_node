/**
 * Jewelry/JewelryInstance.js
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
      type: 'boolean'
    },
    damaged: {
      type: 'boolean'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    gem: { model: 'gem' },
    location: { model: 'jewelrylocation' },
    attributes: { collection: 'jewelryinstanceattributes', via: 'jewelry' },
    inventory: { model: 'inventory' }
  },

  equip: async function(itemId){
    await Inventory.equip(itemId, 'jewelry');
  },

  damage: async function(itemId){
    var result = {};
    var chance = RandomService.getRandomInRange(1,100);
    if(chance > 95) {
      await JewelryInstance.destroyOne({id: itemId});
      result.destroyed = true;
    } else if(chance > await JewelryInstance.getDurability(itemId)){
      var item = await JewelryInstance.findOne({id: itemId});
      if(item.damaged){
        await JewelryInstance.destroyOne({id: itemId});
        result.destroyed = true;
      } else {
        await JewelryInstance.update({id: itemId}, {damaged: true});
        result.broken = true;
      }
    }
    return result;
  },

  getDurability: async function(itemId){
    var item = await JewelryInstance.findOne({id: itemId});
    var gem = await Gem.findOne({ id: item.gem }).populate('rarity');
    return gem.rarity.durability;
  },

  generateLoot: async function(level,inventoryId){
    //pick a random gem (weighted for rarity)
    var gem = RandomService.getOneRandomItem(await Gem.find({
      rarity: RandomService.weightedRandom([0, 9, 1])
    }));
    var location = RandomService.getOneRandomItem(await JewelryLocation.find());
    var jewelry = await JewelryInstance.create({
      gem: gem.id,
      location: location.id,
    }).fetch();
    var attPerLevel = [0, 1, 1, 2, 3];
    await LootService.createInstanceAttributes(
      JewelryInstanceAttributes,
      RandomService.getRandomItems(await JewelryAttribute.find(), attPerLevel[level]),
      'jewelry',
      jewelry.id
    );
    await Inventory.addToCollection(inventoryId, 'jewelry').members([ jewelry.id ]);
  },

};

