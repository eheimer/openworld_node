/**
 * <admin-text>
 * -----------------------------------------------------------------------------
 * A plain text display that turns into a text box with a save button when
 * clicked, if condition is met (e.g. user is admin)
 *
 * @type {Component}
 *
 * @event click   [emitted when clicked]
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('adminText', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'canEdit',
    'value',
    'bodyclass'
  ],

  watch: {
    value: function (val) {
      this.newValue = val;
    },
  },

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      editing: false,
      newValue: this.value
      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
  <div>
    <span v-if="!editing" @click='editOnClick'> {{ value }} </span>
    <div v-else>
      <input @blur="submit()" @keyup.enter="submit()" v-model="newValue" type="text" ref="admin-text-edit"></input>
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
    //…
  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    editOnClick: async function () {
      if (this.canEdit) {
        this.editing = true;
        var input = (await this.$refs)['admin-text-edit'];
        input.focus();
        input.selectionStart = 0;
        input.selectionEnd = input.value.length;
      }
    },
    submit: async function (event) {
      if (!event || event.keycode === 13) {
        this.$emit('value-updated', {
          value: this.newValue,
        });
        this.editing = false;
      }
    }
  }
});
