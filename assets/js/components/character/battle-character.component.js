/**
 * <battle-character>
 * -----------------------------------------------------------------------------
 * a character card
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent("battleCharacter", {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: ["battleid", "character-data", "owner"],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      expanded: false,
      selected: false,
      fields: [{
          name: 'hp',
          label: 'HP',
          tip: 'Current Hit Points',
          editable: true,
          value: 'hp'
        },
        {
          name: 'base-dmg-inc',
          label: 'BDI',
          tip: 'Base Damage Increase',
          editable: true,
          value: 'baseDmgIncrease'
        },
        {
          name: 'base-resist',
          label: 'RESIST',
          tip: 'Base Resist',
          editable: true,
          value: 'baseResist'
        },
        {
          name: 'spell-dmg-inc',
          label: 'SDI',
          tip: 'Spell Damage Increase',
          editable: true,
          value: 'spellDmgIncrease'
        },
        {
          name: 'base-dmg',
          label: 'DMG',
          tip: 'Base Damage',
          editable: true,
          value: 'dmgIncrease'
        },
        {
          name: 'inv-slots',
          label: 'INV',
          tip: 'Total Inventory Slots',
          editable: true,
          value: 'inventorySlots'
        },
      ],
    };
  },

  watch: {
    selected: function (val) {
      this.$emit('character-selection-changed', {
        selected: val,
        id: this.characterData.id
      });
    }
  },

  computed: {},

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <v-touch  @press="expanded = true" class="battle-character" :class="{ 'battle-character-expanded detail-overlay': expanded }" >
      <div class="char-name data-1">{{characterData.name}}</div>
      <div class="char-avatar">
        <input type="checkbox" class="targeted" v-model="selected" />
      </div>
      <template v-for="field of fields">
        <div :class="field.name + '-label'" class="char-label" :title="field.tip">{{ field.label }}</div>
        <admin-text :class="field.name + '-data'" class="char-data"
          :canEdit="field.editable"
          :value="characterData[field.value]"
          @value-updated='updateValue(field.value,$event)'>
        </admin-text>
      </template>
      <div class="resists">
        <damage-resist damage-type="ph">{{ characterData.resistPh }}</damage-resist>
        <damage-resist damage-type="f">{{ characterData.resistF }}</damage-resist>
        <damage-resist damage-type="c">{{ characterData.resistC }}</damage-resist>
        <damage-resist damage-type="p">{{ characterData.resistP }}</damage-resist>
        <damage-resist damage-type="e">{{ characterData.resistE }}</damage-resist>
      </div>
                
      <template v-if="expanded">
          <character-card-details :character="characterData" :battleid="battleid" @close-me="expanded=false" :owner="owner"></character-card-details>
          <character-paperdoll :character="characterData" :battleid="battleid"></character-paperdoll>
      </template>
    </v-touch>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    //   this.dmgTypes = (await Cloud.damageTypes()).dmgTypes;
  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    // doDamage: async function(event) {
    //   await Cloud.dealDamage.with({
    //     battleId: this.battleid,
    //     amount: this.dmgAmount,
    //     type: event.type,
    //     targets: this.selectedCreatures
    //   });
    // }

    updateValue: async function (field, event) {
      await Cloud.updateValue.with({
        characterId: this.characterData.id,
        property: field,
        value: event.value
      });
    }
  }
});
