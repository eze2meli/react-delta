/*
 * AppPage Messages
 *
 * This contains all the text for the AppPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AppPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AppPage container!',
  },
});
