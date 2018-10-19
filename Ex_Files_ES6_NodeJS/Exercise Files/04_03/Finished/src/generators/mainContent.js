function* mainContent () {
  const context = {
    popSlices: yield,
    mostPopular: yield,
    newestSlice: yield,
    mostImproved: yield,
    pizzas: yield
  };

  return context;
}

module.exports = mainContent;
