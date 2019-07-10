import { OWEnumService } from "./EnumService";
import { OWConditionService } from "./ConditionService";
import { OWInventoryService } from "./InventoryService";
import { ICharacter, IInventory, IArmorInstance, IArmorInstanceDamageReductions, IJewelryInstance, IJewelryInstanceAttributes, IJewelryAttribute, IActiveCondition } from "../openworld";

//var DamageTypeEnum = EnumService.DamageType();

declare var ConditionService: OWConditionService;
declare var InventoryService: OWInventoryService;
declare var EnumService: OWEnumService;

export class OWCharacterService {
  async prepForDelivery(character: ICharacter, all?: boolean): Promise<ICharacter> {
    // first, populate all of the public stuff
    if (character.conditions && await ConditionService.hasHidden(<IActiveCondition[]>character.conditions)) {
      character.hidden = true;
    }
    if (all) {
      //populate all of the private data as well
      await ConditionService.populateConditions(character, 'character');
      character.inventory = await InventoryService.populateAllAndFlatten(character.inventory);
      var resists = await this.calculateResists(character);
      character = {
        ...character,
        ...resists
      };
      return await ConditionService.getProxy(character, 'character');
    }
    return character;
  }

  async calculateResists(character: ICharacter): Promise<any> {
    var resists: any = {};
    resists[EnumService.DamageType().PHYSICAL.code] = 0;
    resists[EnumService.DamageType().FIRE.code] = 0;
    resists[EnumService.DamageType().COLD.code] = 0;
    resists[EnumService.DamageType().POISON.code] = 0;
    resists[EnumService.DamageType().ENERGY.code] = 0;

    // for armor, we have a map of the resistances
    if ((<IInventory>character.inventory).armor) {
      for (var armor of (<IInventory>character.inventory).armor) {
        if ((<IArmorInstance>armor).equipped) {
          for (var reduction of (<IArmorInstance>armor).reductions) {
            var dmgType = EnumService.findByName((<IArmorInstanceDamageReductions>reduction).name, EnumService.DamageType());
            resists[dmgType.code] += (<IArmorInstanceDamageReductions>reduction).value;
          }
        }
      }
    }

    //for jewelry, we have to look at the attributes and map the attribute name to a resist
    var dmgTypes = EnumService.findAll(EnumService.DamageType());
    if ((<IInventory>character.inventory).jewelry) {
      for (var jewelry of (<IInventory>character.inventory).jewelry) {
        if ((<IJewelryInstance>jewelry).equipped) {
          for (var attr of (<IJewelryInstance>jewelry).attributes) {
            for (dmgType of dmgTypes) {
              if ((<IJewelryInstanceAttributes>attr).name === (dmgType.name + ' Reduction')) {
                resists[dmgType.code] += (<IJewelryInstanceAttributes>attr).value;
              }
            }
          }
        }
      }
    }

    return {
      resistPh: Math.max(character.baseResist, resists[EnumService.DamageType().PHYSICAL.code]),
      resistF: Math.max(character.baseResist, resists[EnumService.DamageType().FIRE.code]),
      resistC: Math.max(character.baseResist, resists[EnumService.DamageType().COLD.code]),
      resistP: Math.max(character.baseResist, resists[EnumService.DamageType().POISON.code]),
      resistE: Math.max(character.baseResist, resists[EnumService.DamageType().ENERGY.code]),
    };
  }

};
module.exports = new OWCharacterService();
