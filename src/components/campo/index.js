/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { Celula } from '../celula';
import {
  ships,
} from '../../utils/kindShips';

import './style.css';

const initialPoints = { player: 0, IAzinha: 0 };

export const Campo = ({ points, changePoints, player }) => {
  const initialCelulas = new Array(16).fill(null).map((_, i) => new Array(16).fill(null)
    .map((__, j) => ({
      open: false,
      x: i,
      y: j,
      ship: {
        hasShip: false,
        size: 0,
        kind: '',
        points: 25,
      },
    })));

  const [celulas, setCelulas] = useState(initialCelulas);

  const handlerUpdateCelulas = (x, y, objUpdate) => {
    const copy = [...celulas];
    copy[x][y] = objUpdate;
    setCelulas(copy);
  };

  const randomInitialShip = () => {
    let i = 0;
    while (i < 10) {
      const x = Math.floor(Math.random() * 15);
      const y = Math.floor(Math.random() * 15);

      if (!celulas[x][y].ship.hasShip) {
        if (ships[i].size + y > 15) {
          let img = true;

          for (let k = y - ships[i].size; k < y; k++) {
            handlerUpdateCelulas(
              x,
              k,
              {
                x,
                y: k,
                open: false,
                ship: { ...ships[i], imagePath: img ? ships[i].imagePath : '' },
              },
            );
            img = false;
          }

          i++;
        } else if (ships[i].size + y < 15) {
          let img = true;
          for (let k = y; k < ships[i].size + y; k++) {
            handlerUpdateCelulas(
              x,
              k,
              {
                x,
                y: k,
                open: false,
                ship: { ...ships[i], imagePath: img ? ships[i].imagePath : '' },
              },
            );
            img = false;
          }
          i++;
        }
      }
    }
  };

  useEffect(() => {
    randomInitialShip();
  }, []);

  const handlerChangePoints = (celula) => {
    if (celula.ship.hasShip && !celula.open) {
      changePoints({ ...points, [player]: points[player] + celula.ship.points });
    } else if (!celula.ship.hasShip) {
      changePoints({ ...points, [player]: points[player] - celula.ship.points });
    }
  };

  return (
    <div className="campo campo-16x16">
      {celulas.map((line, x) => line.map((configCel, y) => (
        <Celula
          key={(x ** 2) + y}
          configCel={configCel}
          onOpen={() => handlerUpdateCelulas(x, y, {
            ...celulas[x][y], open: true,
          })}
          changePoints={() => handlerChangePoints(configCel)}
        />
      )))}
    </div>
  );
};
