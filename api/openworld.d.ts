/**
 * openworld.d.ts 
 *
 * Typescript typings for all of the models defined in /api/models
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-model-typings`)
 */

import { Model } from "waterline";

export interface IArmorAttribute extends Model {
  name: string;
  value: string;
}
export interface IArmorClass extends Model {
  name: string;
  durability: number;
  reductions: IClassDamageReduction[] | number[];
}
export interface IArmorInstance extends Model {
  equipped: boolean;
  damaged: boolean;
  armorClass: IArmorClass | number;
  location: IArmorLocation | number;
  attributes: IArmorInstanceAttributes[] | number[];
  inventory: IInventory | number;
  reductions: IArmorInstanceDamageReductions[] | number[];
  equip(itemId: any): Promise<any>;
  damage(itemId: any): Promise<any>;
  getDurability(itemId: any): Promise<any>;
  generateLoot(level: any, inventoryId: any): Promise<any>;
}
export interface IArmorInstanceAttributes extends Model {
  value: number;
  armor: IArmorInstance | number;
  attribute: IArmorAttribute | number;
  damageType: IDamageType | number;
}
export interface IArmorInstanceDamageReductions extends Model {
  value: number;
  armor: IArmorInstance | number;
  damageType: IDamageType | number;
  name: string;
}
export interface IArmorLocation extends Model {
  name: string;
  location: IEquipLocation | number;
}
export interface IClassDamageReduction extends Model {
  level: number;
  reduction: string;
  armorClass: IArmorClass | number;
  damageType: IDamageType | number;
}
export interface IBattle extends Model {
  round: number;
  participants: ICharacter[] | number[];
  enemies: ICreatureInstance[] | number[];
  friendlies: ICreatureInstance[] | number[];
  game: IGame | number;
  initiator: ICharacter | number;
  publishUpdate(id: any, msg: any): Promise<any>;
}
export interface ICharacter extends Model {
  name: string;
  maxHp: number;
  hp: number;
  dmgIncrease: number;
  baseDmgIncrease: number;
  spellDmgIncrease: number;
  baseResist: number;
  game: IGame | number;
  player: IUser | number;
  battles: IBattle[] | number[];
  inventory: IInventory | number;
  conditions: IActiveCondition[] | number[];
  inBattle(characterId: any, battleId: any): Promise<any>;
  heal(characterId: any, amount: any): Promise<any>;
  takeDamage(characterId: any, amount: any, type: any): Promise<any>;
  hidden: boolean;
}
export interface IEquipLocation extends Model {
  name: string;
}
export interface IActiveCondition extends Model {
  roundsRemaining: number;
  cooldownRemaining: number;
  damage: number;
  condition: ICondition | number;
  creature: ICreatureInstance | number;
  character: ICharacter | number;
  target: ICreatureInstance | number;
  isPoison(active: any): Promise<any>;
  isParalyze(active: any): Promise<any>;
  returnOrFindWithCondition(obj: any): Promise<any>;
  getEntityQuery(entityId: any, entityType: any, otherOptions: any): any;
  findByEntityAndCondition(entityId: any, entityType: any, condition: any): Promise<any>;
  findAllByEntity(entityId: any, entityType: any): Promise<any>;
}
export interface ICondition extends Model {
  name: string;
  actionReplace: string;
  duration: number;
  damage: string;
  delay: number;
  cooldown: number;
  overrides: any;
  removeOnHit: boolean;
  damageMin: number;
  damageMax: number;
  damageType: IDamageType | number;
  returnOrFind(obj: any): Promise<any>;
  isPoison(condition: any): Promise<any>;
  isParalyze(condition: any): Promise<any>;
  discordEffect: any;
  corpseskinEffect: any;
  armorcorruptionEffect: any;
}
export interface IAction extends Model {
  name: string;
  value: number;
  description: string;
  initiative: number;
}
export interface ICreatureInstance extends Model {
  name: string;
  gold: number;
  orighp: number;
  hp: number;
  fireResist: number;
  coldResist: number;
  poisonResist: number;
  energyResist: number;
  physicalResist: number;
  magery: number;
  evalInt: number;
  tactics: number;
  resistSpell: number;
  anatomy: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  baseDmg: number;
  initiative: number;
  tamed: boolean;
  actionName: string;
  actionValue: number;
  actionDescription: string;
  monster: IMonster | number;
  nextAction: IMonsterAction | number;
  conditions: IActiveCondition[] | number[];
  battleAsEnemy: IBattle | number;
  battleAsFriendly: IBattle | number;
  actionDmgType: IDamageType | number;
  loot: IInventory | number;
  owner: ICharacter | number;
  inBattle(creatureId: any, battleId: any): Promise<any>;
  heal(creatureId: any, amount: any): Promise<any>;
  takeDamage(creatureId: any, amount: any, type: any): Promise<any>;
  dead: boolean;
  hidden: boolean;
  provoked: boolean;
  aggroPriority: number;
  taming: string;
  imgUrl: string;
  monsterId: number;
  counter: number;
}
export interface IMonster extends Model {
  name: string;
  hoverStats: string;
  karma: string;
  gold: string;
  alignment: string;
  hp: string;
  bard: string;
  taming: string;
  resistF: string;
  resistC: string;
  resistP: string;
  resistE: string;
  resistPh: string;
  magery: string;
  evalInt: string;
  aggroPriority: number;
  tactics: string;
  resistSpell: string;
  anatomy: string;
  strength: string;
  dexterity: string;
  intelligence: string;
  baseDmg: string;
  preferredFood: string;
  controlSlots: number;
  specials: string;
  goldMin: number;
  goldMax: number;
  hpMin: number;
  hpMax: number;
  bardMin: number;
  bardMax: number;
  fireMin: number;
  fireMax: number;
  coldMin: number;
  coldMax: number;
  poisonMin: number;
  poisonMax: number;
  energyMin: number;
  energyMax: number;
  physicalMin: number;
  physicalMax: number;
  mageryMin: number;
  mageryMax: number;
  evalIntMin: number;
  evalIntMax: number;
  tacticsMin: number;
  tacticsMax: number;
  resistSpellMin: number;
  resistSpellMax: number;
  anatomyMin: number;
  anatomyMax: number;
  strengthMin: number;
  strengthMax: number;
  dexterityMin: number;
  dexterityMax: number;
  intelligenceMin: number;
  intelligenceMax: number;
  baseDmgMin: number;
  baseDmgMax: number;
  actions: IMonsterAction[] | number[];
  damageType: IDamageType | number;
  breathDmgType: IDamageType | number;
  slayers: ISlayerType[] | number[];
}
export interface IMonsterAction extends Model {
  value: number;
  description: string;
  weight: number;
  monster: IMonster | number;
  action: IAction | number;
}
export interface IMonsterClue extends Model {
  trackingLevel: number;
  clue: string;
  monster: IMonster | number;
}
export interface IMonsterLoot extends Model {
  qty: number;
  level: number;
  chance: number;
  monster: IMonster | number;
  category: IItemCategory | number;
}
export interface IDamageType extends Model {
  name: string;
  description: string;
  chaos: boolean;
  display: boolean;
  soundurl: string;
  imgurl: string;
}
export interface IGame extends Model {
  name: string;
  maxPlayers: string;
  owner: IUser | number;
  players: IUser[] | number[];
  characters: ICharacter[] | number[];
  battles: IBattle[] | number[];
}
export interface IInventory extends Model {
  capacity: number;
  limit: boolean;
  weapons: IWeaponInstance[] | number[];
  armor: IArmorInstance[] | number[];
  jewelry: IJewelryInstance[] | number[];
  spellbooks: ISpellbookInstance[] | number[];
  equip(itemId: any, itemType: any): Promise<any>;
  hasRoom(inventoryId: any, count: any): Promise<any>;
  emptySlots(inventoryId: any): Promise<any>;
  slotsAvailable: number;
}
export interface IItemCategory extends Model {
  name: string;
}
export interface IGem extends Model {
  name: string;
  weight: number;
  image: string;
  level: number;
  rarity: IGemRarity | number;
  category: IItemCategory | number;
}
export interface IGemRarity extends Model {
  name: string;
  durability: number;
}
export interface IJewelryAttribute extends Model {
  name: string;
  value: string;
}
export interface IJewelryInstance extends Model {
  equipped: boolean;
  damaged: boolean;
  gem: IGem | number;
  location: IJewelryLocation | number;
  attributes: IJewelryInstanceAttributes[] | number[];
  inventory: IInventory | number;
  equip(itemId: any): Promise<any>;
  damage(itemId: any): Promise<any>;
  getDurability(itemId: any): Promise<any>;
  generateLoot(level: any, inventoryId: any): Promise<any>;
}
export interface IJewelryInstanceAttributes extends Model {
  value: number;
  jewelry: IJewelryInstance | number;
  attribute: IJewelryAttribute | number;
  skill: ISkill | number;
  name: string;
}
export interface IJewelryLocation extends Model {
  name: string;
  location: IEquipLocation | number;
}
export interface IMaterial extends Model {
  name: string;
  weaponDurability: number;
  canSpawn: boolean;
  base: string;
}
export interface IMaterialType extends Model {
  name: string;
}
export interface ISkill extends Model {
  name: string;
  spellbook: boolean;
}
export interface ISpellbookAttribute extends Model {
  name: string;
  value: string;
}
export interface ISpellbookInstance extends Model {
  attributes: ISpellbookInstanceAttributes[] | number[];
  inventory: IInventory | number;
  generateLoot(level: any, inventoryId: any): Promise<any>;
}
export interface ISpellbookInstanceAttributes extends Model {
  attribute: ISpellbookAttribute | number;
  skill: ISkill | number;
  slayerType: ISlayerType | number;
  spellbook: ISpellbookInstance | number;
}
export interface IUser extends Model {
  emailAddress: string;
  password: string;
  fullName: string;
  isSuperAdmin: boolean;
  passwordResetToken: string;
  passwordResetTokenExpiresAt: number;
  stripeCustomerId: string;
  hasBillingCard: boolean;
  billingCardBrand: string;
  billingCardLast4: string;
  billingCardExpMonth: string;
  billingCardExpYear: string;
  emailProofToken: string;
  emailProofTokenExpiresAt: number;
  emailStatus: string;
  emailChangeCandidate: string;
  tosAcceptedByIp: string;
  lastSeenAt: number;
  games: IGame[] | number[];
  characters: ICharacter[] | number[];
  currentGame: IGame | number;
}
export interface ISlayerType extends Model {
  name: string;
  monsters: IMonster[] | number[];
}
export interface ISpecialMove extends Model {
  name: string;
  stamina: number;
}
export interface IWeapon extends Model {
  name: string;
  damage: string;
  range: number;
  speed: number;
  strength: number;
  hand: number;
  damageMin: number;
  damageMax: number;
  skill: IWeaponSkill | number;
  primaryMove: ISpecialMove | number;
  secondaryMove: ISpecialMove | number;
  material: IMaterialType | number;
}
export interface IWeaponAttribute extends Model {
  name: string;
  value: string;
  hand: number;
  min: number;
  max: number;
  skill: IWeaponSkill | number;
}
export interface IWeaponInstance extends Model {
  equipped: boolean;
  damaged: boolean;
  weapon: IWeapon | number;
  attributes: IWeaponInstanceAttributes[] | number[];
  material: IMaterial | number;
  inventory: IInventory | number;
  equip(itemId: any): Promise<any>;
  generateLoot(level: any, inventoryId: any): Promise<any>;
  itemType: string;
  name: string;
  skill: string;
  primary: any;
  secondary: any;
  durability: number;
}
export interface IWeaponInstanceAttributes extends Model {
  value: number;
  weapon: IWeaponInstance | number;
  attribute: IWeaponAttribute | number;
  slayer: ISlayerType | number;
}
export interface IWeaponSkill extends Model {
  name: string;
}
