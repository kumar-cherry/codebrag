var genericLoader = require('./generic_report_loader');

var AGGREGATION_STEPS = [
  {
    $group: {
      _id: "$runDate",
      allRunsCount: {
        $sum: "$runCount"
      },
      uniqueInstances: {
        $addToSet: "$instanceId"
      }
    }
  },{
    $project: {
      date: "$_id",
      allRunsCount: 1,
      uniqueInstances: 1,
      _id: 0
    }
  },{
    $sort: {
      date: 1
    }
  }
];

function wrapResults(results) {
  return {
    stats: results
  };
}

module.exports = {
  load: function instancesPerDay(db) {
    return genericLoader.makeMongoAggregation(db, AGGREGATION_STEPS, 'instanceRunStats').then(wrapResults);
  }
};

