import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the appPageSwagger state domain
 */

const selectAppPageSwaggerDomain = state =>
  state.appPageSwagger || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppPageSwagger
 */

const makeSelectAppPageSwagger = () =>
  createSelector(
    selectAppPageSwaggerDomain,
    substate => substate,
  );

export default makeSelectAppPageSwagger;
export { selectAppPageSwaggerDomain };
