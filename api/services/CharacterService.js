"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var OWCharacterService = (function () {
    function OWCharacterService() {
    }
    OWCharacterService.prototype.prepForDelivery = function (character, all) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, resists;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = character.conditions;
                        if (!_a) return [3, 2];
                        return [4, ConditionService.hasHidden(character.conditions)];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (_a) {
                            character.hidden = true;
                        }
                        if (!all) return [3, 7];
                        return [4, ConditionService.populateConditions(character, 'character')];
                    case 3:
                        _c.sent();
                        _b = character;
                        return [4, InventoryService.populateAllAndFlatten(character.inventory)];
                    case 4:
                        _b.inventory = _c.sent();
                        return [4, this.calculateResists(character)];
                    case 5:
                        resists = _c.sent();
                        character = __assign({}, character, resists);
                        return [4, ConditionService.getProxy(character, 'character')];
                    case 6: return [2, _c.sent()];
                    case 7: return [2, character];
                }
            });
        });
    };
    OWCharacterService.prototype.calculateResists = function (character) {
        return __awaiter(this, void 0, void 0, function () {
            var resists, _i, _a, armor, _b, _c, reduction, dmgType, dmgTypes, _d, _e, jewelry, _f, _g, attr, _h, dmgTypes_1;
            return __generator(this, function (_j) {
                resists = {};
                resists[EnumService.DamageType().PHYSICAL.code] = 0;
                resists[EnumService.DamageType().FIRE.code] = 0;
                resists[EnumService.DamageType().COLD.code] = 0;
                resists[EnumService.DamageType().POISON.code] = 0;
                resists[EnumService.DamageType().ENERGY.code] = 0;
                if (character.inventory.armor) {
                    for (_i = 0, _a = character.inventory.armor; _i < _a.length; _i++) {
                        armor = _a[_i];
                        if (armor.equipped) {
                            for (_b = 0, _c = armor.reductions; _b < _c.length; _b++) {
                                reduction = _c[_b];
                                dmgType = EnumService.findByName(reduction.name, EnumService.DamageType());
                                resists[dmgType.code] += reduction.value;
                            }
                        }
                    }
                }
                dmgTypes = EnumService.findAll(EnumService.DamageType());
                if (character.inventory.jewelry) {
                    for (_d = 0, _e = character.inventory.jewelry; _d < _e.length; _d++) {
                        jewelry = _e[_d];
                        if (jewelry.equipped) {
                            for (_f = 0, _g = jewelry.attributes; _f < _g.length; _f++) {
                                attr = _g[_f];
                                for (_h = 0, dmgTypes_1 = dmgTypes; _h < dmgTypes_1.length; _h++) {
                                    dmgType = dmgTypes_1[_h];
                                    if (attr.name === (dmgType.name + ' Reduction')) {
                                        resists[dmgType.code] += attr.value;
                                    }
                                }
                            }
                        }
                    }
                }
                return [2, {
                        resistPh: Math.max(character.baseResist, resists[EnumService.DamageType().PHYSICAL.code]),
                        resistF: Math.max(character.baseResist, resists[EnumService.DamageType().FIRE.code]),
                        resistC: Math.max(character.baseResist, resists[EnumService.DamageType().COLD.code]),
                        resistP: Math.max(character.baseResist, resists[EnumService.DamageType().POISON.code]),
                        resistE: Math.max(character.baseResist, resists[EnumService.DamageType().ENERGY.code])
                    }];
            });
        });
    };
    return OWCharacterService;
}());
exports.OWCharacterService = OWCharacterService;
;
module.exports = new OWCharacterService();
