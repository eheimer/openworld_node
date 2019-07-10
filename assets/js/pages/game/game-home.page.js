parasails.registerPage('game-home', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    gameId: undefined,
    game: {},
    character: {},
    battles: [],
    admin: false
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
    io.socket.on('game', async event => {
      if (event.action === 'gameDeleted') {
        //special case where the game has been deleted
        //while players are still on the game screen
        window.location = '/';
      }
      if (event.battles) {
        this.battles = event.battles;
      }
      if (event.game) {
        this.game = event.game;
        this.admin = this.game.owner === window.SAILS_LOCALS.me.id;
      }
      if (event.gameName) {
        this.game.name = event.gameName;
      }
    });
  },

  mounted: async function () {
    if (this.gameId) {
      await Cloud.joinGame.with({
        gameId: this.gameId
      });
    }
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    deleteBattle: async function (id) {
      await Cloud.deleteBattle.with({
        battleId: id
      });
    },
    joinBattle: function (id) {
      window.location = '/owbattle/' + id;
    },
    newBattle: function () {
      window.location = '/owbattle';
    },
    updateGameName: async function (event) {
      await Cloud.updateGameName.with({
        name: event.value
      });
    },
    deleteGame: async function () {
      await Cloud.deleteGame();
      window.location = '/';
    },
    editPlayers: function () {
      window.location = '/owgame/players';
    }
  }
});
