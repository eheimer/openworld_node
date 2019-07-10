import { Model } from "waterline";
import { IActiveCondition, ICondition } from "../openworld";
import { OWEnumService } from "./EnumService";
import { OWRandomService } from "./RandomService";

declare var ActiveCondition: IActiveCondition;
declare var Condition: ICondition;
declare var RandomService: OWRandomService;
declare var EnumService: OWEnumService;

export class OWConditionService {

  async populateConditions(entity: any, entityType: string) {
    entity.conditions = await ActiveCondition.findAllByEntity(entity.id, entityType);
  }

  /**
   * Returns a Proxy-wrapped object for performing calculations with conditional effects applied
   * @param {*} entity The Character or CreatureInstance to be wrapped
   */
  async getProxy(entity: any, entityType: string) {
    var wrapped = entity;
    if (await this.hasCorpseskin(entity.conditions)) {
      wrapped = new Proxy(wrapped, this.conditionProxyHandler(Condition.corpseskinEffect));
    }
    if (await this.hasDiscord(entity.conditions)) {
      wrapped = new Proxy(wrapped, this.conditionProxyHandler(Condition.discordEffect));
    }
    if (await this.hasArmorCorruption(entity.conditions)) {
      wrapped = new Proxy(wrapped, this.conditionProxyHandler(Condition.armorcorruptionEffect));
    }
    return wrapped;
  }

  async applyCondition(conditionId: number, entityId: number, entityType: string) {
    var condition = await Condition.findOne({
      id: conditionId
    });
    if (condition) {
      var actives = await ActiveCondition.findAllByEntity(entityId, entityType);

      //consider paraylze
      if (Condition.isParalyze(condition) && await this.hasParalyze(actives)) {
        return;
      }

      //consider overrides
      var cancels = [];
      for (var active of actives) {
        if (active.condition.overrides && active.condition.overrides.includes(condition.id)) {
          return;
        }
        if (condition.overrides && condition.overrides.includes(active.condition.id)) {
          cancels[cancels.length] = active.id;
        }
      }

      //delete any that this new condition overrides
      if (cancels.length > 0) {
        await ActiveCondition.destroy({
          id: {
            in: cancels
          }
        });
      }
      //create the new one
      var activeCondition: any = {};
      activeCondition.condition = conditionId;
      activeCondition[entityType] = entityId;
      if (condition.damage) {
        activeCondition.damage = RandomService.getRandomInRange(condition.damage);
      }
      if (condition.duration) {
        activeCondition.roundsRemaining = condition.duration;
      }
      if (condition.delay) {
        activeCondition.cooldownRemaining = condition.delay;
      } else if (condition.cooldown) {
        activeCondition.cooldownRemaining = condition.cooldown;
      }
      return await ActiveCondition.create(activeCondition);
    }
  }

  /**
   * Process the condition, update cooldowns an remove if expired
   * return true if condition damage takes effect
   *
   * @param {*} a
   */
  async nextRound(a: IActiveCondition): Promise<boolean> {
    //make sure we have all the data we need
    a = await ActiveCondition.returnOrFindWithCondition(a);
    var takesEffect = false;
    var expires = false;

    //decrement cooldownRemaining and fire when it reaches 0
    //reset to the condition cooldown value, if any
    if (a.cooldownRemaining && !--a.cooldownRemaining) {
      takesEffect = true;
      //condition expires if cooldown reaches 0 and roundsRemaining is already at 0
      if (!a.roundsRemaining) {
        expires = true;
      } else {
        if ((<ICondition>a.condition).cooldown) {
          a.cooldownRemaining = (<ICondition>a.condition).cooldown;
        }
      }
    }

    //decrement roundsRemaining and remove condition when it
    //reaches 0.
    if ((a.roundsRemaining && !--a.roundsRemaining)) {
      expires = true;
    }

    //remove or update
    if (expires) {
      await ActiveCondition.destroyOne({
        id: a.id
      });
    } else {
      await ActiveCondition.update({
        id: a.id
      }, {
          cooldownRemaining: a.cooldownRemaining,
          roundsRemaining: a.roundsRemaining
        });
    }

    return takesEffect;
  }

  /**
   * Examines an array of ActiveConditions and returns the id if it contains a poison condition
   * @param {*} arr
   */
  async hasPoison(arr: IActiveCondition[]): Promise<boolean | number> {
    for (var condition of arr) {
      if (await ActiveCondition.isPoison(condition)) {
        return <number>condition.id;
      }
    }
    return false;
  }

  async hasParalyze(arr: IActiveCondition[]): Promise<boolean | number> {
    for (var condition of arr) {
      if (await ActiveCondition.isParalyze(condition)) {
        return <number>condition.id;
      }
    }
    return false;
  }

  async hasBleed(arr: IActiveCondition[]): Promise<boolean | number> {
    return await this.hasConditionNamed(arr, EnumService.Condition().BLEED.name);
  }

  async hasCorpseskin(arr: IActiveCondition[]): Promise<boolean | number> {
    return await this.hasConditionNamed(arr, EnumService.Condition().CORPSESKIN.name);
  }

  async hasDiscord(arr: IActiveCondition[]): Promise<boolean | number> {
    return await this.hasConditionNamed(arr, EnumService.Condition().DISCORD.name);
  }

  async hasArmorCorruption(arr: IActiveCondition[]): Promise<boolean | number> {
    return await this.hasConditionNamed(arr, EnumService.Condition().ARMOR_CORRUPTION.name);
  }

  async hasHidden(arr: IActiveCondition[]): Promise<boolean | number> {
    return await this.hasConditionNamed(arr, EnumService.Condition().HIDDEN.name);
  }

  async hasMortalStrike(arr: IActiveCondition[]): Promise<boolean | number> {
    return await this.hasConditionNamed(arr, EnumService.Condition().MORTAL_STRIKE.name);
  }

  async hasProvoked(arr: IActiveCondition[]) {
    return await this.hasConditionNamed(arr, EnumService.Condition().PROVOKE.name);
  }

  async hasConditionNamed(arr: IActiveCondition[], name: string): Promise<boolean | number> {
    for (var condition of arr) {
      condition = await ActiveCondition.returnOrFindWithCondition(condition);
      if ((<ICondition>condition.condition).name === name) {
        return <number>condition.id;
      }
    }
    return false;
  }

  async getActionFromConditions(arr: IActiveCondition[]) {
    var action = '';
    for (var condition of arr) {
      if ((<ICondition>condition.condition).actionReplace) {
        action += (' ' + (<ICondition>condition.condition).actionReplace + ' ');
      }
    }
    if (action.trim().length > 0) {
      return action.trim();
    }
    return false;
  }

  conditionProxyHandler(effects: any[]) {
    return {
      effects: effects,
      get: function (target: any, name: string) {
        //if we contain a reduc for 'name', reduce it and return it, otherwise pass it through to target
        for (var effect of this.effects) {
          if (effect.name === name) {
            if (effect.type === '*') {
              return Math.round(target[name] * effect.value);
            }
            if (effect.type === '+') {
              return target[name] + effect.value;
            }
            return target[name];
          }
        }
        return target[name];
      }
    };
  }
}

module.exports = new OWConditionService();