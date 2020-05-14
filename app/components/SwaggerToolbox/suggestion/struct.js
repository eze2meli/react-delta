import { Repo } from '@primer/octicons-react';

export default {
  impact: (params, key) => {
    const { actualObj } = params;
    actualObj[key] = params.elems[key].defaultValue;
    return [actualObj, params.path];
  },
  isApplied: (params, key) => params.actualObj[key] !== undefined,
  getSymbol: (params, key) => params.elems[key].symbol,
  icon: Repo,
};
