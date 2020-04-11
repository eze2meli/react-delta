/**
 *
 * Asynchronously loads the component for AppPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
