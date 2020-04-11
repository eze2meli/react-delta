import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the endpointPageUsage state domain
 */

const selectEndpointPageUsageDomain = state =>
  state.endpointPageUsage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EndpointPageUsage
 */

const makeSelectEndpointPageUsage = () =>
  createSelector(
    selectEndpointPageUsageDomain,
    substate => substate,
  );

export default makeSelectEndpointPageUsage;
export { selectEndpointPageUsageDomain };
