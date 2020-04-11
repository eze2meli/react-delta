import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the appPageDescription state domain
 */

const selectAppPageDescriptionDomain = state =>
  state.appPageDescription || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppPageDescription
 */

const makeSelectAppPageDescription = () =>
  createSelector(
    selectAppPageDescriptionDomain,
    substate => substate,
  );

export default makeSelectAppPageDescription;
export { selectAppPageDescriptionDomain };
