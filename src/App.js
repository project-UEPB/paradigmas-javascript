/* eslint-disable */
/* eslint linebreak-style: ["error", "windows"] */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/index.js';
import { Container } from './components/container';
import ScoreScreen from './screens/ScoreScreen/index.js';

import UserContext from './UserContext';

export const App = () => {
  // const [name, setName] = useState("Klay");
  // const [size, setSize] = useState("");

  // function handleClickStart(name, size) {
  //   setName(name);
  //   setSize(size);
  //   console.log("Name and Size saved!");
  // }

  return (
    <>
      <UserContext.Provider value={""} >
        <Router>
          <Routes>
            <Route exact element={<HomeScreen/>} path="/" />
            <Route element={<Container/>} path="/game/:name/:size" />
            <Route element={<ScoreScreen/>} path="/score" />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  )
};
