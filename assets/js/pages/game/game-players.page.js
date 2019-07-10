parasails.registerPage('game-players', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    gameId: undefined,
    game: {},
    players: {},
    admin: false,
    availablePlayers: []
    //…
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
    io.socket.on("game", async event => {
      if (event.action === 'gameDeleted') {
        //special case where the game has been deleted
        //while players are still on the game screen
        window.location = '/';
      }
      if (event.game) {
        this.game = event.game;
      }
      if (event.gameName) {
        this.game.name = event.gameName;
      }
      if (event.players) {
        this.players = event.players;
      }
      if (event.unplayers) {
        this.availablePlayers = event.unplayers;
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
    addPlayer: async function (id) {
      await Cloud.addPlayer.with({
        playerId: id
      });
    },
    removePlayer: async function (id, name) {
      await Cloud.removePlayer.with({
        playerId: id
      });
    }

    //…
  }
});
