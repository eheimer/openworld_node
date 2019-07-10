import { IMonsterAction } from "../openworld";
import { OWRandomService } from "./RandomService";

declare var MonsterAction: IMonsterAction;
declare var RandomService: OWRandomService;

export class OWMonsterService {

  async getRandomAction(monsterid: number) {
    var actions = await MonsterAction.find({ monster: monsterid }).populate('action');
    var weights = [];
    for (var action of actions) {
      weights[weights.length] = action.weight;
    }
    var i = RandomService.weightedRandom(weights);
    return actions[i];
  }

  generateImageUrl(name: string) {
    var imgurl = '/images/monsters/' + name.replace(' ', '').toLowerCase() + '.png';
    return imgurl;
  }

};

module.exports = new OWMonsterService();