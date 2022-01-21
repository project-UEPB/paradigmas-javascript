/* eslint-disable */
import React from 'react'

const HomeScreen = () => {
    return(
        <div className="tela-incial">
            <h1>Batalha Naval</h1>
            <div className="input-nome">
                <input 
                type="text"
                placeholder="Nome"/>
            </div>
            <div>
                <input type="checkbox" name="tabuleiro-um"/>12x12
                <input type="checkbox" name="tabuleiro-dois"/>16x16
            </div> 
        </div>
    );
}

export default HomeScreen;
