var fluxGen = require('../lib/fluxGen');

function getRand () {
  return +(Math.random() * 100).toFixed(0);
}

function Pizza (startingDate, quotes, ticker, name, startingQuote, variability = getRand(), positivity = getRand()) {
  this.startingDate = startingDate;
  this.ticker = ticker;
  this.name = name;
  this.startingQuote = startingQuote;
  this.variability = variability;
  this.positivity = positivity;
  this.quotes = quotes || [this.startingQuote];

  // private methods
  var addQuote = quote => this.quotes.push(quote);

  var getQuote = quoteIndex => this.quotes[quoteIndex];

  this.getNext = function () {
    var newQuote = fluxGen(this.getLast(), 1, this.variability, this.positivity)[0];
    addQuote(newQuote);
    return newQuote;
  };

  this.getLast = function () {
    return getQuote(this.quotes.length - 1);
  };

  this.getDatedQuotes = function () {
    var quotesMap = {},
      curDate = startingDate;

    this.quotes.forEach(function (quote) {
      quotesMap[curDate] = quote;
      curDate.setDate(curDate.getDate() + 1);
    });

    return quotesMap;
  };
}

Pizza.hydrate = function (pizzaObj) {
  var newPizza = new Pizza(
    pizzaObj.startingDate,
    pizzaObj.quotes,
    pizzaObj.ticker,
    pizzaObj.name,
    pizzaObj.startingQuote,
    pizzaObj.variability,
    pizzaObj.positivity);

  newPizza.quotes = pizzaObj.quotes;
  return newPizza;
};

module.exports = Pizza;
