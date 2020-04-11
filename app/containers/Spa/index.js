/**
 *
 * Spa
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSpa from './selectors';
import reducer from './reducer';
import messages from './messages';

export function Spa() {
  useInjectReducer({ key: 'spa', reducer });

  return (
    <div>
      <Helmet>
        <title>Spa</title>
        <meta name="description" content="Description of Spa" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Spa.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  spa: makeSelectSpa(),
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
)(Spa);
