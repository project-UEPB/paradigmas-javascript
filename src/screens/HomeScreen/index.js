/* eslint-disable */
import React, { useState } from 'react'
import './index.css'
import { useHistory } from "react-router-dom";


const HomeScreen = () => {
    const history = useHistory();
    const [name, setName] = useState('');

    function handleClickPlay() {
        history.push("/game");
    }

    function handleClickScore() {
        history.push("/score");
    }
    return(
        <div className="container-jogo-home">
            <div className='content-home'>
                <h1 className="title-home">Batalha Naval</h1>
                <div>
                    <input 
                    type="text"
                    value={this.name}
                    placeholder="Nome"
                    className="input-nome"
                    onChange={setName(this.name)}/>
                </div>
                <div>
                    <input type="checkbox" name="tabuleiro-um" className="select-size-one"/><span className="select-label">12x12</span>
                    <input type="checkbox" name="tabuleiro-dois" className="select-size-two"/><span className="select-label">16x16</span>
                </div>

                <div className='btn-container-home'>
                    <button className="full-btn" onClick={handleClickPlay}>JOGAR</button>
                    <button className="border-btn" onClick={handleClickScore}>SCORE</button>
                </div>


            </div>
        </div>


    );
}

export default HomeScreen;
