var ItemCategoryEnum = require('../api/services/EnumService.js').ItemCategory();

module.exports = async function() {
  for (var cat in ItemCategoryEnum){
    await ItemCategory.create(ItemCategoryEnum[cat]);
  }
};
