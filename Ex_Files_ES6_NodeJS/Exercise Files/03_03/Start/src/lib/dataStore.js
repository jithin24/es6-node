var Pizza = require('../models/pizza');

var data = {};

// initialize data store with bootstrapped data
function init () {
  data.quotes = require('../mock/quotes');
  initPizzas()
    .then((pizzas) => {
      data.pizzas = pizzas;
    });
}

function getQuotes (ticker) {
  return data.quotes[ticker];
}

function getAllQuotes () {
  return new Promise((resolve) => {
    resolve(data.quotes);
  });
}

function getPizzas () {
  return new Promise((resolve) => {
    resolve(data.pizzas);
  });
}

function getPizza (ticker) {
  return new Promise((resolve) => {
    resolve(data.pizzas[ticker]);
  });
}

function initPizzas () {
  return new Promise((resolve) => {
    const pizzas = require('../mock/pizzas'),
      realPizzas = {},
      startingDate = new Date();

    pizzas.forEach(function (pizza) {
      realPizzas[pizza[0]] = new Pizza(startingDate, data.quotes[pizza[0]], ...pizza);
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
