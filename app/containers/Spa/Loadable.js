/**
 *
 * Asynchronously loads the component for Spa
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
