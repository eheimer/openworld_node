"use strict";
exports.__esModule = true;
var OWEnumService = (function () {
    function OWEnumService() {
    }
    OWEnumService.prototype.DamageType = function () {
        return {
            PHYSICAL: { id: 1, name: 'physical', code: 'ph', description: 'Physical damage' },
            FIRE: { id: 2, name: 'fire', code: 'f', description: 'Fire damage' },
            COLD: { id: 3, name: 'cold', code: 'c', description: 'Cold damage' },
            POISON: { id: 4, name: 'poison', code: 'p', description: 'Poison damage' },
            ENERGY: { id: 5, name: 'energy', code: 'e', description: 'Energy damage' },
            DIRECT: { id: 6, name: 'direct', code: 'd', description: 'Direct damage' },
            CHAOS: { id: 7, name: 'chaos', code: 'ch', description: 'Chaos damage' },
            HEAL: { id: '', name: 'heal', code: '', description: 'Heal' }
        };
    };
    OWEnumService.prototype.Condition = function () {
        return {
            POISON_LESSER: { id: 1, name: 'Lesser Poison' },
            POISON: { id: 2, name: 'Poison' },
            POISON_GREATER: { id: 3, name: 'Greater Poison' },
            POISON_DEADLY: { id: 4, name: 'Deadly Poison' },
            POISON_LETHAL: { id: 5, name: 'Lethal Poison' },
            CURSE: { id: 6, name: 'Cursed' },
            PARALYZE: { id: 7, name: 'Paralyzed' },
            MINDBLAST: { id: 8, name: 'Mindblast' },
            EXPLOSION: { id: 9, name: 'Explosion' },
            DISCORD: { id: 10, name: 'Discorded' },
            PEACE: { id: 11, name: 'Peaced' },
            PROVOKE: { id: 12, name: 'Provoked' },
            CORPSESKIN: { id: 13, name: 'Corpseskin' },
            HIDDEN: { id: 14, name: 'Hidden' },
            MORTAL_STRIKE: { id: 15, name: 'Mortal Strike' },
            BLEED: { id: 16, name: 'Bleed' },
            NERVE_STRIKE: { id: 17, name: 'Nerve Strike' },
            PARALYZE_BLOW: { id: 18, name: 'Paralyze Blow' },
            ARMOR_CORRUPTION: { id: 19, name: 'Armor Corruption' }
        };
    };
    OWEnumService.prototype.ItemCategory = function () {
        return {
            GEM: { id: 1, name: 'Gems' },
            POTION: { id: 2, name: 'Potions' },
            MAG_REG: { id: 3, name: 'Magery regs' },
            NEC_REG: { id: 4, name: 'Necro regs' },
            MAG_ITEM: { id: 5, name: 'Magic items' },
            MAP: { id: 6, name: 'Maps' },
            ENCH_REG: { id: 7, name: 'Enchant regs' },
            WONDROUS: { id: 8, name: 'Wondrous items' },
            FOOD: { id: 9, name: 'Foods' },
            TOOL: { id: 10, name: 'Tools' },
            MISC: { id: 11, name: 'Miscellaneous' }
        };
    };
    OWEnumService.prototype.WeaponSkill = function () {
        return {
            FENCING: { id: 1, name: 'Fencing' },
            MACE: { id: 2, name: 'Mace' },
            SWORDS: { id: 3, name: 'Swords' },
            ARCHERY: { id: 4, name: 'Archery' },
            THROWING: { id: 5, name: 'Throwing' }
        };
    };
    OWEnumService.prototype.MaterialType = function () {
        return {
            METAL: { id: 1, name: 'Metal' },
            WOOD: { id: 2, name: 'Wood' }
        };
    };
    OWEnumService.prototype.SlayerType = function () {
        return {
            DRAGON: { id: 1, name: 'Dragon Slayer', "super": false },
            REPOND: { id: 2, name: 'Repond (Super Slayer)', "super": true },
            OGRE: { id: 3, name: 'Ogre Slayer', "super": false },
            ORC: { id: 4, name: 'Orc Slayer', "super": false },
            TROLL: { id: 5, name: 'Troll Slayer', "super": false },
            UNDEAD: { id: 6, name: 'Undead (Super Slayer)', "super": true },
            ELEMENTAL: { id: 7, name: 'Elemental (Super Slayer)', "super": true },
            EL_AIR: { id: 8, name: 'Air Elemental Slayer', "super": false },
            EL_BLOOD: { id: 9, name: 'Blood Elemental Slayer', "super": false },
            EL_EARTH: { id: 10, name: 'Earth Elemental Slayer', "super": false },
            EL_POISON: { id: 11, name: 'Poison Elemental Slayer', "super": false },
            EL_WATER: { id: 12, name: 'Water Elemental Slayer', "super": false },
            EL_SNOW: { id: 13, name: 'Snow Elemental Slayer', "super": false },
            DEMON: { id: 14, name: 'Demon (Super Slayer)', "super": true },
            GARGOYLE: { id: 15, name: 'Gargoyle Slayer', "super": false },
            FEY: { id: 16, name: 'Fey (Super Slayer)', "super": true },
            ARACHNID: { id: 17, name: 'Arachnid (Super Slayer)', "super": true },
            EL_FIRE: { id: 18, name: 'Fire Elemental Slayer', "super": false },
            TERATHAN: { id: 19, name: 'Terathan Slayer', "super": false },
            SCORPION: { id: 20, name: 'Scorpion Slayer', "super": false },
            Spider: { id: 21, name: 'Spider Slayer', "super": false },
            Reptile: { id: 22, name: 'Reptile (Super Slayer)', "super": true }
        };
    };
    OWEnumService.prototype.ArmorClass = function () {
        return {
            LEATHER: { id: 1, name: 'Leather', armorDurability: 60 },
            LEAF: { id: 2, name: 'Leaf', armorDurability: 65 },
            STUDDED: { id: 3, name: 'Studded', armorDurability: 60 },
            HIDE: { id: 4, name: 'Hide', armorDurability: 50 },
            BONE: { id: 5, name: 'Bone', armorDurability: 40 },
            RINGMAIL: { id: 6, name: 'Ringmail', armorDurability: 65 },
            CHAINMAIL: { id: 7, name: 'Chainmail', armorDurability: 70 },
            PLATEMAIL: { id: 8, name: 'Platemail', armorDurability: 80 },
            DRAGONMAIL: { id: 9, name: 'Dragonmail', armorDurability: 100 },
            WOODLAND: { id: 10, name: 'Woodland', armorDurability: 50 }
        };
    };
    OWEnumService.prototype.EquipLocation = function () {
        return {
            HEAD: { id: 1, name: 'head' },
            NECK: { id: 2, name: 'neck' },
            ARMS: { id: 3, name: 'arms' },
            HANDS: { id: 4, name: 'hands' },
            LEGS: { id: 5, name: 'legs' },
            TORSO: { id: 6, name: 'torso' }
        };
    };
    OWEnumService.prototype.ArmorLocation = function () {
        return {
            HELM: { id: 1, name: 'Helm', location: this.EquipLocation().HEAD.id },
            GORGET: { id: 2, name: 'Gorget', location: this.EquipLocation().NECK.id },
            SLEEVES: { id: 3, name: 'Sleeves', location: this.EquipLocation().ARMS.id },
            GLOVES: { id: 4, name: 'Gloves', location: this.EquipLocation().HANDS.id },
            LEGGINGS: { id: 5, name: 'Leggings', location: this.EquipLocation().LEGS.id },
            TUNIC: { id: 6, name: 'Tunic', location: this.EquipLocation().TORSO.id }
        };
    };
    OWEnumService.prototype.JewelryLocation = function () {
        return {
            BRACELET: { id: 1, name: 'Bracelet', location: this.EquipLocation().ARMS.id },
            NECKLACE: { id: 2, name: 'Necklace', location: this.EquipLocation().NECK.id },
            RING: { id: 3, name: 'Ring', location: this.EquipLocation().HANDS.id }
        };
    };
    OWEnumService.prototype.Skill = function () {
        return {
            ALCHEMY: { id: 1, name: 'Alchemy', spellbook: true },
            ANATOMY: { id: 2, name: 'Anatomy' },
            ANIMAL_LORE: { id: 3, name: 'Animal Lore' },
            ANIMAL_TAMING: { id: 4, name: 'Animal Taming' },
            ARCHERY: { id: 5, name: 'Archery' },
            ARMS_LORE: { id: 6, name: 'Arms Lore' },
            BLACKSMITHING: { id: 7, name: 'Blacksmithing' },
            WOODCRAFTING: { id: 8, name: 'Woodcrafting' },
            BUSHIDO: { id: 9, name: 'Bushido', spellbook: true },
            CARTOGRAPHY: { id: 10, name: 'Cartography' },
            CHIVALRY: { id: 11, name: 'Chivalry', spellbook: true },
            COOKING: { id: 12, name: 'Cooking' },
            PERCEPTION: { id: 13, name: 'Perception' },
            DISCORDANCE: { id: 14, name: 'Discordence' },
            EVAL_INT: { id: 15, name: 'Evaluate Intelligence', spellbook: true },
            FENCING: { id: 16, name: 'Fencing' },
            FISHING: { id: 17, name: 'Fishing' },
            FOCUS: { id: 18, name: 'Focus' },
            CAMPING: { id: 19, name: 'Camping' },
            HEALING: { id: 20, name: 'Healing' },
            HIDING: { id: 21, name: 'Hiding' },
            IMBUING: { id: 22, name: 'Imbuing' },
            INSCRIPTION: { id: 23, name: 'Inscription', spellbook: true },
            LUMBERJACKING: { id: 24, name: 'Lumberjacking' },
            MACE_FIGHTING: { id: 25, name: 'Mace Fighting' },
            MAGERY: { id: 26, name: 'Magery' },
            MEDITATION: { id: 27, name: 'Meditation', spellbook: true },
            MINING: { id: 28, name: 'Mining' },
            NECROMANCY: { id: 29, name: 'Necromancy', spellbook: true },
            NINJITSU: { id: 30, name: 'Ninjitsu', spellbook: true },
            PARRY: { id: 31, name: 'Parry' },
            PEACEMAKING: { id: 32, name: 'Peacemaking' },
            POISONING: { id: 33, name: 'Poisoning' },
            PROVOCATION: { id: 34, name: 'Provocation' },
            SPELL_RESIST: { id: 35, name: 'Spell Resist', spellbook: true },
            SNOOPING: { id: 36, name: 'Snooping' },
            SPIRIT_SPEAK: { id: 37, name: 'Spirit Speak' },
            STEALING: { id: 38, name: 'Stealing' },
            STEALTH: { id: 39, name: 'Stealth' },
            SWORDSMANSHIP: { id: 40, name: 'Swordsmanship' },
            TACTICS: { id: 41, name: 'Tactics' },
            THROWING: { id: 42, name: 'Throwing' },
            TRACKING: { id: 43, name: 'Tracking' },
            VETERINARY: { id: 44, name: 'Veterinary' },
            WRESTLING: { id: 45, name: 'Wrestling' },
            SPELLWEAVING: { id: 46, name: 'Spellweaving', spellbook: true },
            MYSTICISM: { id: 47, name: 'Mysticism', spellbook: true }
        };
    };
    OWEnumService.prototype.findById = function (id, obj) {
        return this.findByProp('id', id, obj);
    };
    OWEnumService.prototype.findByCode = function (code, obj) {
        return this.findByProp('code', code, obj);
    };
    OWEnumService.prototype.findByName = function (name, obj) {
        return this.findByProp('name', name, obj);
    };
    OWEnumService.prototype.findByProp = function (prop, value, obj) {
        for (var item in obj) {
            if (obj[item][prop] === value) {
                return obj[item];
            }
        }
        return {};
    };
    OWEnumService.prototype.findAll = function (obj) {
        var coll = [];
        for (var item in obj) {
            coll.push(obj[item]);
        }
        return coll;
    };
    OWEnumService.prototype.findAllByProp = function (prop, value, obj) {
        var coll = [];
        for (var item in obj) {
            if (obj[item][prop] === value) {
                coll.push(obj[item]);
            }
        }
        return coll;
    };
    OWEnumService.prototype.findAllByPropContaining = function (prop, value, obj) {
        var coll = [];
        for (var item in obj) {
            if (obj[item][prop].includes(value)) {
                coll.push(obj[item]);
            }
        }
        return coll;
    };
    return OWEnumService;
}());
exports.OWEnumService = OWEnumService;
;
module.exports = new OWEnumService();
