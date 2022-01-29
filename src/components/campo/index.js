/* eslint-disable no-await-in-loop */
/* eslint-disable no-useless-return */
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
  playerGaming,
  setPlayerGaming,
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
  const [selectedCels, setSelectedCels] = useState([]);

  const handlerUpdateCelulas = (x, y, objUpdate) => {
    const copy = [...celulas];
    copy[y][x] = objUpdate;
    setCelulas(copy);
  };

  const handlerConfigCels = (x, y) => {
    if (statusGame.config && getShipSelected(seletedShip)) {
      if (orientacao === 'h') {
        if (getShipSelected(seletedShip).qtd - 1 < 0) return;
        if (celulas[y][x].ship.hasShip) return;
        if (getShipSelected(seletedShip).size + x > 16) return;

        const rightSideValid = XRigthSideIsValid(
          getShipSelected(seletedShip).size,
          celulas[y],
          x,
        );

        if (!rightSideValid) return;

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
      } else if (orientacao === 'v') {
        if (getShipSelected(seletedShip).qtd - 1 < 0) return;
        if ((y + 1) - getShipSelected(seletedShip).size < 0) return;
        if (celulas[y][x].ship.hasShip) return;

        for (let l = y - getShipSelected(seletedShip).size + 1; l < y + 1; l++) {
          if (celulas[l][x].ship.hasShip) return;
        }

        let firstCicle = true;
        for (let i = y - getShipSelected(seletedShip).size + 1; i < y + 1; i++) {
          handlerUpdateCelulas(
            x,
            i,
            {
              ...celulas[i][x],
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
      } else {
        // eslint-disable-next-line no-useless-return
        return;
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

  const closeCels = () => {
    const copy = [...celulas];
    for (let i = 0; i < copy.length; i++) {
      for (let j = 0; j < copy[i].length; j++) {
        copy[i][j] = {
          ...celulas[i][j],
          open: false,
        };
      }
    }

    setCelulas(copy);
  };

  const handlerSelectedCels = (x, y) => {
    if (selectedCels.length >= 3) return;
    const copy = [...selectedCels];
    copy.push({ x, y });
    setSelectedCels(copy);
    handlerUpdateCelulas(
      x,
      y,
      {
        ...celulas[y][x],
        selected: true,
      },
    );
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

  const delay = (n) => {
    return new Promise(((resolve) => {
      setTimeout(resolve, n * 1000);
    }));
  };

  useEffect(() => {
    if (statusGame.config && !statusGame.inicio) {
      setCelulas(handlerInitialCelulas());
    }
  }, [statusGame.config]);

  useEffect(() => {
    if (statusGame.inicio) {
      closeCels();
    }

    if (player === 'IAzinha') randomInitialShip();
  }, [statusGame.inicio]);

  const handlerChangePoints = (celula) => {
    if (celula.ship.hasShip && celula.open) {
      // console.log('#->', player, celula);
      // console.log('#->', points);
      // if (playerGaming === 'player') {
      //   changePoints({
      //     ...points,
      //     [player]: {
      //       ...points[player],
      //       points: points[player].points + celula.ship.points,
      //     },
      //   });
      // } else if (playerGaming === 'IAzinha') {
      //   changePoints({
      //     ...points,
      //     [player]: points[player] + celula.ship.points,
      //   });
      // }
    } else if (!celula.ship.hasShip && celula.open) {
      if (player === 'IAzinha') {
        console.log(points);
        console.log('|->', player, {
          ...points,
          [player]: points[player].points - celula.ship.points,
        });
        // changePoints({
        //   ...points,
        //   [player]: {
        //     ...points[player],
        //     points: points[player].points - celula.ship.points,
        //   },
        // });
      } else if (player === 'player') {
        console.log(points);
        console.log('#->', player, {
          ...points,
          [player]: points[player].points - celula.ship.points,
        });
        // changePoints({
        //   ...points,
        //   [player]: points[player] - celula.ship.points,
        // });
      }
    }
  };

  const handlerGame = (x, y) => {
    if (statusGame.config) handlerConfigCels(x, y);

    if (statusGame.inicio) {
      handlerSelectedCels(x, y);
      if (playerGaming === 'player') {
        if (player === 'IAzinha' && selectedCels.length === 3) {
          let auxPoints = { ...points };
          for (let i = 0; i < selectedCels.length; i++) {
            handlerUpdateCelulas(
              selectedCels[i].x,
              selectedCels[i].y,
              {
                ...celulas[selectedCels[i].y][selectedCels[i].x],
                open: true,
                selected: false,
              },
            );

            if (
              celulas[selectedCels[i].y][selectedCels[i].x].ship.hasShip
              && celulas[selectedCels[i].y][selectedCels[i].x].open
            ) {
              auxPoints = {
                ...auxPoints,
                player: {
                  ...auxPoints.player,
                  points: auxPoints.player.points
                  + celulas[selectedCels[i].y][selectedCels[i].x].ship.points,
                },
              };
            } else if (
              !celulas[selectedCels[i].y][selectedCels[i].x].ship.hasShip
              && celulas[selectedCels[i].y][selectedCels[i].x].open
            ) {
              auxPoints = {
                ...auxPoints,
                player: {
                  ...auxPoints.player,
                  points: auxPoints.player.points
                  - celulas[selectedCels[i].y][selectedCels[i].x].ship.points,
                },
              };
            }
          }

          changePoints(auxPoints);
          setSelectedCels([]);
          setPlayerGaming('AIzinha');
          return;
        }
      }
    }
  };

  useEffect(() => {
    const fnAux = async () => {
      if (playerGaming === 'AIzinha' && player === 'player') {
        const celsSelected = [];
        let l = 0;
        while (l < 3) {
          const xAux = Math.abs(Math.floor(Math.random() * 15));
          const yAux = Math.abs(Math.floor(Math.random() * 15));
          if (celulas[yAux][xAux].open) continue;
          celsSelected.push({ x: xAux, y: yAux });
          handlerUpdateCelulas(
            xAux,
            yAux,
            {
              ...celulas[yAux][xAux],
              selected: true,
            },
          );
          l++;
        }

        if (player === 'player' && celsSelected.length === 3) {
          let auxPoints = { ...points };
          for (let i = 0; i < celsSelected.length; i++) {
            await delay(1);

            handlerUpdateCelulas(
              celsSelected[i].x,
              celsSelected[i].y,
              {
                ...celulas[celsSelected[i].y][celsSelected[i].x],
                open: true,
                selected: false,
              },
            );

            if (
              celulas[celsSelected[i].y][celsSelected[i].x].ship.hasShip
              && celulas[celsSelected[i].y][celsSelected[i].x].open
            ) {
              auxPoints = {
                ...auxPoints,
                IAzinha: auxPoints.IAzinha
                  + celulas[celsSelected[i].y][celsSelected[i].x].ship.points,
              };
            } else if (
              !celulas[celsSelected[i].y][celsSelected[i].x].ship.hasShip
              && celulas[celsSelected[i].y][celsSelected[i].x].open
            ) {
              auxPoints = {
                ...auxPoints,
                IAzinha: auxPoints.IAzinha
                  - celulas[celsSelected[i].y][celsSelected[i].x].ship.points,
              };
            }
          }

          changePoints(auxPoints);
          setPlayerGaming('player');
          return;
        }
      }
    };

    fnAux();
  }, [playerGaming]);

  return (
    <div className="campo campo-16x16">
      {celulas.map((line, y) => line.map((configCel, x) => (
        <Celula
          statusGame={statusGame}
          key={(x ** 2) + y}
          configCel={configCel}
          xy={{ x, y }}
          onOpen={() => handlerGame(x, y)}
          changePoints={() => handlerChangePoints(configCel)}
        />
      )))}
    </div>
  );
};
