export default {
  unshift: (object, oneElemObject) => {
    const [key] = Object.keys(oneElemObject);
    const value = oneElemObject[key];
    const unshifted = {};
    unshifted[key] = value;
    Object.keys(object).forEach(k => {
      unshifted[k] = object[k];
    });
    return unshifted;
  },
};
