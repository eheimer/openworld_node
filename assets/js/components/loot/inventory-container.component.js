/**
 * <inventory-container>
 * -----------------------------------------------------------------------------
 * a loot card with touch events
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('inventoryContainer', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'inventory',
    'organized',
    'battleId',
    'owner',
    'canloot'
  ],

  computed: {
    randomizedItems: function () {
      // combine all collections of items
      var arr = [];
      arr = arr.concat(this.inventory.weapons, this.inventory.armor, this.inventory.jewelry, this.inventory.spellbooks, this.inventory.reagents, this.inventory.other);
      // eliminate nulls and undefineds
      for (var i = arr.length - 1; i >= 0; i--) {
        if (!arr[i]) {
          arr.splice(i, 1);
        }
      }

      var currentIndex = arr.length;
      var temporaryValue;
      var randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //Check for null or undefined
        if (arr[currentIndex]) {

        }

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }

      return arr;
    }
  },

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      expanded: false,
      selected: false,
      itemTypes: [
        'weapons',
        'armor',
        'jewelry',
        'spellbooks',
        'reagents',
        'other'
      ]
      //…
    };
  },

  watch: {},

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div class='inventory-container'>
      <div v-if="inventory.limit">Available slots: {{ inventory.slotsAvailable }}</div>
      <template v-if="organized">
        <inventory-category v-for="type of itemTypes" v-if="inventory[type]" 
          :category="type.charAt(0).toUpperCase() + type.substr(1).toLowerCase()"
          :battleId="battleId" 
          :items="inventory[type]" 
          :owner="owner" 
          :canloot="canloot">
        </inventory-category>
      </template>
      <inventory-category v-else category="Loot" :battleId="battleId" :items="randomizedItems" :owner="owner" :canloot="canloot"></inventory-category>
    </div>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {},
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {}
});
