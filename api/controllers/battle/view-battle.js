module.exports = {


  friendlyName: 'View battle',


  description: 'Display "Battle" page.',

  inputs: {
    battleId: {
      type: 'number',
      required: true
    }

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/battle/battle'
    }

  },


  fn: async function (inputs, exits) {
    var battle = await Battle.findOne({id: inputs.battleId});

    if(!battle) { return this.res.redirect('/owgame/' + this.req.me.currentGame); }
    if(battle.game !== this.req.me.currentGame){ return this.res.redirect('/owgame/' + this.req.me.currentGame); }

    // Respond with view.
    return exits.success({
      battleId: inputs.battleId,
    });
  }
};
