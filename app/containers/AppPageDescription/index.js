/**
 *
 * AppPageDescription
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAppPageDescription from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AppPageDescription() {
  useInjectReducer({ key: 'appPageDescription', reducer });
  useInjectSaga({ key: 'appPageDescription', saga });

  return (
    <div>
      <Helmet>
        <title>AppPageDescription</title>
        <meta name="description" content="Description of AppPageDescription" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AppPageDescription.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  appPageDescription: makeSelectAppPageDescription(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AppPageDescription);
