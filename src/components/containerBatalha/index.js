import React, { useState } from 'react';
import { Campo } from '../campo';
import { SelectShip } from '../selectShip';

import './style.css';

const initialPoints = { player: 0, IAzinha: 0 };

export const ContainerBatalha = () => {
  const [points, setPoints] = useState(initialPoints);

  return (
    <div className="container-jogo">
      <div className="cols">
        <div className="col-1">
          <div className="content">
            <h2>Pontuação</h2>
            <h3>{points.player}</h3>
            <h3>Fulaninho</h3>
            <Campo
              points={points}
              changePoints={setPoints}
              player="player"
            />
          </div>
        </div>
        <div className="col-2">
          <div className="content">
            <h2>Pontuação</h2>
            <h3>{points.IAzinha}</h3>
            <h3>IAzinha</h3>
            <Campo
              points={points}
              changePoints={setPoints}
              player="IAzinha"
            />
          </div>
        </div>
      </div>
      <div className="options">
        <SelectShip />
      </div>
    </div>
  );
};
