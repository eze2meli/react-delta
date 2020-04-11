/**
 *
 * AppPage
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
import { useInjectReducer } from 'utils/injectReducer';
import LeftMenu from '../../components/LeftMenu';
import makeSelectAppPage from './selectors';
import reducer from './reducer';
import { AppPageDescription } from '../AppPageDescription';
import { AppPageSwagger } from '../AppPageSwagger';

export function AppPage({ location }) {
  useInjectReducer({ key: 'appPage', reducer });
  const swaggerPath = '/app/swagger';
  const classes = [
    location.pathname === swaggerPath ? 'd-none' : 'col-2',
    location.pathname === swaggerPath ? 'col-12' : 'col-10',
  ];

  return (
    <div>
      <Helmet>
        <title>AppPage</title>
        <meta name="description" content="Description of AppPage" />
      </Helmet>
      <div className="row pagehead mx-0">
        <div className="col-2">
          <span className="section-heading">App NPS-Croupier</span>
        </div>
        <div className="col-6">
          <span className="section-heading">NPS-Croupier</span>
        </div>
        <div className="col-4">
          <div className="right">
            <nav className="nav nav-tabs">
              {contents.map(c => (
                <li className="nav-item" key={c.name}>
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
      </div>
      <div className="row pagecontent mx-0">
        <div className={classes[0]}>
          <LeftMenu />
        </div>
        <div className={classes[1]}>
          <Switch>
            <Route exact path="/app" component={AppPageSwagger} />
            <Route exact path="/app/swagger" component={AppPageSwagger} />
            <Route
              exact
              path="/app/description"
              component={AppPageDescription}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

AppPage.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  appPage: makeSelectAppPage(),
});

const contents = [
  {
    name: 'Description',
    href: '/app/description',
  },
  {
    name: 'Swagger',
    href: '/app/swagger',
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
)(withRouter(AppPage));
