import React from 'react';
import './style.css';

const initialShowModal = { IAzinha: false, player: false };

export const Modal = ({ show, changeModal }) => {
  return (
    <>
      {show.player && !show.IAzinha
      && (
        <div className="modal">
          <div className="content-modal-win">
            <h1>
              Parabéns você ganhou a partida.
            </h1>
            <span
              className="close-modal"
              onClick={() => changeModal(initialShowModal)}
            >
              X
            </span>
            <img className="pombo" src="/assets/gifs/funny-bird.gif" alt="pombo" />
          </div>
        </div>
      )}
      {!show.player && show.IAzinha
      && (
        <div className="modal">
          <div className="content-modal-win">
            <h1>
              Ohhh, que pena a IAzinha ganhou!
            </h1>
            <span
              className="close-modal"
              onClick={() => changeModal(initialShowModal)}
            >
              X
            </span>
            <img className="pingu" src="/assets/gifs/dont-cry-dont-be-sad.gif" alt="pombo" />
          </div>
        </div>
      )}
    </>
  );
};
