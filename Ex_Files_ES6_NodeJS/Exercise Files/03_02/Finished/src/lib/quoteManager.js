var api = require('./api');

module.exports = {
  updateQuotes () {
    return new Promise((resolve, reject) => {
      api.getAllPizzas(function (err, pizzas) {
        var newData = [],
          pizza;

        if (err) {
          reject(err);
        } else {
          for (var key in pizzas) {
            pizza = pizzas[key];
            newData.push({
              ticker: pizza.ticker,
              nextQuote: pizza.getNext()
            });
          }

          console.log(`${JSON.stringify(newData)}
            updating quotes`);
          resolve(newData);
        }
      });
    });
  }
};
