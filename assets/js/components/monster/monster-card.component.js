/**
 * <monster-card>
 * -----------------------------------------------------------------------------
 * a monster card with touch events
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent("monsterCard", {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: ["battleid", "creature"],

  computed: {},

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      expanded: false,
      selected: false,
      stats: [{
          name: "Aggro",
          value: this.creature.aggroPriority
        },
        {
          name: "Resist",
          value: this.creature.resistSpell
        },
        {
          name: "Melee",
          value: this.creature.baseDmg
        },
        {
          name: "Init",
          value: this.creature.initiative
        }
      ]
      //…
    };
  },

  watch: {
    selected: function (val) {
      this.$emit("selection-changed", {
        selected: val,
        id: this.creature.id
      });
    }
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <v-touch @press="expanded = true" class="monster-card">
      <div :class="{ 'expanded': expanded, 'card': !expanded, 'hidden' : creature.hidden && !expanded, 'provoked': creature.provoked && !expanded }">
        <div class="name"><p class="monster-title">{{ creature.name }}</p></div>
        <div class="avatar" :style="{ backgroundImage: 'url(' + creature.imgUrl + ')' }">
          <div v-if="creature.dead" class="avatar dead"></div>
          <input v-if="!creature.dead" type="checkbox" class="targeted" v-model="selected" />
          <div class="counter">{{ creature.counter }}</div>
          <div v-if="!creature.dead" class="hp" :style="'width:' + creature.hp + '%;'" ></div>
        </div>
        <div class="statrow" v-if="!creature.dead">
          <div class="stat" v-for="stat in stats">
            <div class="stat-name">{{ stat.name }}</div>
            <div class="stat-value">{{ stat.value }}</div>
          </div>
        </div>
        <div v-if="!creature.dead" class="action">{{creature.actionName}} {{creature.actionValue}} {{creature.actionDescription}}</div>
        <div class="detail" v-if="expanded">
          <monster-card-details v-if="!creature.dead" :creature="creature" :battleid="battleid" @close-me="expanded=false"></monster-card-details>
          <monster-card-loot v-else :creature="creature" :battleid="battleid" @close-me="expanded=false"></monster-card-loot>
        </div>
      </div>
    </v-touch>
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
