function* itrObject (obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield {
        key,
        val: obj[key]
      };
    }
  }
}

module.exports = itrObject;
