/* eslint-disable */
import HomeScreen from "../screens/HomeScreen.js";
import GameScreen from "../screens/GameScreen.js";
import ScoreScreen from "../screens/ScoreScreen.js";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeScreen,
    },
    {
        path: "/game",
        name: "Game",
        component: GameScreen,
    },
    {
        path: "/score",
        name: "Ranking",
        component: ScoreScreen,
    }
];

export default routes;