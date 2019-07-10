import { IWeaponInstance, IArmorInstance, IJewelryInstance, ISpellbookInstance, ISlayerType, IDamageType, ISkill } from "../openworld";
import { Model } from "waterline";
import { OWRandomService } from "./RandomService";

declare var WeaponInstance: IWeaponInstance;
declare var ArmorInstance: IArmorInstance;
declare var SpellbookInstance: ISpellbookInstance;
declare var JewelryInstance: IJewelryInstance;
declare var RandomService: OWRandomService;
declare var SlayerType: ISlayerType;
declare var DamageType: IDamageType;
declare var Skill: ISkill;

export class OWLootService {
  getItemAccessors(): any {
    var accessors = {
      weapons: WeaponInstance,
      armor: ArmorInstance,
      jewelry: JewelryInstance,
      spellbooks: SpellbookInstance
    };
    return accessors;
  }

  getItemAccessor(key: string): Model {
    return this.getItemAccessors()[key];
  }

  async createInstanceAttributes(accessor: Model, attributes: any[], idprop: string, id: number) {
    var instances = [];
    for (var att of attributes) {
      var instance: any = {
        attribute: att.id
      };
      instance[idprop] = id;
      if (att.value) {
        instance.value = RandomService.getRandomInRange(att.value);
      }
      if (att.name === 'Slayer') {
        instance.slayer = RandomService.getOneRandomItem(await SlayerType.find()).id;
      }
      if (att.name === 'Skill') {
        instance.skill = RandomService.getOneRandomItem(await Skill.find()).id;
      }
      if (att.name === 'Damage Eater') {
        instance.damageType = RandomService.getOneRandomItem(await DamageType.find({
          chaos: true
        })).id;
      }
      instances.push(instance);
    }
    await accessor.createEach(instances);
  }
};

module.exports = new OWLootService();