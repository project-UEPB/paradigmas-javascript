/* eslint-disable */
import React from 'react';

import './index.css';

const ScoreScreen = () => (
  <div className="container-jogo-score">
   
    <div className="content-score">

      <h1 className="title-score">Ranking</h1>

      <table className="table-score">
        <tr>
          <td>Nome</td>
          <td>Pontuação</td>
          <td>Data</td>
          <td>Horário</td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>50000</td>
          <td>01/01/2001</td>
          <td>12:23</td>
        </tr>
        <tr>
          <td>Jose</td>
          <td>45000</td>
          <td>15/01/2022</td>
          <td>13:30</td>
        </tr>
        <tr>
          <td>Lucas</td>
          <td>40000</td>
          <td>02/03/2023</td>
          <td>13:30</td>
        </tr>
        <tr>
          <td>Klayton</td>
          <td>37000</td>
          <td>10/01/2022</td>
          <td>00:00</td>
        </tr>
        <tr>
          <td>João</td>
          <td>35000</td>
          <td>02/01/2021</td>
          <td>12:15</td>
        </tr>
      </table>
    </div>
  </div>
);

export default ScoreScreen;
