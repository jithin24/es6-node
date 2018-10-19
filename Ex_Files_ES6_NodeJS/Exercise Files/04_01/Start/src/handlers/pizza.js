var dataStore = require('../lib/dataStore');

module.exports = function (request, reply) {
  var ticker = request.params.ticker;

  if (!ticker) {
    return reply('No ticker provided');
  }

  dataStore.getPizza(ticker)
    .then(reply)
    .catch(reply);
};
