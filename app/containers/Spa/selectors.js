import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the spa state domain
 */

const selectSpaDomain = state => state.spa || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Spa
 */

const makeSelectSpa = () =>
  createSelector(
    selectSpaDomain,
    substate => substate,
  );

export default makeSelectSpa;
export { selectSpaDomain };
