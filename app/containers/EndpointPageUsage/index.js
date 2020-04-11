/**
 *
 * EndpointPageUsage
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import '@primer/css/dist/buttons.css';
import Octicon, { Clippy } from '@primer/octicons-react';
import makeSelectEndpointPageUsage from './selectors';
import reducer from './reducer';
import saga from './saga';
import UrlInput from '../../components/UrlInput';

export function EndpointPageUsage() {
  useInjectReducer({ key: 'endpointPageUsage', reducer });
  useInjectSaga({ key: 'endpointPageUsage', saga });
  const [urlText, setUrlText] = useState('');

  return (
    <div>
      <Helmet>
        <title>AppPageUsage</title>
        <meta name="description" content="Description of AppPageUsage" />
      </Helmet>
      <div className="row">
        <div className="col-10">PATH</div>
        <div className="col-2">
          <button className="btn btn-sm right">
            <Octicon icon={Clippy} />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <UrlInput onTextChange={[e => setUrlText(e)]} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">{urlText}</div>
      </div>
    </div>
  );
}

EndpointPageUsage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  endpointPageUsage: makeSelectEndpointPageUsage(),
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
)(EndpointPageUsage);
