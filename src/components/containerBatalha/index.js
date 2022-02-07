/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Botao } from '../Botao';
import { Campo } from '../campo';
import { SelectShip } from '../selectShip';

import './style.css';

const initialPoints = {
  player: {
    name: 'jose',
    points: 0,
  },
  IAzinha: 0,
};
export const initialShips = [
  {
    kind: 'submarino',
    qtd: 4,
    selected: false,
    size: 2,
    hasShip: true,
    imagePath: 'submarino',
    points: 1000,
  },
  {
    kind: 'contratopedeiros',
    qtd: 3,
    selected: false,
    size: 3,
    hasShip: true,
    imagePath: 'contratopedeiros',
    points: 500,
  },
  {
    kind: 'navioTanque',
    qtd: 2,
    selected: false,
    size: 4,
    hasShip: true,
    imagePath: 'navio-tanque',
    points: 750,
  },
  {
    kind: 'portaAvioes',
    qtd: 1,
    selected: false,
    size: 5,
    hasShip: true,
    imagePath: 'porta-avioes',
    points: 300,
  },
];

const initialStatusGame = {
  config: false,
  inicio: false,
  reiniciar: false,
};

const initialSuperTiro = {
  player: false,
  IAzinha: false,
};

const findBy = (kind, arr) => arr.filter((el) => el.kind === kind)[0];
const removeOne = (kind, arr) => {
  const aux = [];
  for (const el of arr) {
    if (el.kind !== kind) aux.push({ ...el, selected: false });
  }
  return aux;
};

export const ContainerBatalha = () => {
  const [points, setPoints] = useState(initialPoints);
  const [ships, setShips] = useState(initialShips);
  const [statusGame, setStatusGame] = useState(initialStatusGame);
  const [orientacao, setOrientacao] = useState('h');
  const [playerGaming, setPlayerGaming] = useState('player');
  const [superTiro, setSuperTiro] = useState(initialSuperTiro);

  const handlerSelectedShip = (shipKey) => {
    if (statusGame.config) {
      const qtdShip = findBy(shipKey, ships).qtd;

      if (qtdShip === 0) {
        setShips([
          ...removeOne(shipKey, ships),
          {
            ...findBy(shipKey, ships),
            selected: !findBy(shipKey, ships).selected,
          },
        ]);
      }

      if (qtdShip - 1 < 0) return;

      const objAux = [
        ...removeOne(shipKey, ships),
        {
          ...findBy(shipKey, ships),
          kind: shipKey,
          qtd: qtdShip,
          selected: !findBy(shipKey, ships).selected,
        },
      ];

      setShips(objAux);
    }
  };

  const handlerConfig = () => {
    if (!statusGame.config) {
      setShips(initialShips);
      setStatusGame({ ...initialStatusGame, config: true });
    }
  };

  const canInitGame = () => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].qtd > 0) return false;
    }

    return true;
  };

  const handlerInicio = () => {
    if (!statusGame.inicio && canInitGame()) setStatusGame({ ...initialStatusGame, inicio: true });
  };

  return (
    <div className="container-jogo">
      <Botao
        onClick={() => {}}
        text="<"
        title="Voltar"
      />
      <div className="cols">
        <div className="col-1">
          <div className="content">
            <h2>Pontuação</h2>
            <h3>{points.player.points}</h3>
            <h3>{points.player.name}</h3>
            <Campo
              points={points}
              changePoints={setPoints}
              player="player"
              playerGaming={playerGaming}
              setPlayerGaming={setPlayerGaming}
              seletedShip={ships}
              orientacao={orientacao}
              setSelectedShip={setShips}
              statusGame={statusGame}
              campoConfig={{ x: 16, y: 16 }}
              // superTiro={superTiro}
            />
          </div>
        </div>
        <div className="col-2">
          <div className="content">
            <h2>Pontuação</h2>
            <h3>{points.IAzinha}</h3>
            <h3>IAzinha</h3>
            <Campo
              campoConfig={{ x: 16, y: 16 }}
              points={points}
              playerGaming={playerGaming}
              setPlayerGaming={setPlayerGaming}
              changePoints={setPoints}
              statusGame={statusGame}
              orientacao="h"
              player="IAzinha"
              superTiro={superTiro}
              onChangeSuperTiro={setSuperTiro}
            />
          </div>
        </div>
      </div>
      <div className="options">
        <SelectShip
          orientacao={orientacao}
          statusGame={statusGame}
          onChangeOrientacao={setOrientacao}
          initialShips={ships}
          onChangeShip={setShips}
          onChangeSelectedShip={handlerSelectedShip}
          superTiro={superTiro}
          onChangeSuperTiro={setSuperTiro}
          playerGaming={playerGaming}
        />
        <div className="btns-play-game">
          <Botao
            text="Configurar Campo"
            onClick={handlerConfig}
          />
          <Botao
            text="Reiniciar"
            onClick={() => setStatusGame({ ...initialStatusGame, reiniciar: true })}
          />
          <Botao
            text="Iniciar"
            onClick={() => handlerInicio()}
          />
        </div>
      </div>
    </div>
  );
};
