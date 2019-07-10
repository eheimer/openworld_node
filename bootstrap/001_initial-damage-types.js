var DamageTypeEnum = require('../api/services/EnumService.js').DamageType();

module.exports = async function () {
  await DamageType.createEach([
    { id: DamageTypeEnum.PHYSICAL.id, name: DamageTypeEnum.PHYSICAL.name, description: DamageTypeEnum.PHYSICAL.description, display: true, chaos: true, imgurl: '/images/damage/physical_icon.png', soundurl: '/sound/clip_physical.mp3' },
    { id: DamageTypeEnum.FIRE.id, name: DamageTypeEnum.FIRE.name, description: DamageTypeEnum.FIRE.description, display: true, chaos: true, imgurl: '/images/damage/fire_icon.png', soundurl: '/sound/clip_fire.mp3' },
    { id: DamageTypeEnum.COLD.id, name: DamageTypeEnum.COLD.name, description: DamageTypeEnum.COLD.description, display: true, chaos: true, imgurl: '/images/damage/cold_icon.png', soundurl: '/sound/clip_cold.mp3' },
    { id: DamageTypeEnum.POISON.id, name: DamageTypeEnum.POISON.name, description: DamageTypeEnum.POISON.description, display: true, chaos: true, imgurl: '/images/damage/poison_icon.png', soundurl: '/sound/clip_poison.mp3' },
    { id: DamageTypeEnum.ENERGY.id, name: DamageTypeEnum.ENERGY.name, description: DamageTypeEnum.ENERGY.description, display: true, chaos: true, imgurl: '/images/damage/energy_icon.png', soundurl: '/sound/clip_energy.mp3' },
    { id: DamageTypeEnum.DIRECT.id, name: DamageTypeEnum.DIRECT.name, description: DamageTypeEnum.DIRECT.description, display: true, chaos: true, imgurl: '/images/damage/direct_icon.png', soundurl: '/sound/clip_direct.mp3' },
    { id: DamageTypeEnum.CHAOS.id, name: DamageTypeEnum.CHAOS.name, description: DamageTypeEnum.CHAOS.description, display: false, chaos: false, imgurl: '/images/damage/chaos_icon.png', soundurl: '/sound/clip_chaos.mp3' }
  ]);
};
