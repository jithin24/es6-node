var dataStore = require('../lib/dataStore');

module.exports = function (request, reply) {
  dataStore.getPizzas()
    .then(reply)
    .catch(reply);
};
