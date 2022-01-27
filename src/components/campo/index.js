/* eslint-disable no-debugger */
/* eslint-disable no-continue */
/* eslint-disable consistent-return */
/* eslint-disable for-direction */
/* eslint-disable no-restricted-syntax */
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

const getShipSelected = (arr) => arr.filter((o) => o.selected)[0];
const removeOne = (kind, arr) => arr.filter((o) => o.kind !== kind);
const XRigthSideIsValid = (size, arr, x) => {
  for (let i = x; i < x + size; i++) {
    if (arr[i].ship.hasShip) return false;
  }

  return true;
};

export const Campo = ({
  points,
  changePoints,
  player,
  seletedShip,
  statusGame,
  orientacao,
  setSelectedShip,
  campoConfig = {},
}) => {
  const handlerInitialCelulas = () => {
    const initialCelulas = new Array(campoConfig.x).fill(null).map(
      (_, i) => new Array(campoConfig.y).fill(null)
        .map((__, j) => ({
          open: !statusGame.inicio && player !== 'IAzinha' && statusGame.config,
          selected: false,
          x: j,
          y: i,
          ship: {
            hasShip: false,
            size: 0,
            kind: '',
            points: 25,
            imagePath: '',
            orientacao: 'h',
          },
        })),
    );

    return initialCelulas;
  };

  const [celulas, setCelulas] = useState(handlerInitialCelulas());
  const [qtdselectedCels, setQtdSelectedCels] = useState(0);

  const handlerUpdateCelulas = (x, y, objUpdate) => {
    const copy = [...celulas];
    copy[y][x] = objUpdate;
    setCelulas(copy);
  };

  const handlerChangeCels = (x, y) => {
    if (statusGame.config && getShipSelected(seletedShip)) {
      if (getShipSelected(seletedShip).qtd - 1 < 0) return;

      const rightSideValid = XRigthSideIsValid(
        getShipSelected(seletedShip).size,
        celulas[y],
        x,
      );

      if (!rightSideValid) return;
      if (celulas[y][x].ship.hasShip) return;
      if (getShipSelected(seletedShip).size + x > 16) return;

      let firstCicle = true;
      for (let i = x; i < getShipSelected(seletedShip).size + x; i++) {
        handlerUpdateCelulas(
          i,
          y,
          {
            ...celulas[y][i],
            open: true,
            ship: {
              imagePath: firstCicle ? getShipSelected(seletedShip).imagePath : '',
              kind: getShipSelected(seletedShip).kind,
              points: getShipSelected(seletedShip).points,
              size: getShipSelected(seletedShip).size,
              hasShip: getShipSelected(seletedShip).hasShip,
              orientacao,
            },
          },
        );

        if (firstCicle) firstCicle = false;
      }

      setSelectedShip([
        ...removeOne(getShipSelected(seletedShip).kind, seletedShip),
        {
          ...getShipSelected(seletedShip),
          qtd: getShipSelected(seletedShip).qtd - 1,
        },
      ]);
    }
  };

  const handlerSelectedCels = (x, y) => {
    setQtdSelectedCels(qtdselectedCels + 1);
  };

  const randomInitialShip = () => {
    let i = 0;
    while (i < 10) {
      const x = Math.abs(Math.floor(Math.random() * 15));
      const y = Math.abs(Math.floor(Math.random() * 15));

      if (x - ships[i].size < 0) continue;
      if (x + ships[i].size > 15) continue;

      let validSide = true;
      for (let j = x; j < ships[i].size + x; j++) {
        if (celulas[y][j].ship.hasShip) validSide = false;
      }

      for (let a = x - ships[i].size; a < x; a++) {
        if (celulas[y][a].ship.hasShip) validSide = false;
      }

      if (!validSide) continue;

      if (!celulas[y][x].ship.hasShip) {
        if (ships[i].size + x < 15) {
          let img = true;

          for (let k = x - ships[i].size; k < x; k++) {
            handlerUpdateCelulas(
              k,
              y,
              {
                y,
                x: k,
                open: false,
                ship: {
                  ...ships[i],
                  imagePath: img ? ships[i].imagePath : '',
                  orientacao: 'h',
                },
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
    if (player === 'IAzinha') randomInitialShip();
    if (statusGame.config) setCelulas(handlerInitialCelulas());
  }, [statusGame]);

  const handlerChangePoints = (celula) => {
    if (celula.ship.hasShip && !celula.open) {
      changePoints({ ...points, [player]: points[player] + celula.ship.points });
    } else if (!celula.ship.hasShip) {
      changePoints({ ...points, [player]: points[player] - celula.ship.points });
    }
  };

  return (
    <div className="campo campo-16x16">
      {celulas.map((line, y) => line.map((configCel, x) => (
        <Celula
          statusGame={statusGame}
          key={(x ** 2) + y}
          configCel={configCel}
          xy={{ x, y }}
          onOpen={() => handlerChangeCels(x, y)}
          changePoints={() => handlerChangePoints(configCel)}
        />
      )))}
    </div>
  );
};
