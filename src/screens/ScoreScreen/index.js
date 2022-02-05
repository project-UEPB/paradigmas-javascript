/* eslint-disable */
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { format } from "date-fns";

import './index.css';

const ScoreScreen = () => {
      
    const [scores, setScores] = useState();

    useEffect(async () => {
        await api
        .get("/score/read")
        .then((response) => {
            console.log(response.data);
            setScores(response.data)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    return (
        <div className="container-jogo-score">
            <div className="content-score">
            <h1 className="title-score">Ranking</h1>

            <table className="table-score">
                <thead>
                <tr>
                    <td>Nome</td>
                    <td>Pontuação</td>
                    <td>Data</td>
                    <td>Horário</td>
                </tr>
                </thead>
                <tbody>
                {scores ? scores.map((row, index) => ( index < 5 ?
                    (<tr key={row.id}>
                    <td>{row.name}</td>
                    <td>{row.score}</td>
                    <td>{format(new Date(row.created_at.toString()), "dd/MM/yyyy")}</td>
                    <td>{format(new Date(row.created_at.toString()), "HH:mm")}</td>
                    </tr>)
                    : null
                )) : null}
                </tbody>
            </table>
            </div>
        </div>
)};

export default ScoreScreen;
