/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

import './style.css';

export const Celula = ({ configCel, onOpen }) => {
  const a = 10;
  return (
    <div className={configCel.ship.hasShip ? 'celula-bg' : ''}>
      {configCel.ship.imagePath && (
      <img
        className={`img ${configCel.ship.imagePath}`}
        src={`./assets/img/${configCel.ship.imagePath}.svg`}
        alt=""
      />
      )}
      {!configCel.ship.size > 0 && (
        <img
          className="bomba"
          src="./assets/img/bomba.svg"
          alt="bomba"
        />
      )}
      <div
        className={!configCel.open
          ? 'celula regular'
          : 'celula withou-border'}
        onClick={onOpen}
      />
    </div>
  );
};
