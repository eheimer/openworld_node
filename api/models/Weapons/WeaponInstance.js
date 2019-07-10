/**
 * WeaponInstance.js
 *
 * @description :: A model definition represents a database table/collection.
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
    weapon: { model: 'weapon' },
    attributes: { collection: 'weaponinstanceattributes', via: 'weapon' },
    material: { model: 'material' },
    inventory: { model: 'inventory' }

  },

  equip: async function(itemId){
    await Inventory.equip(itemId, 'weapons');
  },

  generateLoot: async function(level,inventoryId){
    var weapon = RandomService.getOneRandomItem(await Weapon.find());
    var mat = RandomService.getOneRandomItem(await Material.find({
      canSpawn: true,
      base: weapon.material
    }));
    var wInstance = await WeaponInstance.create({
      weapon: weapon.id,
      material: mat.id
    }).fetch();

    if (level > 0) {
      //pick a number of attributes based on the level
      var attQuery = {
        and: [{
            or: [{
              hand: 0
            }, {
              hand: weapon.hand
            }]
          },
          {
            or: [{
              skill: null
            }, {
              skill: weapon.skill
            }]
          }
        ]
      };
      await LootService.createInstanceAttributes(
        WeaponInstanceAttributes,
        RandomService.getRandomItems(await WeaponAttribute.find(attQuery), level),
        'weapon',
        wInstance.id
      );
    }
    await Inventory.addToCollection(inventoryId, 'weapons').members([ wInstance.id ]);
  },

  itemType: {type: 'string'},
  name: {type: 'string'},
  skill: {type: 'string'},
  primary: {type: 'any'},
  secondary: {type: 'any'},
  durability: {type: 'number'},

};

