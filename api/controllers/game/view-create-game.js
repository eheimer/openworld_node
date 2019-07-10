module.exports = {


  friendlyName: 'View create game',


  description: 'Display "Create game" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/game/create-game'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
