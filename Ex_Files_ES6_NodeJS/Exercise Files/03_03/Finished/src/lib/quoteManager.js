var api = require('./api');

module.exports = {
  updateQuotes () {
    return new Promise((resolve, reject) => {
      api.getAllPizzas()
        .then((pizzas) => {
          const newData = [];
          let pizza;
          for (const key in pizzas) {
            pizza = pizzas[key];
            newData.push({
              ticker: pizza.ticker,
              nextQuote: pizza.getNext()
            });
          }

          console.log(`${JSON.stringify(newData)}
            updating quotes`);
          resolve(newData);
        })
        .catch(reject);
    });
  }
};
