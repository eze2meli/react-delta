import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the endpointPageDescription state domain
 */

const selectEndpointPageDescriptionDomain = state =>
  state.endpointPageDescription || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EndpointPageDescription
 */

const makeSelectEndpointPageDescription = () =>
  createSelector(
    selectEndpointPageDescriptionDomain,
    substate => substate,
  );

export default makeSelectEndpointPageDescription;
export { selectEndpointPageDescriptionDomain };
