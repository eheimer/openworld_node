var SkillEnum = require('../api/services/EnumService').Skill();

module.exports = async function () {
  /**
   * Skills
   */
  for(var skill in SkillEnum){
    await Skill.create(SkillEnum[skill]);
  }

};
