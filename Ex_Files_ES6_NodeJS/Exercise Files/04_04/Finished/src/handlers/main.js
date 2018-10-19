var popGen = require('../lib/popGen'),
  dataStore = require('../lib/dataStore'),
  mainContent = require('../generators/mainContent');

module.exports = function (request, reply) {
  const gen = mainContent();
  gen.next();

  popGen.getPopularSlices()
  .then((popSlices) => {
    gen.next(popSlices);
    return popGen.getMostPopular();
  })
  .then((mostPopular) => {
    gen.next(mostPopular);
    return popGen.getNewestSlice();
  })
  .then((newestSlice) => {
    gen.next(newestSlice);
    return popGen.getMostImproved();
  })
  .then((mostImproved) => {
    gen.next(mostImproved);
    return dataStore.getPizzas();
  })
  .then((pizzas) => {
    return reply.view('index', gen.next(pizzas).value);
  })
};
