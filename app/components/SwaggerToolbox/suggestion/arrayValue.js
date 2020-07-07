export default {
  impact: (params, key) => {
    const { actualObj } = params;
    const objKey = params.path.slice(-1).pop();
    // TODO verify actualObj is array. If not warn user
    actualObj[objKey] = actualObj[objKey] || [];
    actualObj[objKey].push(params.elems[key]);
    return [actualObj, params.path.slice(0, -1)];
  },
  isApplied: (params, key) => {
    const { actualObj } = params;
    const objKey = params.path.slice(-1).pop();
    // TODO verify actualObj is array. If not warn user
    const arr = actualObj[objKey] || [];
    return arr.includes(key);
  },
};
