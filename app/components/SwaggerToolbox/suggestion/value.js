export default {
  impact: (params, key) => {
    const { actualObj } = params;
    const objKey = params.path.slice(-1).pop();
    actualObj[objKey] = params.elems[key];
    return [actualObj, params.path];
  },
  isApplied: (params, key) => {
    const { actualObj } = params;
    const objKey = params.path.slice(-1).pop();
    return actualObj[objKey] === params.elems[key];
  },
};
