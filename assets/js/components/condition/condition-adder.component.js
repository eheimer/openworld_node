/**
 * <condition-adder>
 * -----------------------------------------------------------------------------
 * the expanded portions of the monster card
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('conditionAdder', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'battleId',
    'entityId',
    'entityType',
    'availableConditions',
  ],

  watch: {},

  computed: {
    isValid: function () {
      if (!this.editing) {
        return true;
      }
      return this.selected !== '';
    },
  },

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      editing: false,
      selected: '',
      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div class="condition-adder">
      <button v-if="!editing" @click="editing = true">+</button>
      <div v-else class="condition-adder-editor">
        <select v-model="selected">
          <option disabled value="">Choose...</option>
          <option v-for="condition in availableConditions" :key="condition.id" :value="condition.id">{{ condition.name }}</option>
        </select>
        <button @click="apply" :disabled="!isValid">Apply</button>
        <button @click="cancel">Cancel</button>
      </div>
    </div>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  beforeUpdate: function () {},
  updated: function () {},
  mounted: async function () {

  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    apply: async function () {
      this.editing = false;
      var data = {
        battleId: this.battleId,
        entityId: this.entityId,
        entityType: this.entityType,
        conditionId: this.selected,
        removed: false
      };
      await Cloud.updateCondition.with(data);
      this.chosen = '';
      this.$emit('updated');
    },
    cancel: function () {
      this.selected = '';
      this.editing = false;
    }
  }
});
