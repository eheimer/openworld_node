/**
 * <loot-card>
 * -----------------------------------------------------------------------------
 * a loot card with touch events
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('lootCard', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'lootItem',
    'battleId',
    'owner',
    'canloot'
  ],

  computed: {
    url: function () {
      return '/images/items/' + this.lootItem.itemType + '/' + this.lootItem.name.replace(' ', '_') + '.png';
    }
  },

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      expanded: false,
      selected: false
      //…
    };
  },

  watch: {},

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <v-touch :class="{ 'loot-card' : !expanded, 'loot-card-expanded' : expanded, 'equipped' : lootItem.equipped }" :options="{ domEvents: true }" @press="takeOrEquip">
        <div @click="expanded=!expanded" class='image' :style="'background-image: url(' + url + ')'"></div>
        
        <template v-if="expanded">
          <div id="close-icon" @click="expanded=!expanded"></div>
          <p class='name'>{{lootItem.name}}</p>
          <p class='skill'>{{lootItem.skill}}</p>
          <div class='stats'>
            <div class='statline' v-if="lootItem.primary">
              <p class='statname'>{{lootItem.primary.name}}</p>
              <p class='statvalue'>{{lootItem.primary.stamina}}</p>
            </div>
            <div class='statline' v-if="lootItem.secondary">
              <p class='statname'>{{lootItem.secondary.name}}</p>
              <p class='statvalue'>{{lootItem.secondary.stamina}}</p>
            </div>
            <div class='statline' v-for='stat in lootItem.attributes'>
              <p class='statname'>{{ stat.name }}</p>
              <p class='statvalue'>{{ stat.value }}</p>
            </div>
          </div>
          <template v-if="owner && lootItem.damaged !== undefined">
            <button class="loot-damage" :class="{ 'hidden' : !expanded }" @click.stop.prevent="doDamage">Damage</button>
            <button class="loot-repair" :disabled="!lootItem.damaged" :class="{'hidden' : !expanded }" @click.stop.prevent="doRepair">Repair</button>
            <!-- <v-touch class="button loot-damage" :class="{ 'hidden' : !expanded }" @tap="doDamage">Damage</v-touch>
            <v-touch class="button loot-repair" :class="{ 'disabled' : !lootItem.damaged, 'hidden' : !expanded }" @tap="doRepair">Repair</v-touch> -->
          </template>
        </template>
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
  methods: {
    takeOrEquip: async function () {
      if (!this.owner && this.canloot) {
        this.take();
      } else if (this.owner) {
        this.equip();
      }
    },

    take: async function () {
      try {
        await Cloud.takeItem.with({
          itemId: this.lootItem.id,
          itemType: this.lootItem.itemType,
          battleId: this.battleId
        });
      } catch (err) {
        if (err.code === 'destinationInventoryFull') {
          document.getElementById('whiff_clip').play();
        }
      }
    },

    equip: async function () {
      await Cloud.equipItem.with({
        itemId: this.lootItem.id,
        itemType: this.lootItem.itemType,
        battleId: this.battleId
      });
    },

    doDamage: async function () {
      await Cloud.damageItem.with({
        itemId: this.lootItem.id,
        itemType: this.lootItem.itemType,
        battleId: this.battleId
      });
    },

    doRepair: async function () {
      await Cloud.repairItem.with({
        itemId: this.lootItem.id,
        itemType: this.lootItem.itemType,
        battleId: this.battleId
      });
    },
  }
});
