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
var _ = require("lodash");
var OWInventoryService = (function () {
    function OWInventoryService() {
    }
    OWInventoryService.prototype.populateAllAndFlatten = function (inventory) {
        return __awaiter(this, void 0, void 0, function () {
            var inv, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!inventory) return [3, 8];
                        if (!!inventory.id) return [3, 2];
                        return [4, Inventory.findOne({
                                id: inventory
                            }).populate('weapons').populate('armor').populate('jewelry').populate('spellbooks')];
                    case 1:
                        inv = _b.sent();
                        _b.label = 2;
                    case 2: return [4, this.populateAndFlattenWeapons(inv)];
                    case 3:
                        inv = _b.sent();
                        return [4, this.populateAndFlattenArmor(inv)];
                    case 4:
                        inv = _b.sent();
                        return [4, this.populateAndFlattenJewelry(inv)];
                    case 5:
                        inv = _b.sent();
                        return [4, this.populateAndFlattenSpellbooks(inv)];
                    case 6:
                        inv = _b.sent();
                        if (!inv.limit) return [3, 8];
                        _a = inv;
                        return [4, Inventory.emptySlots(inv.id)];
                    case 7:
                        _a.slotsAvailable = _b.sent();
                        _b.label = 8;
                    case 8: return [2, inv];
                }
            });
        });
    };
    OWInventoryService.prototype.populateAndFlattenWeapons = function (inventory) {
        return __awaiter(this, void 0, void 0, function () {
            var weapons, newWeapons, _i, weapons_1, weapon, w, attributes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!inventory.weapons) return [3, 7];
                        return [4, WeaponInstance.find({
                                id: _.map(inventory.weapons, 'id')
                            }).populate('weapon').populate('attributes').populate('material')];
                    case 1:
                        weapons = _a.sent();
                        newWeapons = [];
                        _i = 0, weapons_1 = weapons;
                        _a.label = 2;
                    case 2:
                        if (!(_i < weapons_1.length)) return [3, 6];
                        weapon = weapons_1[_i];
                        return [4, Weapon.findOne({
                                id: weapon.weapon.id
                            }).populate('skill').populate('primaryMove').populate('secondaryMove')];
                    case 3:
                        w = _a.sent();
                        return [4, this.flattenAttributes(WeaponAttribute, weapon.attributes)];
                    case 4:
                        attributes = _a.sent();
                        newWeapons.push({
                            id: weapon.id,
                            itemType: 'weapons',
                            name: w.name,
                            skill: w.skill.name,
                            primary: {
                                name: w.primaryMove.name,
                                stamina: w.primaryMove.stamina
                            },
                            secondary: {
                                name: w.secondaryMove.name,
                                stamina: w.secondaryMove.stamina
                            },
                            durability: weapon.material.weaponDurability,
                            attributes: attributes,
                            equipped: weapon.equipped,
                            damaged: weapon.damaged
                        });
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3, 2];
                    case 6:
                        inventory.weapons = newWeapons;
                        _a.label = 7;
                    case 7: return [2, inventory];
                }
            });
        });
    };
    OWInventoryService.prototype.populateAndFlattenArmor = function (inventory) {
        return __awaiter(this, void 0, void 0, function () {
            var armors, newArmors, _i, armors_1, armor, a, attributes, reductions, _a, _b, reduc, dmgType;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!inventory.armor) return [3, 11];
                        return [4, ArmorInstance.find({
                                id: _.map(inventory.armor, 'id')
                            }).populate('armorClass').populate('location').populate('attributes').populate('reductions')];
                    case 1:
                        armors = _c.sent();
                        newArmors = [];
                        _i = 0, armors_1 = armors;
                        _c.label = 2;
                    case 2:
                        if (!(_i < armors_1.length)) return [3, 10];
                        armor = armors_1[_i];
                        return [4, ArmorClass.findOne({
                                id: armor.armorClass.id
                            })];
                    case 3:
                        a = _c.sent();
                        return [4, this.flattenAttributes(ArmorAttribute, armor.attributes)];
                    case 4:
                        attributes = _c.sent();
                        reductions = [];
                        _a = 0, _b = armor.reductions;
                        _c.label = 5;
                    case 5:
                        if (!(_a < _b.length)) return [3, 8];
                        reduc = _b[_a];
                        return [4, DamageType.findOne({
                                id: reduc.damageType
                            })];
                    case 6:
                        dmgType = _c.sent();
                        reductions.push({
                            name: dmgType.name,
                            value: reduc.value
                        });
                        _c.label = 7;
                    case 7:
                        _a++;
                        return [3, 5];
                    case 8:
                        newArmors.push({
                            id: armor.id,
                            itemType: 'armor',
                            name: a.name + ' ' + armor.location.name,
                            durability: a.durability,
                            attributes: attributes,
                            reductions: reductions,
                            equipped: armor.equipped,
                            damaged: armor.damaged
                        });
                        _c.label = 9;
                    case 9:
                        _i++;
                        return [3, 2];
                    case 10:
                        inventory.armor = newArmors;
                        _c.label = 11;
                    case 11: return [2, inventory];
                }
            });
        });
    };
    OWInventoryService.prototype.populateAndFlattenJewelry = function (inventory) {
        return __awaiter(this, void 0, void 0, function () {
            var jewelrys, newJewelry, _i, jewelrys_1, jewelry, attributes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!inventory.jewelry) return [3, 6];
                        return [4, JewelryInstance.find({
                                id: _.map(inventory.jewelry, 'id')
                            }).populate('location').populate('gem').populate('attributes')];
                    case 1:
                        jewelrys = _a.sent();
                        newJewelry = [];
                        _i = 0, jewelrys_1 = jewelrys;
                        _a.label = 2;
                    case 2:
                        if (!(_i < jewelrys_1.length)) return [3, 5];
                        jewelry = jewelrys_1[_i];
                        return [4, this.flattenAttributes(JewelryAttribute, jewelry.attributes)];
                    case 3:
                        attributes = _a.sent();
                        newJewelry.push({
                            id: jewelry.id,
                            itemType: 'jewelry',
                            name: jewelry.location.name,
                            durability: jewelry.gem.durability,
                            attributes: attributes,
                            equipped: jewelry.equipped,
                            damaged: jewelry.damaged
                        });
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5:
                        inventory.jewelry = newJewelry;
                        _a.label = 6;
                    case 6: return [2, inventory];
                }
            });
        });
    };
    OWInventoryService.prototype.populateAndFlattenSpellbooks = function (inventory) {
        return __awaiter(this, void 0, void 0, function () {
            var spellbooks, newSpellbooks, _i, spellbooks_1, spellbook, attributes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!inventory.spellbooks) return [3, 6];
                        return [4, SpellbookInstance.find({
                                id: _.map(inventory.spellbooks, 'id')
                            }).populate('attributes')];
                    case 1:
                        spellbooks = _a.sent();
                        newSpellbooks = [];
                        _i = 0, spellbooks_1 = spellbooks;
                        _a.label = 2;
                    case 2:
                        if (!(_i < spellbooks_1.length)) return [3, 5];
                        spellbook = spellbooks_1[_i];
                        return [4, this.flattenAttributes(SpellbookAttribute, spellbook.attributes)];
                    case 3:
                        attributes = _a.sent();
                        newSpellbooks.push({
                            id: spellbook.id,
                            itemType: 'spellbooks',
                            name: 'Spellbook',
                            attributes: attributes
                        });
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5:
                        inventory.spellbooks = newSpellbooks;
                        _a.label = 6;
                    case 6: return [2, inventory];
                }
            });
        });
    };
    OWInventoryService.prototype.flattenAttributes = function (accessor, attributes) {
        return __awaiter(this, void 0, void 0, function () {
            var ret, _i, attributes_1, att, base;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ret = [];
                        _i = 0, attributes_1 = attributes;
                        _a.label = 1;
                    case 1:
                        if (!(_i < attributes_1.length)) return [3, 4];
                        att = attributes_1[_i];
                        return [4, accessor.findOne({
                                id: att.attribute
                            })];
                    case 2:
                        base = _a.sent();
                        ret.push({
                            name: base.name,
                            value: att.value
                        });
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, ret];
                }
            });
        });
    };
    return OWInventoryService;
}());
exports.OWInventoryService = OWInventoryService;
;
module.exports = new OWInventoryService();
