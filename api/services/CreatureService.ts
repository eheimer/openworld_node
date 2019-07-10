import { ICreatureInstance, IMonster, IMonsterAction, IAction, IDamageType, ICondition, IInventory, IMonsterLoot, IItemCategory, IActiveCondition, IArmorInstance, IWeaponInstance, IJewelryInstance, ISpellbookInstance } from "../openworld";
import { OWMonsterService } from "./MonsterService";
import { OWInventoryService } from "./InventoryService";
import { OWDamageService } from "./DamageService";
import { OWEnumService } from "./EnumService";
import { OWConditionService } from "./ConditionService";
import { OWRandomService } from "./RandomService";

declare var Monster: IMonster;
declare var CreatureInstance: ICreatureInstance;
declare var MonsterAction: IMonsterAction;
declare var ActiveCondition: IActiveCondition;
declare var Condition: ICondition;
declare var Inventory: IInventory;
declare var MonsterLoot: IMonsterLoot;
declare var ArmorInstance: IArmorInstance;
declare var WeaponInstance: IWeaponInstance;
declare var JewelryInstance: IJewelryInstance;
declare var SpellbookInstance: ISpellbookInstance;
declare var MonsterService: OWMonsterService;
declare var RandomService: OWRandomService;
declare var InventoryService: OWInventoryService;
declare var DamageService: OWDamageService;
declare var EnumService: OWEnumService;
declare var ConditionService: OWConditionService;

export class OWCreatureService {
  /**
   * Generate a creature from a monster definition, save it to the database, and return it
   *
   * @param {*} monsterid
   */
  async generateCreature(monsterId: number): Promise<ICreatureInstance> {
    var monster = await Monster.findOne({
      id: monsterId
    });
    var nextAction: IMonsterAction = await MonsterService.getRandomAction(monster.id);
    var orighp = RandomService.getRandomInRange(monster.hp);
    var instance: ICreatureInstance = await CreatureInstance.create({
      monster: monster.id,
      name: monster.name,
      karma: monster.karma,
      gold: RandomService.getRandomInRange(monster.gold),
      orighp: orighp,
      hp: orighp,
      fireResist: RandomService.getRandomInRange(monster.resistF),
      coldResist: RandomService.getRandomInRange(monster.resistC),
      poisonResist: RandomService.getRandomInRange(monster.resistP),
      energyResist: RandomService.getRandomInRange(monster.resistE),
      physicalResist: RandomService.getRandomInRange(monster.resistPh),
      magery: RandomService.getRandomInRange(monster.magery),
      evalInt: RandomService.getRandomInRange(monster.evalInt),
      tactics: RandomService.getRandomInRange(monster.tactics),
      resistSpell: RandomService.getRandomInRange(monster.resistSpell),
      anatomy: RandomService.getRandomInRange(monster.anatomy),
      strength: RandomService.getRandomInRange(monster.strength),
      dexterity: RandomService.getRandomInRange(monster.dexterity),
      intelligence: RandomService.getRandomInRange(monster.intelligence),
      baseDmg: RandomService.getRandomInRange(monster.baseDmg),
      nextAction: nextAction.id,
    }).fetch();
    return instance;
  }

  /**
   * Prep the creature for delivery back to the client.  We essentially attach needed data from contained
   * objects onto the creature itself and eliminate the contained objects in order to reduce payload and
   * make the object easier to deal with on the client.  This method should not be used for anything other
   * than touching up right before sending back to the client.
   *
   * @param {*} creature
   */
  async prepForDelivery(creature: ICreatureInstance) {
    await this.populateAll(creature);
    creature.loot = await InventoryService.populateAllAndFlatten(creature.loot);
    if (!creature.nextAction) {
      await this.setNextAction(creature);
    }
    await this.processMonster(creature);
    if (!(<IMonsterAction>creature.nextAction).id) {
      await this.populateNextAction(creature);
    }
    await this.processAction(creature);

    creature.hp = Math.round((creature.hp / creature.orighp) * 100);
    if (creature.hp <= 0) {
      creature.dead = true;
    }
    creature.orighp = undefined;

    if (await ConditionService.hasHidden(<IActiveCondition[]>creature.conditions)) {
      creature.hidden = true;
    }

    if (await ConditionService.hasProvoked(<IActiveCondition[]>creature.conditions)) {
      creature.provoked = true;
    }

    return await ConditionService.getProxy(creature, 'creature');
  }

  async setNextAction(creature: ICreatureInstance) {
    creature.nextAction = await MonsterService.getRandomAction(<number>(<IMonster>creature.monster).id);
    await CreatureInstance.update({
      id: creature.id
    }, {
        nextAction: (<IMonsterAction>creature.nextAction).id
      });
  }

  async getCreatureWithNextAction(creatureId: number) {
    var creature = await CreatureInstance.findOne({
      id: creatureId
    }).populate('nextAction');
    await this.setNextAction(creature);
    await this.processAction(creature);
    return creature;
  }

  async populateAll(creature: ICreatureInstance) {
    if (!creature) {
      return;
    }
    await this.populateMonster(creature);
    await this.populateNextAction(creature);
    await ConditionService.populateConditions(creature, 'creature');
  }

  async populateMonster(creature: ICreatureInstance) {
    if (!creature.monster) {
      return;
    }
    var monsterId: number = <number>(<IMonster>creature.monster).id ? <number>(<IMonster>creature.monster).id : <number>creature.monster;
    creature.monster = await Monster.findOne({
      id: monsterId
    }).populate('damageType').populate('breathDmgType');
  }

  async populateNextAction(creature: ICreatureInstance) {
    if (!creature.nextAction) {
      return;
    }
    var id: number = <number>(<IMonsterAction>creature.nextAction).id;
    var actionId: number = id || <number>creature.nextAction;
    creature.nextAction = await MonsterAction.findOne({
      id: actionId
    }).populate('action');
  }

  /**
   * Take values from the Monster and put them on the creature, so they're easier for the client to use and payload is reduced
   * Additional fields added:
   *    aggroPriority
   *    imgUrl
   * @param {*} creature
   */
  async processMonster(creature: ICreatureInstance) {
    if (!creature.monster) {
      return;
    }
    var m = <IMonster>creature.monster;
    creature.aggroPriority = m.aggroPriority;
    creature.taming = m.taming;
    creature.imgUrl = await MonsterService.generateImageUrl(m.name);
    //finally, remove monster to reduce payload
    creature.monster = <number>m.id;
  }

  /**
   * Take values from the MonsterAction and Action and put them on the creature, so they're easier for the client to use
   * Additional fields added:
   *    initiative
   *    actionName
   *    actionValue
   *    actionDescription
   *    actionDmgType
   * @param {*} creature
   */
  async processAction(creature: ICreatureInstance) {
    var wrapped = await ConditionService.getProxy(creature, 'creature');
    if (!creature.nextAction) {
      return;
    }
    var monsterAction = <IMonsterAction>creature.nextAction;
    var action = <IAction>monsterAction.action;

    creature.initiative = action.initiative;
    creature.actionName = action.name;
    creature.actionValue = monsterAction.value;
    creature.actionDescription = monsterAction.description;

    //short circuit if creature has action-overriding conditions
    var actionReplace = await ConditionService.getActionFromConditions(<IActiveCondition[]>creature.conditions);
    if (actionReplace) {
      creature.initiative = undefined;
      creature.actionName = actionReplace;
      creature.actionValue = undefined;
      creature.actionDescription = undefined;
      return;
    }

    //calculate any needed values
    if (action.name.toLowerCase() === 'melee') {
      creature.actionValue = wrapped.baseDmg;
      creature.actionDmgType = wrapped.damageType;
      creature.actionDescription = '';
    }
    if (action.name.toLowerCase() === 'breath weapon') {
      creature.actionValue = Math.round(creature.hp / 5);
      creature.actionDmgType = wrapped.breathDmgType;
      creature.actionDescription = '';
    }
    if (creature.actionDmgType && (<IDamageType>creature.actionDmgType).name === EnumService.DamageType().CHAOS.name) {
      creature.actionDmgType = await DamageService.getChaosDamageType();
    }
    if (creature.actionValue === 0) {
      //use default action value if monsteraction value is not defined
      creature.actionValue = action.value;
      creature.actionDescription = action.description;
    }
    //finally, remove nextAction to reduce payload
    creature.nextAction = <number>(<IMonsterAction>creature.nextAction).id;
  }

  async nextActionsForEach(creatures: ICreatureInstance[]) {
    for (var creature of creatures) {
      await this.populateAll(creature);
      await this.setNextAction(creature);
    }
  }

  async nextRoundForEach(creatures: ICreatureInstance[]) {
    var death = [];
    for (var creature of creatures) {
      var activeConditions = await ActiveCondition.find({
        creature: creature.id
      }).populate('condition');
      for (var c of activeConditions) {
        if (await ConditionService.nextRound(c)) {
          var ac: ICondition = await Condition.findOne({
            id: c.condition.id
          }).populate('damageType');
          if (c.damage) {
            var result = await CreatureInstance.takeDamage(creature.id, c.damage, (<IDamageType>ac.damageType).name);
            if (result.death) {
              ActiveCondition.destroy({
                creature: creature.id
              });
              death[death.length] = creature.id;
            }
          }
        }
      }
    }
    return {
      death: death
    };
  }

  async dead(creature: ICreatureInstance) {
    //generate loot
    var inventory: IInventory = await Inventory.create({}).fetch();

    var genGuide: IMonsterLoot[] = await MonsterLoot.find({
      monster: creature.monster
    }).populate('category');

    // console.log({
    //   genGuide
    // });

    for (var gen of genGuide) {
      switch ((<IItemCategory>gen.category).name) {
        case EnumService.ItemCategory().ENCH_REG.name:
          break;
        case EnumService.ItemCategory().FOOD.name:
          break;
        case EnumService.ItemCategory().GEM.name:
          break;
        case EnumService.ItemCategory().MAG_ITEM.name:
          // for each qty, equal chance of weapon,armor,jewelry,spellbook,shield,instrument
          var itemAccessors = [ArmorInstance, WeaponInstance, JewelryInstance, SpellbookInstance];
          for (var i = 0; i < gen.qty; i++) {
            var accessor = RandomService.getOneRandomItem(itemAccessors, undefined, false);
            await accessor.generateLoot(gen.level, inventory.id);
          }
          break;
        case EnumService.ItemCategory().MAG_REG.name:
          break;
        case EnumService.ItemCategory().MAP.name:
          break;
        case EnumService.ItemCategory().MISC.name:
          break;
        case EnumService.ItemCategory().NEC_REG.name:
          break;
        case EnumService.ItemCategory().POTION.name:
          break;
        case EnumService.ItemCategory().TOOL.name:
          break;
        case EnumService.ItemCategory().WONDROUS.name:
          break;
        default:
          break; //unknown category
      }
    }

    await CreatureInstance.update({
      id: creature.id
    }, {
        loot: inventory.id
      });
  }
};

module.exports = new OWCreatureService();