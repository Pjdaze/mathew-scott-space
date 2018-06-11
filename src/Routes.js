import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import ScrollToTopRoute from './History';

import Home from './components/pages/Home';

import Contact from './components/pages/Contact';
import MyDay from './components/pages/MyDay';

const Routes = props => (
  <Switch>
    <ScrollToTopRoute path="/" exact component={Home} />
    <ScrollToTopRoute path="/Home" component={Home} />
    <ScrollToTopRoute path="/MyDay" component={MyDay} />
    <ScrollToTopRoute path="/Contact" component={Contact} />
  </Switch>
);

export default Routes;
