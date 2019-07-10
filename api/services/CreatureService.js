"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var OWCreatureService = (function () {
    function OWCreatureService() {
    }
    OWCreatureService.prototype.generateCreature = function (monsterId) {
        return __awaiter(this, void 0, void 0, function () {
            var monster, nextAction, orighp, instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Monster.findOne({
                            id: monsterId
                        })];
                    case 1:
                        monster = _a.sent();
                        return [4, MonsterService.getRandomAction(monster.id)];
                    case 2:
                        nextAction = _a.sent();
                        orighp = RandomService.getRandomInRange(monster.hp);
                        return [4, CreatureInstance.create({
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
                                nextAction: nextAction.id
                            }).fetch()];
                    case 3:
                        instance = _a.sent();
                        return [2, instance];
                }
            });
        });
    };
    OWCreatureService.prototype.prepForDelivery = function (creature) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.populateAll(creature)];
                    case 1:
                        _b.sent();
                        _a = creature;
                        return [4, InventoryService.populateAllAndFlatten(creature.loot)];
                    case 2:
                        _a.loot = _b.sent();
                        if (!!creature.nextAction) return [3, 4];
                        return [4, this.setNextAction(creature)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [4, this.processMonster(creature)];
                    case 5:
                        _b.sent();
                        if (!!creature.nextAction.id) return [3, 7];
                        return [4, this.populateNextAction(creature)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [4, this.processAction(creature)];
                    case 8:
                        _b.sent();
                        creature.hp = Math.round((creature.hp / creature.orighp) * 100);
                        if (creature.hp <= 0) {
                            creature.dead = true;
                        }
                        creature.orighp = undefined;
                        return [4, ConditionService.hasHidden(creature.conditions)];
                    case 9:
                        if (_b.sent()) {
                            creature.hidden = true;
                        }
                        return [4, ConditionService.hasProvoked(creature.conditions)];
                    case 10:
                        if (_b.sent()) {
                            creature.provoked = true;
                        }
                        return [4, ConditionService.getProxy(creature, 'creature')];
                    case 11: return [2, _b.sent()];
                }
            });
        });
    };
    OWCreatureService.prototype.setNextAction = function (creature) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = creature;
                        return [4, MonsterService.getRandomAction(creature.monster.id)];
                    case 1:
                        _a.nextAction = _b.sent();
                        return [4, CreatureInstance.update({
                                id: creature.id
                            }, {
                                nextAction: creature.nextAction.id
                            })];
                    case 2:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    OWCreatureService.prototype.getCreatureWithNextAction = function (creatureId) {
        return __awaiter(this, void 0, void 0, function () {
            var creature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, CreatureInstance.findOne({
                            id: creatureId
                        }).populate('nextAction')];
                    case 1:
                        creature = _a.sent();
                        return [4, this.setNextAction(creature)];
                    case 2:
                        _a.sent();
                        return [4, this.processAction(creature)];
                    case 3:
                        _a.sent();
                        return [2, creature];
                }
            });
        });
    };
    OWCreatureService.prototype.populateAll = function (creature) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!creature) {
                            return [2];
                        }
                        return [4, this.populateMonster(creature)];
                    case 1:
                        _a.sent();
                        return [4, this.populateNextAction(creature)];
                    case 2:
                        _a.sent();
                        return [4, ConditionService.populateConditions(creature, 'creature')];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    OWCreatureService.prototype.populateMonster = function (creature) {
        return __awaiter(this, void 0, void 0, function () {
            var monsterId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!creature.monster) {
                            return [2];
                        }
                        monsterId = creature.monster.id ? creature.monster.id : creature.monster;
                        _a = creature;
                        return [4, Monster.findOne({
                                id: monsterId
                            }).populate('damageType').populate('breathDmgType')];
                    case 1:
                        _a.monster = _b.sent();
                        return [2];
                }
            });
        });
    };
    OWCreatureService.prototype.populateNextAction = function (creature) {
        return __awaiter(this, void 0, void 0, function () {
            var id, actionId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!creature.nextAction) {
                            return [2];
                        }
                        id = creature.nextAction.id;
                        actionId = id || creature.nextAction;
                        _a = creature;
                        return [4, MonsterAction.findOne({
                                id: actionId
                            }).populate('action')];
                    case 1:
                        _a.nextAction = _b.sent();
                        return [2];
                }
            });
        });
    };
    OWCreatureService.prototype.processMonster = function (creature) {
        return __awaiter(this, void 0, void 0, function () {
            var m, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!creature.monster) {
                            return [2];
                        }
                        m = creature.monster;
                        creature.aggroPriority = m.aggroPriority;
                        creature.taming = m.taming;
                        _a = creature;
                        return [4, MonsterService.generateImageUrl(m.name)];
                    case 1:
                        _a.imgUrl = _b.sent();
                        creature.monster = m.id;
                        return [2];
                }
            });
        });
    };
    OWCreatureService.prototype.processAction = function (creature) {
        return __awaiter(this, void 0, void 0, function () {
            var wrapped, monsterAction, action, actionReplace, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ConditionService.getProxy(creature, 'creature')];
                    case 1:
                        wrapped = _b.sent();
                        if (!creature.nextAction) {
                            return [2];
                        }
                        monsterAction = creature.nextAction;
                        action = monsterAction.action;
                        creature.initiative = action.initiative;
                        creature.actionName = action.name;
                        creature.actionValue = monsterAction.value;
                        creature.actionDescription = monsterAction.description;
                        return [4, ConditionService.getActionFromConditions(creature.conditions)];
                    case 2:
                        actionReplace = _b.sent();
                        if (actionReplace) {
                            creature.initiative = undefined;
                            creature.actionName = actionReplace;
                            creature.actionValue = undefined;
                            creature.actionDescription = undefined;
                            return [2];
                        }
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
                        if (!(creature.actionDmgType && creature.actionDmgType.name === EnumService.DamageType().CHAOS.name)) return [3, 4];
                        _a = creature;
                        return [4, DamageService.getChaosDamageType()];
                    case 3:
                        _a.actionDmgType = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (creature.actionValue === 0) {
                            creature.actionValue = action.value;
                            creature.actionDescription = action.description;
                        }
                        creature.nextAction = creature.nextAction.id;
                        return [2];
                }
            });
        });
    };
    OWCreatureService.prototype.nextActionsForEach = function (creatures) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, creatures_1, creature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, creatures_1 = creatures;
                        _a.label = 1;
                    case 1:
                        if (!(_i < creatures_1.length)) return [3, 5];
                        creature = creatures_1[_i];
                        return [4, this.populateAll(creature)];
                    case 2:
                        _a.sent();
                        return [4, this.setNextAction(creature)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3, 1];
                    case 5: return [2];
                }
            });
        });
    };
    OWCreatureService.prototype.nextRoundForEach = function (creatures) {
        return __awaiter(this, void 0, void 0, function () {
            var death, _i, creatures_2, creature, activeConditions, _a, activeConditions_1, c, ac, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        death = [];
                        _i = 0, creatures_2 = creatures;
                        _b.label = 1;
                    case 1:
                        if (!(_i < creatures_2.length)) return [3, 9];
                        creature = creatures_2[_i];
                        return [4, ActiveCondition.find({
                                creature: creature.id
                            }).populate('condition')];
                    case 2:
                        activeConditions = _b.sent();
                        _a = 0, activeConditions_1 = activeConditions;
                        _b.label = 3;
                    case 3:
                        if (!(_a < activeConditions_1.length)) return [3, 8];
                        c = activeConditions_1[_a];
                        return [4, ConditionService.nextRound(c)];
                    case 4:
                        if (!_b.sent()) return [3, 7];
                        return [4, Condition.findOne({
                                id: c.condition.id
                            }).populate('damageType')];
                    case 5:
                        ac = _b.sent();
                        if (!c.damage) return [3, 7];
                        return [4, CreatureInstance.takeDamage(creature.id, c.damage, ac.damageType.name)];
                    case 6:
                        result = _b.sent();
                        if (result.death) {
                            ActiveCondition.destroy({
                                creature: creature.id
                            });
                            death[death.length] = creature.id;
                        }
                        _b.label = 7;
                    case 7:
                        _a++;
                        return [3, 3];
                    case 8:
                        _i++;
                        return [3, 1];
                    case 9: return [2, {
                            death: death
                        }];
                }
            });
        });
    };
    OWCreatureService.prototype.dead = function (creature) {
        return __awaiter(this, void 0, void 0, function () {
            var inventory, genGuide, _i, genGuide_1, gen, _a, itemAccessors, i, accessor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, Inventory.create({}).fetch()];
                    case 1:
                        inventory = _b.sent();
                        return [4, MonsterLoot.find({
                                monster: creature.monster
                            }).populate('category')];
                    case 2:
                        genGuide = _b.sent();
                        _i = 0, genGuide_1 = genGuide;
                        _b.label = 3;
                    case 3:
                        if (!(_i < genGuide_1.length)) return [3, 21];
                        gen = genGuide_1[_i];
                        _a = gen.category.name;
                        switch (_a) {
                            case EnumService.ItemCategory().ENCH_REG.name: return [3, 4];
                            case EnumService.ItemCategory().FOOD.name: return [3, 5];
                            case EnumService.ItemCategory().GEM.name: return [3, 6];
                            case EnumService.ItemCategory().MAG_ITEM.name: return [3, 7];
                            case EnumService.ItemCategory().MAG_REG.name: return [3, 12];
                            case EnumService.ItemCategory().MAP.name: return [3, 13];
                            case EnumService.ItemCategory().MISC.name: return [3, 14];
                            case EnumService.ItemCategory().NEC_REG.name: return [3, 15];
                            case EnumService.ItemCategory().POTION.name: return [3, 16];
                            case EnumService.ItemCategory().TOOL.name: return [3, 17];
                            case EnumService.ItemCategory().WONDROUS.name: return [3, 18];
                        }
                        return [3, 19];
                    case 4: return [3, 20];
                    case 5: return [3, 20];
                    case 6: return [3, 20];
                    case 7:
                        itemAccessors = [ArmorInstance, WeaponInstance, JewelryInstance, SpellbookInstance];
                        i = 0;
                        _b.label = 8;
                    case 8:
                        if (!(i < gen.qty)) return [3, 11];
                        accessor = RandomService.getOneRandomItem(itemAccessors, undefined, false);
                        return [4, accessor.generateLoot(gen.level, inventory.id)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        i++;
                        return [3, 8];
                    case 11: return [3, 20];
                    case 12: return [3, 20];
                    case 13: return [3, 20];
                    case 14: return [3, 20];
                    case 15: return [3, 20];
                    case 16: return [3, 20];
                    case 17: return [3, 20];
                    case 18: return [3, 20];
                    case 19: return [3, 20];
                    case 20:
                        _i++;
                        return [3, 3];
                    case 21: return [4, CreatureInstance.update({
                            id: creature.id
                        }, {
                            loot: inventory.id
                        })];
                    case 22:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    return OWCreatureService;
}());
exports.OWCreatureService = OWCreatureService;
;
module.exports = new OWCreatureService();
