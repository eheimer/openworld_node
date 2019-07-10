parasails.registerPage('battle', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    battleId: undefined,
    battle: {},
    selectedCreatures: [],
    selectedCharacters: [],
    playerCharacter: null,
    playerInventory: null,
  },

  computed: {},

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
    io.socket.on('battle', async event => {
      if (event.battle && event.battle.id === this.battleId) {
        this.battle = event.battle;
        if (event.sound) {
          for (var sound of event.sound) {
            this.playSound(sound.clip, sound.delay);
          }
        }
        var private = await Cloud.getDetails();
        this.playerCharacter = private.id;
        this.playerInventory = private.inventory.id;
        for (var i = 0; i < this.battle.participants.length; i++) {
          if (this.battle.participants[i].id === private.id) {
            this.battle.participants.splice(i, 1, private);
            break;
          }
        }
      } else if (event.action === 'battleDeleted') {
        //special case where the battle has been deleted
        //while players are still on the battle screen
        window.location = '/owgame';
      }
    });
  },

  mounted: async function () {

    if (this.battleId) {
      await Cloud.joinBattle.with({
        battleId: this.battleId
      });
    }
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    playSound: function (sound, delay) {
      if (sound) {
        setTimeout(() => {
          document.getElementById(sound).play();
        }, delay);
      }
    },

    /**
     * This event bubbles up from the monster-card component when
     * the checkbox is modified.  Here we modify the selectedCreatures
     * array accordingly so that the battle-damage component can use
     * it.
     * @param {*} event
     */
    creatureSelect: function (event) {
      var index = this.selectedCreatures.indexOf(event.id);
      if (event.selected) {
        if (index === -1) {
          this.selectedCreatures.push(event.id);
        }
      } else {
        if (index !== -1) {
          this.selectedCreatures.splice(index, 1);
        }
      }
    },

    /**
     * This event bubbles up from the character-card component when
     * the checkbox is modified.  Here we modify the selectedCharacters
     * array accordingly so that the battle-damage component can use
     * it.
     * @param {*} event
     */
    characterSelect: function (event) {
      var index = this.selectedCharacters.indexOf(event.id);
      if (event.selected) {
        if (index === -1) {
          this.selectedCharacters.push(event.id);
        }
      } else {
        if (index !== -1) {
          this.selectedCharacters.splice(index, 1);
        }
      }
    },

    addEnemy: async function (event) {
      await Cloud.generateEnemy.with({
        battleId: this.battleId,
        monsterId: event.id
      });
    },

    addFriendly: async function (event) {
      var existing = false;
      var id = 0;
      if (existing) {
        await Cloud.addFriendly.with({
          battleId: this.battleid,
          creatureId: id
        });
      } else {
        await Cloud.generateFriendly.with({
          battleId: this.battleId,
          monsterId: event.id
        });
      }
    },
  } // end methods
});
