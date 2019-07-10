import { IBattle, ICreatureInstance, ICharacter } from '../openworld';
import { OWCreatureService } from './CreatureService';
import { OWCharacterService } from './CharacterService';

declare var Battle: IBattle;
declare var CreatureService: OWCreatureService;
declare var CharacterService: OWCharacterService;

export class OWBattleService {
  /**
   * Prepare a battle object for sending back to the client.  This should not be used for any other
   * purpose, as it can make changes to the underlying objects that are not intended to be written
   * back to the database.
   * @param {number} battleId
   */

  public async prepForDelivery(battleId: number): Promise<IBattle> {
    var battle: IBattle = await Battle.findOne({
      id: battleId
    }).populate('enemies').populate('friendlies').populate('participants');
    if (!battle) {
      return;
    }

    try {
      battle.enemies = await this.prepCreatures(<ICreatureInstance[]>battle.enemies);
      battle.friendlies = await this.prepCreatures(<ICreatureInstance[]>battle.friendlies);
      battle.participants = await this.prepCharacters(<ICharacter[]>battle.participants);
    } catch (err) {
      console.error('caught error prepping creatures', err);
    }
    return battle;
  }

  /**
   * Prep the creatures for delivery back to the client.  This should not be used for any other purpose,
   * as it can make changes to the underlying objects that are not intended to be written back to the
   * database.
   * @param {*} arr
   */
  protected async prepCreatures(arr: ICreatureInstance[]): Promise<ICreatureInstance[]> {
    var prepped: ICreatureInstance[] = [];
    for (var creature of arr) {
      this.AddCreatureToArrayWithCount(prepped, await CreatureService.prepForDelivery(creature));
    }
    await prepped.sort(this.sortByInitiative);
    return prepped;
  }

  protected AddCreatureToArrayWithCount(arr: ICreatureInstance[], creature: ICreatureInstance): void {
    creature.counter = 1;
    for (let element of arr) {
      if (element.monster === creature.monster) {
        creature.counter++;
      }
    }
    arr[arr.length] = creature;
  }

  protected async prepCharacters(arr: ICharacter[]): Promise<ICharacter[]> {
    var prepped = [];
    for (var character of arr) {
      prepped.push(await CharacterService.prepForDelivery(character));
    }
    return prepped;
  }

  protected sortByInitiative(a: ICreatureInstance, b: ICreatureInstance): number {
    //if a has an initiative and b doesn't, a is greater
    //if b has an initiative and a doesn't, b is greater
    //if neither has an initiative, they are equal
    //if both have an initiative, compare initiative values
    if (!a.initiative) {
      if (b.initiative) {
        return -1;
      }
      if (!b.initiative) {
        return 0;
      }
    }
    if (!b.initiative) {
      if (a.initiative) {
        return 1;
      }
    }
    if (a.initiative > b.initiative) {
      return 1;
    }
    if (b.initiative > a.initiative) {
      return -1;
    }
    return 0;
  }
};

module.exports = new OWBattleService();