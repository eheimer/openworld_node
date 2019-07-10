/**
 * <monster-card-details>
 * -----------------------------------------------------------------------------
 * the expanded portions of the monster card
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('monsterCardDetails', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'battleid',
    'creature',
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      expanded: false,
      availableConditions: [],
      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div class="mob-details">
      <div id="close-icon" @click="$emit('close-me')"></div> 
      <p>{{ creature.hoverStats }} {{ creature.specials }}</p>
      <p>Conditions:</p>
      <div v-for="condition in creature.conditions" class="mob-conditions">
        <condition-display :battleId="battleid" :condition="condition" :entityId="creature.id" entityType="creature" @updated="updated"></condition-display>
      </div>
      <condition-adder :battleId="battleid" :entityId="creature.id" entityType="creature" :availableConditions="availableConditions" @updated="updated"></condition-adder>
      <hr>
      <tame-release-button :creature="creature" :battleid="battleid"></tame-release-button>
      <div class="mob-lore">
        <p>During the earliest span of the age of darkness, found in the writings of only the most aged of manuscripts, lived a world born of mystic arts and ancient sorcery.</p>
      </div>
    </div>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    await this.updated();
  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    updated: async function () {
      this.availableConditions = (await Cloud.conditionList.with({
        entityId: this.creature.id,
        entityType: 'creature'
      })).conditions;
    }
  }
});
