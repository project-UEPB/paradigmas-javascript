/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/index.js';
import GameScreen from './screens/GameScreen/index.js';
import ScoreScreen from './screens/ScoreScreen/index.js';

export const App = () => (
  <Router>
    <Switch>
      <Route exact component={HomeScreen} path="/" />
      <Route component={GameScreen} path="/game" />
      <Route component={ScoreScreen} path="/score" />
    </Switch>
  </Router>
);
