/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useEffect } from 'react';
import { Celula } from '../celula';
import {
  ships,
} from '../../utils/kindShips';

import './style.css';

export const Campo = () => {
  const initialCelulas = new Array(16).fill(null).map((_, i) => new Array(16).fill(null)
    .map((__, j) => ({
      open: false,
      x: i,
      y: j,
      ship: {
        hasShip: false,
        size: 0,
        kind: '',
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

  return (
    <div className="campo campo-16x16">
      {celulas.map((line, x) => line.map((configCel, y) => (
        <Celula
          configCel={configCel}
          onOpen={() => handlerUpdateCelulas(x, y, {
            ...celulas[x][y], open: true,
          })}
        />
      )))}
    </div>
  );
};
