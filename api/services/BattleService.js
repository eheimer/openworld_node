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
var OWBattleService = (function () {
    function OWBattleService() {
    }
    OWBattleService.prototype.prepForDelivery = function (battleId) {
        return __awaiter(this, void 0, void 0, function () {
            var battle, _a, _b, _c, err_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, Battle.findOne({
                            id: battleId
                        }).populate('enemies').populate('friendlies').populate('participants')];
                    case 1:
                        battle = _d.sent();
                        if (!battle) {
                            return [2];
                        }
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 6, , 7]);
                        _a = battle;
                        return [4, this.prepCreatures(battle.enemies)];
                    case 3:
                        _a.enemies = _d.sent();
                        _b = battle;
                        return [4, this.prepCreatures(battle.friendlies)];
                    case 4:
                        _b.friendlies = _d.sent();
                        _c = battle;
                        return [4, this.prepCharacters(battle.participants)];
                    case 5:
                        _c.participants = _d.sent();
                        return [3, 7];
                    case 6:
                        err_1 = _d.sent();
                        console.error('caught error prepping creatures', err_1);
                        return [3, 7];
                    case 7: return [2, battle];
                }
            });
        });
    };
    OWBattleService.prototype.prepCreatures = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var prepped, _i, arr_1, creature, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        prepped = [];
                        _i = 0, arr_1 = arr;
                        _c.label = 1;
                    case 1:
                        if (!(_i < arr_1.length)) return [3, 4];
                        creature = arr_1[_i];
                        _a = this.AddCreatureToArrayWithCount;
                        _b = [prepped];
                        return [4, CreatureService.prepForDelivery(creature)];
                    case 2:
                        _a.apply(this, _b.concat([_c.sent()]));
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [4, prepped.sort(this.sortByInitiative)];
                    case 5:
                        _c.sent();
                        return [2, prepped];
                }
            });
        });
    };
    OWBattleService.prototype.AddCreatureToArrayWithCount = function (arr, creature) {
        creature.counter = 1;
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var element = arr_2[_i];
            if (element.monster === creature.monster) {
                creature.counter++;
            }
        }
        arr[arr.length] = creature;
    };
    OWBattleService.prototype.prepCharacters = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var prepped, _i, arr_3, character, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        prepped = [];
                        _i = 0, arr_3 = arr;
                        _c.label = 1;
                    case 1:
                        if (!(_i < arr_3.length)) return [3, 4];
                        character = arr_3[_i];
                        _b = (_a = prepped).push;
                        return [4, CharacterService.prepForDelivery(character)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, prepped];
                }
            });
        });
    };
    OWBattleService.prototype.sortByInitiative = function (a, b) {
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
    };
    return OWBattleService;
}());
exports.OWBattleService = OWBattleService;
;
module.exports = new OWBattleService();
