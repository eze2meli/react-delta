/**
 *
 * EndpointPageDescription
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
import makeSelectEndpointPageDescription from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function EndpointPageDescription() {
  useInjectReducer({ key: 'endpointPageDescription', reducer });
  useInjectSaga({ key: 'endpointPageDescription', saga });

  return (
    <div>
      <Helmet>
        <title>EndpointPageDescription</title>
        <meta
          name="description"
          content="Description of EndpointPageDescription"
        />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

EndpointPageDescription.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  endpointPageDescription: makeSelectEndpointPageDescription(),
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
)(EndpointPageDescription);
