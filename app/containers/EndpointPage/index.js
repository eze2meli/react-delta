/**
 *
 * EndpointPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route, withRouter, NavLink } from 'react-router-dom';

import './styles.css';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import LeftMenu from '../../components/LeftMenu';
import makeSelectEndpointPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { EndpointPageUsage } from '../EndpointPageUsage';
import { EndpointPageDescription } from '../EndpointPageDescription';

export function EndpointPage() {
  useInjectReducer({ key: 'endpointPage', reducer });
  useInjectSaga({ key: 'endpointPage', saga });

  return (
    <div>
      <Helmet>
        <title>AppPage</title>
        <meta name="description" content="Description of AppPage" />
      </Helmet>
      <div className="row pagehead">
        <div className="col-2">
          <span className="section-heading">
            <NavLink to="/app">App NPS-Croupier</NavLink>
          </span>
        </div>
        <div className="col-4">
          <span className="section-heading">POST Generate Link</span>
        </div>
        <div className="col-4">
          <div style={{ float: 'right' }}>
            <nav className="nav nav-tabs" style={{ marginBottom: '-1px' }}>
              {contents.map(c => (
                <li className="nav-item" id={c.name}>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to={c.href}
                  >
                    {c.name}
                  </NavLink>
                </li>
              ))}
            </nav>
          </div>
        </div>
        <div className="col-2">
          <span className="section-heading">Related Epics</span>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <LeftMenu />
        </div>
        <div className="col-8">
          <Switch>
            <Route exact path="/" component={EndpointPageUsage} />
            <Route exact path="/usage" component={EndpointPageUsage} />
            <Route
              exact
              path="/description"
              component={EndpointPageDescription}
            />
          </Switch>
        </div>
        <div className="col-2">
          <span className="section-heading">Related Epics</span>
        </div>
      </div>
    </div>
  );
}

EndpointPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  endpointPage: makeSelectEndpointPage(),
});

const contents = [
  {
    name: 'Usage',
    href: '/usage',
  },
  {
    name: 'Description',
    href: '/description',
  },
  {
    name: 'Swagger',
    href: '/swagger',
  },
  {
    name: 'Artillery',
    href: '/artillery',
  },
];

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
)(withRouter(EndpointPage));
