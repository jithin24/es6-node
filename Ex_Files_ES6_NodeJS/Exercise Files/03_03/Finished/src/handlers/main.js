var popGen = require('../lib/popGen'),
  dataStore = require('../lib/dataStore');

module.exports = function (request, reply) {
  const promises = [
    popGen.getPopularSlices(),
    popGen.getMostPopular(),
    popGen.getNewestSlice(),
    popGen.getMostImproved(),
    dataStore.getPizzas()
  ];

  Promise.all(promises)
  .then((results) => {
    const context = {
      popSlices: results[0],
      mostPopular: results[1],
      newestSlice: results[2],
      mostImproved: results[3],
      pizzas: results[4]
    };
    return reply.view('index', context);
  })
  .catch((err) => {
    console.error(err);
  });
};
