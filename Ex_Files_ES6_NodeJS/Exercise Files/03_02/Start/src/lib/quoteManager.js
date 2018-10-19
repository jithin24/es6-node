var api = require('./api');

module.exports = {
  updateQuotes (callback) {
    api.getAllPizzas(function (err, pizzas) {
      var newData = [],
        pizza;

      for (var key in pizzas) {
        pizza = pizzas[key];
        newData.push({
          ticker: pizza.ticker,
          nextQuote: pizza.getNext()
        });
      }

      console.log(`${JSON.stringify(newData)}
        updating quotes`);
      callback(null, newData);
    });
  }
};
