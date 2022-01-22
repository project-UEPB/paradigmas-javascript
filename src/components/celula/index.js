/* eslint-disable no-unused-vars */
import React from 'react';

import './style.css';

export const Celula = ({ configCel, onOpen, changePoints }) => {
  const handlerOnClick = () => {
    onOpen();
    changePoints();
  };

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
        onClick={handlerOnClick}
      />
    </div>
  );
};
