module.exports = {


  friendlyName: 'Damage types',


  description: 'get the collection of damage types',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    return exits.success({
      dmgTypes: await DamageType.find({ display: true }),
    });

  }


};
