/**
 * <battle-damage>
 * -----------------------------------------------------------------------------
 * an input box and icons for selecting damage type
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent("battleDamage", {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: ["battleid", "selectedCreatures", "selectedCharacters"],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      dmgTypes: [],
      dmgAmount: "",
      //…
    };
  },

  watch: {},

  computed: {},

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
  <div id="damage" class="battle-damage">
    
    <audio v-for="dmgType in dmgTypes" :id="'dmg_' + dmgType.name + '_clip'" :src="dmgType.soundurl"></audio>
    <audio id="dmg_heal_clip" src="/sound/clip_heal.mp3"></audio>
    <audio id="ghost_clip" src="/sound/clip_ghost.mp3"></audio>
    <audio id="whiff_clip" src="/sound/clip_whiff.mp3"></audio>
    <audio id="item_damaged_clip" src="/sound/clip_damaged.wav"></audio>
    <audio id="item_destroyed_clip" src="/sound/clip_destroyed.wav"></audio>
    
    <input
      v-model.number= "dmgAmount"
      placeholder="DMG"
      onfocus="this.placeholder = ''"
      onblur="this.placeholder = 'DMG'"
      id="dmg_amount"
      name="damage"
      maxlength="3"
      type="text"
    />
    <damage-type @damage-type-click="doDamage($event)" v-for="dmgType in dmgTypes" :key="dmgType.id" :dmgtype="dmgType" :battleid="battleid"></damage-type>
    <img
      @click="doDamage({ type: 'heal' })"
      class="damage-type"
      alt="dmgtype_heal"
      id="dmg_heal"
      dmgtype="heal"
      src="/images/damage/heal_icon.png"
      title="Heal"
      width="100"
      height="100"
    />
  </div>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    this.dmgTypes = (await Cloud.damageTypes()).dmgTypes;
  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    doDamage: async function (event) {
      await Cloud.dealDamage.with({
        battleId: this.battleid,
        amount: this.dmgAmount,
        type: event.type,
        creatures: this.selectedCreatures,
        characters: this.selectedCharacters
      });
    },
  }
});
