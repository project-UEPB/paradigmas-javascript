/* eslint-disable */
import HomeScreen from "../screens/HomeScreen.js";
import { Container } from './components/container';
import ScoreScreen from "../screens/ScoreScreen.js";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeScreen,
    },
    {
        path: "/game/:name/:size",
        name: "Game",
        component: Container,
    },
    {
        path: "/score",
        name: "Ranking",
        component: ScoreScreen,
    }
];

export default routes;