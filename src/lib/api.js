var request = require('request'),
  Pizza = require('../models/pizza');

var localPort;

function initPort (port) {
  localPort = port;
}

function getAllQuotes () {
  return new Promise((resolve, reject) => {
    request('http://localhost:' + localPort + '/quotes', function (error, res, body) {
      if (error) {
        reject(error);
      } else {
        console.log("getAllQuotes " + body);
        resolve(body);
      }
    });
  });
}

function getPizza (ticker) {
  return new Promise((resolve, reject) => {
    request('http://localhost:' + localPort + '/pizza/' + ticker, function (error, res, body) {
      if (error) {
        reject(error);
      } else {
        console.log("getPizza " + body);
        resolve(Pizza.hydrate(JSON.parse(body)));
      }
    });
  });
}

function getAllPizzas () {
  return new Promise((resolve, reject) => {
    request('http://localhost:' + localPort + '/pizzas', function (error, res, body) {
      if (error) {
        reject(error);
      } else {
        console.log("getAllPizzas " + body);
        const staticPizzas = JSON.parse(body),
          pizzas = [];

        for (var ix in staticPizzas) {
          pizzas.push(Pizza.hydrate(staticPizzas[ix]));
        }
        resolve(pizzas);
      }
    });
  });
}

module.exports = {
  initPort,
  getAllQuotes,
  getPizza,
  getAllPizzas
};
