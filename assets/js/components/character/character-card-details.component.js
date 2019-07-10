/**
 * <character-card-details>
 * -----------------------------------------------------------------------------
 * the expanded portions of the monster card
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent("characterCardDetails", {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: ["battleid", "character", "owner"],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      expanded: false,
      availableConditions: []
      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div class="character-card-details">
      <div id="close-icon" @click="$emit('close-me')"></div> 
      <div class="character-text">
        <p>{{ character.hoverStats }} {{ character.specials }}</p>
      </div>
      <div class="character-inventory">
        <p>Inventory:</p>
        <inventory-container class="the-loot" :battleId="battleid" :inventory="character.inventory" :organized="true" :owner="owner" :canloot="!owner"></inventory-container>
      </div>
       
      <p>Conditions:</p>
      <div v-for="condition in character.conditions" class="mob-conditions">
        <condition-display :battleId="battleid" :condition="condition" :entityId="character.id" entityType="character" @updated="updated"></condition-display>
      </div>
      <condition-adder :battleId="battleid" :entityId="character.id" entityType="character" :availableConditions="availableConditions" @updated="updated"></condition-adder>
      <hr>
     
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
        entityId: this.character.id,
        entityType: 'character'
      })).conditions;
    }
  }
});
