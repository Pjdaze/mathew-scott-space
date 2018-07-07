import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import ScrollToTopRoute from './History';

import Home from './components/pages/Home';

import Contact from './components/pages/Contact';
import Work from './components/pages/Work';

const Routes = props => (
  <Switch>
    <ScrollToTopRoute path="/" exact component={Home} />
    <ScrollToTopRoute path="/Home" component={Home} />
    <ScrollToTopRoute path="/Work" component={Work} />
    <ScrollToTopRoute path="/Contact" component={Contact} />
  </Switch>
);

export default Routes;
