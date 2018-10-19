var Pizza = require('../models/pizza');

const data = new Map();

// initialize data store with bootstrapped data
function init () {
  data.set('quotes', require('../mock/quotes'));
  initPizzas()
    .then((pizzas) => {
      data.set('pizzas', pizzas);
    });
}

function getQuotes (ticker) {
  return data.get('quotes')[ticker];
}

function getAllQuotes () {
  return new Promise((resolve) => {
    resolve(data.get('quotes'));
  });
}

function getPizzas () {
  return new Promise((resolve) => {
    resolve(data.get('pizzas'));
  });
}

function getPizza (ticker) {
  return new Promise((resolve) => {
    resolve(data.get('pizzas')[ticker]);
  });
}

function initPizzas () {
  return new Promise((resolve) => {
    const pizzas = require('../mock/pizzas'),
      realPizzas = {},
      startingDate = new Date();

    pizzas.forEach(function (pizza) {
      realPizzas[pizza[0]] = new Pizza(startingDate, data.get('quotes')[pizza[0]], ...pizza);
    });
    resolve(realPizzas);
  });
}

module.exports = {
  init,
  getQuotes,
  getAllQuotes,
  getPizzas,
  getPizza
};
