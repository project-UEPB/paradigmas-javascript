/* eslint-disable */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import GameScreen from "./screens/GameScreen.js";
import ScoreScreen from "./screens/ScoreScreen.js";

export const App = () => (

<Router>
  <div className='App'>
    
  </div>
  <Switch>
    <Route exact path="/">
      <HomeScreen />
    </Route>
    <Route path="/game">
      <GameScreen />
    </Route>
    <Route path="/score">
      <ScoreScreen />
    </Route>
  </Switch>
</Router>
);


