module.exports = {


  friendlyName: 'List all',


  description: 'Get the short list of all monsters/ids',


  inputs: {

  },


  exits: {

  },


  fn: async function (unusedInputs) {
    return {
      monsters: await Monster.find({ select: [ 'id', 'name' ]}),
    };
  }


};
