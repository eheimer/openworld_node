var JewelryLocationEnum = require('../api/services/EnumService').JewelryLocation();

module.exports = async function() {
  /**
   * Jewelry Location
   */
  for (var loc in JewelryLocationEnum){
    await JewelryLocation.create(JewelryLocationEnum[loc]);
  }

  /**
   * Gems
   */
  await Gem.createEach([
    { id: 1, name: 'Amber', rarity: 1, weight: 1, Image: 'Amber.png', level: 1},
    { id: 2, name: 'Citrine', rarity: 1, weight: 1, Image: 'Citrine.png', level: 1},
    { id: 3, name: 'Ruby', rarity: 1, weight: 1, Image: 'Ruby.png', level: 1},
    { id: 4, name: 'Brilliant Amber', rarity: 2, weight: 1, Image: 'Brilliant_Amber.png', level: 2},
    { id: 5, name: 'Blue Diamond', rarity: 2, weight: 1, Image: 'Blue_Diamond.png', level: 2},
    { id: 6, name: 'Tourmaline', rarity: 1, weight: 1, Image: 'Tourmaline.png', level: 2},
    { id: 7, name: 'Amethyst', rarity: 1, weight: 1, Image: 'Amethyst.png', level: 3},
    { id: 8, name: 'Emerald', rarity: 1, weight: 1, Image: 'Emerald.png', level: 3},
    { id: 9, name: 'Dark Sapphire', rarity: 2, weight: 1, Image: 'Dark_Sapphire.png', level: 3},
    { id: 10, name: 'Ecu Citrine', rarity: 2, weight: 1, Image: 'Ecru_Citrine.png', level: 3},
    { id: 11, name: 'Sapphire', rarity: 1, weight: 1, Image: 'Sapphire.png', level: 3},
    { id: 12, name: 'Star Sapphire', rarity: 1, weight: 1, Image: 'Star_Sapphire.png', level: 2},
    { id: 13, name: 'Diamond', rarity: 1, weight: 1, Image: 'Diamond.png', level: 2},
    { id: 14, name: 'Fire Ruby', rarity: 2, weight: 1, Description: 'Enchants Hit Fireball, Strength', Image: 'Fire_Ruby.png', level: 1},
    { id: 15, name: 'Perfect Emerald', rarity: 2, weight: 1, Image: 'Perfect_Emerald.png', level: 1},
    { id: 16, name: 'Turquoise', rarity: 2, weight: 1, Image: 'Turquoise.png', level: 1},
  ]);

  /**
   * Gem rarity
   */
  await GemRarity.createEach([
    { id: 1, name: 'common', durability: 60},
    { id: 2, name: 'rare', durability: 70},
  ]);

  /**
   * Jewelry Attributes
   */
  await JewelryAttribute.createEach([
    { name: 'Antique' },
    { name: 'Cursed' },
    { name: 'Skill' },
    { name: 'Lower Reagent Cost', value: 1 },
    { name: 'Spell Damage Increase', value: '1-25' },
    { name: 'Lower Mana Cost', value: '1-8' },
    { name: 'Defense Chance Increase', value: '1-15' },
    { name: 'Hit Chance Increase', value: '1-15' },
    { name: 'Damage Increase', value: '1-50' },
    { name: 'Energy Reduction', value: '1-15' },
    { name: 'Fire Reduction', value: '1-15' },
    { name: 'Physical Reduction', value: '1-15' },
    { name: 'Poison Reduction', value: '1-15' },
    { name: 'Cold Reduction', value: '1-15' },
    { name: 'Dexterity', value: 1 },
    { name: 'Strength', value: 1 },
    { name: 'Enhance Potion', value: '1-20' },
  ]);


};
