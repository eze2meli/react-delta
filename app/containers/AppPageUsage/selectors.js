import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the appPageUsage state domain
 */

const selectAppPageUsageDomain = state => state.appPageUsage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppPageUsage
 */

const makeSelectAppPageUsage = () =>
  createSelector(
    selectAppPageUsageDomain,
    substate => substate,
  );

export default makeSelectAppPageUsage;
export { selectAppPageUsageDomain };
