module.exports = {


  friendlyName: 'Condition list',


  description: '',


  inputs: {
    entityId: {
      type: 'number',
      required: false,
    },
    entityType: {
      type: 'string',
      required: false,
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var all = await Condition.find().select(['id', 'name']);
    var conditions = [];
    if (inputs.entityId) {
      //filter list based on creature's active conditions
      var actives = await ActiveCondition.findAllByEntity(inputs.entityId, inputs.entityType);
      for (var condition of all) {
        var overridden = false;
        var existing = false;
        for (var active of actives) {
          if (active.condition.id === condition.id) {
            existing = true;
            break;
          }
          if (!existing && active.condition.overrides && active.condition.overrides.includes(condition.id)) {
            overridden = true;
            break;
          }
        }
        if (!overridden && !existing) {
          conditions[conditions.length] = condition;
        }
      }
    } else {
      conditions = all;
    }

    return exits.success({
      conditions: conditions,
    });


  }


};
