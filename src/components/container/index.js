import React from 'react';
import { Campo } from '../campo';
// import { Celula } from '../celula';

import './style.css';

export const Container = () => (
  <div className="container-jogo">
    <div className="col-1">
      <div className="content">
        <h2>Pontuação</h2>
        <h3>00000000</h3>
        <h3>Fulaninho</h3>
        <Campo />
      </div>
    </div>
    <div className="col-2">
      <div className="content">
        <h2>Pontuação</h2>
        <h3>00000000</h3>
        <h3>IAzinha</h3>
        <Campo />
      </div>
    </div>
  </div>
);
