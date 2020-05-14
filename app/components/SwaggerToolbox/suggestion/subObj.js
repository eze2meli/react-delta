export default {
  impact: (params, key) => {
    const { actualObj } = params;
    actualObj[key] = params.elems[key];
    return [actualObj, params.path];
  },
  isApplied: (params, key) => {
    const { actualObj } = params;
    return actualObj[key];
  },
};
