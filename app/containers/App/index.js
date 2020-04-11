/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import { AppPage } from '../AppPage';
import { EndpointPage } from '../EndpointPage';

export default function App() {
  return (
    <div className="spa-container">
      <Switch>
        <Route exact path="/" component={EndpointPage} />
        <Route exact path="/usage" component={EndpointPage} />
        <Route exact path="/description" component={EndpointPage} />
        <Route exact path="/app" component={AppPage} />
        <Route exact path="/app/swagger" component={AppPage} />
        <Route exact path="/app/description" component={AppPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
