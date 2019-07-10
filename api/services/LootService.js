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
var OWLootService = (function () {
    function OWLootService() {
    }
    OWLootService.prototype.getItemAccessors = function () {
        var accessors = {
            weapons: WeaponInstance,
            armor: ArmorInstance,
            jewelry: JewelryInstance,
            spellbooks: SpellbookInstance
        };
        return accessors;
    };
    OWLootService.prototype.getItemAccessor = function (key) {
        return this.getItemAccessors()[key];
    };
    OWLootService.prototype.createInstanceAttributes = function (accessor, attributes, idprop, id) {
        return __awaiter(this, void 0, void 0, function () {
            var instances, _i, attributes_1, att, instance, _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        instances = [];
                        _i = 0, attributes_1 = attributes;
                        _k.label = 1;
                    case 1:
                        if (!(_i < attributes_1.length)) return [3, 9];
                        att = attributes_1[_i];
                        instance = {
                            attribute: att.id
                        };
                        instance[idprop] = id;
                        if (att.value) {
                            instance.value = RandomService.getRandomInRange(att.value);
                        }
                        if (!(att.name === 'Slayer')) return [3, 3];
                        _a = instance;
                        _c = (_b = RandomService).getOneRandomItem;
                        return [4, SlayerType.find()];
                    case 2:
                        _a.slayer = _c.apply(_b, [_k.sent()]).id;
                        _k.label = 3;
                    case 3:
                        if (!(att.name === 'Skill')) return [3, 5];
                        _d = instance;
                        _f = (_e = RandomService).getOneRandomItem;
                        return [4, Skill.find()];
                    case 4:
                        _d.skill = _f.apply(_e, [_k.sent()]).id;
                        _k.label = 5;
                    case 5:
                        if (!(att.name === 'Damage Eater')) return [3, 7];
                        _g = instance;
                        _j = (_h = RandomService).getOneRandomItem;
                        return [4, DamageType.find({
                                chaos: true
                            })];
                    case 6:
                        _g.damageType = _j.apply(_h, [_k.sent()]).id;
                        _k.label = 7;
                    case 7:
                        instances.push(instance);
                        _k.label = 8;
                    case 8:
                        _i++;
                        return [3, 1];
                    case 9: return [4, accessor.createEach(instances)];
                    case 10:
                        _k.sent();
                        return [2];
                }
            });
        });
    };
    return OWLootService;
}());
exports.OWLootService = OWLootService;
;
module.exports = new OWLootService();
