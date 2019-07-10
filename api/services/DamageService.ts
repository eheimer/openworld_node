import { IDamageType } from "../openworld";

declare var DamageType: IDamageType;

export class OWDamageService {

  /**
   *
   * Chaos damage type represents a random damageType (not including 'd' or 'ch')
   */
  async getChaosDamageType(): Promise<IDamageType> {
    var dmgTypes = await DamageType.find({ chaos: true });
    return dmgTypes[Math.floor(Math.random() * 5)].id;
  }
}

module.exports = new OWDamageService();