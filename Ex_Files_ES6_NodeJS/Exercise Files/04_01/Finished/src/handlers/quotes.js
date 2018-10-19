var dataStore = require('../lib/dataStore');

module.exports = function (request, reply) {
  dataStore.getAllQuotes()
    .then(reply)
    .catch(reply);
};
