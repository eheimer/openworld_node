/**
 *  This file eliminates all of the min/max fields and replaces them with a single range field in the format "{min}-{max}"
 *  Before running this file, the models need to have both the individual min/max fields and the new combined field referenced here
 *  After running this file, the models can be updated to remove the individual min/max fields.
 * 
 *  If you ever need to reset the data using the 'xxx_inital*.js' files (i.e. by using --drop) you will need to reset the models the
 *  version prior to the introduction of this file, then run with --drop, then change the update the models back to the latest version
 */
module.exports = async function () {
  /**
   * modify condition damage to be a range rather than separate min/max fields
   */
  var conditions = await Condition.find();
  for(var cond of conditions){
    if(cond.damageMin && cond.damageMax){
      if(cond.damageMin === cond.damageMax){
        if(cond.damageMin === 0){
          cond.damage = null;
        } else {
          cond.damage = cond.damageMin;
        }
      } else {
        cond.damage = cond.damageMin + '-' + cond.damageMax;
      }
      await Condition.update({id: cond.id},{ damage: cond.damage });
    }
  }

  /**
   * modify monster min/max fields to be a single range field
   */
  var monsters = await Monster.find();
  var monsterFields = ['gold','hp','bard','magery','evalInt','tactics','resistSpell','anatomy','strength','dexterity','intelligence','baseDmg','fire','cold','poison','energy','physical'];
  var monsterFieldMap = {
    fire: 'resistF',
    cold: 'resistC',
    poison: 'resistP',
    energy: 'resistE',
    physical: 'resistPh'
  };
  for(var monster of monsters){
    var updates = {};
    for( var field of monsterFields ){
      if(monster[field + 'Min'] && monster[field + 'Max']){
        var destField = monsterFieldMap[field];
        if(!destField){
          destField = field;
        }
        if(monster[field + 'Min'] === monster[field + 'Max']){
          if(monster[field + 'Min'] === 0){
            updates[destField] = null;
          } else {
            updates[destField] = monster[field + 'Min'];
          }
        } else {
          updates[destField] = monster[field + 'Min'] + '-' + monster[field + 'Max'];
        }
      }
    }
    await Monster.update({id:monster.id},updates);
  }

  var weapons = await Weapon.find();
  for(var weapon of weapons){
    if(weapon.damageMin && weapon.damageMax){
      if(weapon.damageMin === weapon.damageMax){
        if(weapon.damageMin === 0){
          weapon.damage = null;
        } else {
          weapon.damage = weapon.damageMin;
        }
      } else {
        weapon.damage = weapon.damageMin + '-' + weapon.damageMax;
      }
      await Weapon.update({id: weapon.id},{ damage: weapon.damage });
    }
  }

  var attribs = await WeaponAttribute.find();
  for(var attrib of attribs){
    if(attrib.min && attrib.max){
      if(attrib.min === attrib.max){
        if(attrib.min === 0){
          attrib.value = null;
        } else {
          attrib.value = attrib.min;
        }
      } else {
        attrib.value = attrib.min + '-' + attrib.max;
      }
      await WeaponAttribute.update({id: attrib.id},{ value: attrib.value });
    }
  }

};
