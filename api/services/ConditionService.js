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
var OWConditionService = (function () {
    function OWConditionService() {
    }
    OWConditionService.prototype.populateConditions = function (entity, entityType) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = entity;
                        return [4, ActiveCondition.findAllByEntity(entity.id, entityType)];
                    case 1:
                        _a.conditions = _b.sent();
                        return [2];
                }
            });
        });
    };
    OWConditionService.prototype.getProxy = function (entity, entityType) {
        return __awaiter(this, void 0, void 0, function () {
            var wrapped;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wrapped = entity;
                        return [4, this.hasCorpseskin(entity.conditions)];
                    case 1:
                        if (_a.sent()) {
                            wrapped = new Proxy(wrapped, this.conditionProxyHandler(Condition.corpseskinEffect));
                        }
                        return [4, this.hasDiscord(entity.conditions)];
                    case 2:
                        if (_a.sent()) {
                            wrapped = new Proxy(wrapped, this.conditionProxyHandler(Condition.discordEffect));
                        }
                        return [4, this.hasArmorCorruption(entity.conditions)];
                    case 3:
                        if (_a.sent()) {
                            wrapped = new Proxy(wrapped, this.conditionProxyHandler(Condition.armorcorruptionEffect));
                        }
                        return [2, wrapped];
                }
            });
        });
    };
    OWConditionService.prototype.applyCondition = function (conditionId, entityId, entityType) {
        return __awaiter(this, void 0, void 0, function () {
            var condition, actives, _a, cancels, _i, actives_1, active, activeCondition;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, Condition.findOne({
                            id: conditionId
                        })];
                    case 1:
                        condition = _b.sent();
                        if (!condition) return [3, 8];
                        return [4, ActiveCondition.findAllByEntity(entityId, entityType)];
                    case 2:
                        actives = _b.sent();
                        _a = Condition.isParalyze(condition);
                        if (!_a) return [3, 4];
                        return [4, this.hasParalyze(actives)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        if (_a) {
                            return [2];
                        }
                        cancels = [];
                        for (_i = 0, actives_1 = actives; _i < actives_1.length; _i++) {
                            active = actives_1[_i];
                            if (active.condition.overrides && active.condition.overrides.includes(condition.id)) {
                                return [2];
                            }
                            if (condition.overrides && condition.overrides.includes(active.condition.id)) {
                                cancels[cancels.length] = active.id;
                            }
                        }
                        if (!(cancels.length > 0)) return [3, 6];
                        return [4, ActiveCondition.destroy({
                                id: {
                                    "in": cancels
                                }
                            })];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        activeCondition = {};
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
                        }
                        else if (condition.cooldown) {
                            activeCondition.cooldownRemaining = condition.cooldown;
                        }
                        return [4, ActiveCondition.create(activeCondition)];
                    case 7: return [2, _b.sent()];
                    case 8: return [2];
                }
            });
        });
    };
    OWConditionService.prototype.nextRound = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var takesEffect, expires;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ActiveCondition.returnOrFindWithCondition(a)];
                    case 1:
                        a = _a.sent();
                        takesEffect = false;
                        expires = false;
                        if (a.cooldownRemaining && !--a.cooldownRemaining) {
                            takesEffect = true;
                            if (!a.roundsRemaining) {
                                expires = true;
                            }
                            else {
                                if (a.condition.cooldown) {
                                    a.cooldownRemaining = a.condition.cooldown;
                                }
                            }
                        }
                        if ((a.roundsRemaining && !--a.roundsRemaining)) {
                            expires = true;
                        }
                        if (!expires) return [3, 3];
                        return [4, ActiveCondition.destroyOne({
                                id: a.id
                            })];
                    case 2:
                        _a.sent();
                        return [3, 5];
                    case 3: return [4, ActiveCondition.update({
                            id: a.id
                        }, {
                            cooldownRemaining: a.cooldownRemaining,
                            roundsRemaining: a.roundsRemaining
                        })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2, takesEffect];
                }
            });
        });
    };
    OWConditionService.prototype.hasPoison = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, arr_1, condition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, arr_1 = arr;
                        _a.label = 1;
                    case 1:
                        if (!(_i < arr_1.length)) return [3, 4];
                        condition = arr_1[_i];
                        return [4, ActiveCondition.isPoison(condition)];
                    case 2:
                        if (_a.sent()) {
                            return [2, condition.id];
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, false];
                }
            });
        });
    };
    OWConditionService.prototype.hasParalyze = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, arr_2, condition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, arr_2 = arr;
                        _a.label = 1;
                    case 1:
                        if (!(_i < arr_2.length)) return [3, 4];
                        condition = arr_2[_i];
                        return [4, ActiveCondition.isParalyze(condition)];
                    case 2:
                        if (_a.sent()) {
                            return [2, condition.id];
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, false];
                }
            });
        });
    };
    OWConditionService.prototype.hasBleed = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.hasConditionNamed(arr, EnumService.Condition().BLEED.name)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    OWConditionService.prototype.hasCorpseskin = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.hasConditionNamed(arr, EnumService.Condition().CORPSESKIN.name)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    OWConditionService.prototype.hasDiscord = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.hasConditionNamed(arr, EnumService.Condition().DISCORD.name)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    OWConditionService.prototype.hasArmorCorruption = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.hasConditionNamed(arr, EnumService.Condition().ARMOR_CORRUPTION.name)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    OWConditionService.prototype.hasHidden = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.hasConditionNamed(arr, EnumService.Condition().HIDDEN.name)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    OWConditionService.prototype.hasMortalStrike = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.hasConditionNamed(arr, EnumService.Condition().MORTAL_STRIKE.name)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    OWConditionService.prototype.hasProvoked = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.hasConditionNamed(arr, EnumService.Condition().PROVOKE.name)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    OWConditionService.prototype.hasConditionNamed = function (arr, name) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, arr_3, condition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, arr_3 = arr;
                        _a.label = 1;
                    case 1:
                        if (!(_i < arr_3.length)) return [3, 4];
                        condition = arr_3[_i];
                        return [4, ActiveCondition.returnOrFindWithCondition(condition)];
                    case 2:
                        condition = _a.sent();
                        if (condition.condition.name === name) {
                            return [2, condition.id];
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, false];
                }
            });
        });
    };
    OWConditionService.prototype.getActionFromConditions = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var action, _i, arr_4, condition;
            return __generator(this, function (_a) {
                action = '';
                for (_i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
                    condition = arr_4[_i];
                    if (condition.condition.actionReplace) {
                        action += (' ' + condition.condition.actionReplace + ' ');
                    }
                }
                if (action.trim().length > 0) {
                    return [2, action.trim()];
                }
                return [2, false];
            });
        });
    };
    OWConditionService.prototype.conditionProxyHandler = function (effects) {
        return {
            effects: effects,
            get: function (target, name) {
                for (var _i = 0, _a = this.effects; _i < _a.length; _i++) {
                    var effect = _a[_i];
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
    };
    return OWConditionService;
}());
exports.OWConditionService = OWConditionService;
module.exports = new OWConditionService();
