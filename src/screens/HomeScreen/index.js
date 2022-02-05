/* eslint-disable */
import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
//   const [size, setSize] = useState('');
  const [checked, setChecked] = useState(false);

//   const handleOnChange = () => {
//     setIsChecked(!isChecked);
//   };

  function toggle(value) {
    return !value;
  }

//   function handleClickStart(name, size) {
//     setName(name);
//     setSize(size);
//     console.log('Name and Size saved!');
//   }

  function handleClickPlay(event) {
    navigate(`/game/${name}/${checked ? '16' : '12'}`, { replace: true });
    // history.push('/game');
  }

  function handleClickScore() {
    navigate("/score", { replace: true });
  }
  return (
    <div className="container-jogo-home">
      <div className="content-home">
        <h1 className="title-home">Batalha Naval</h1>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Nome"
            className="input-nome"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="tabuleiro-um"
            checked={!checked}
            onChange={() => setChecked(toggle)}
            className="select-size-one"
          />
          <span className="select-label">12x12</span>
          <input
            type="checkbox"
            name="tabuleiro-dois"
            checked={checked}
            onChange={() => setChecked(toggle)}
            className="select-size-two"
          />
          <span className="select-label">16x16</span>
        </div>

        <div className="btn-container-home">
          <button className="full-btn" onClick={handleClickPlay}>
            JOGAR
          </button>
          <button className="border-btn" onClick={handleClickScore}>
            SCORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
