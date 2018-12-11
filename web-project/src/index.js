import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home'
import Team from './pages/team/Team'
import * as serviceWorker from './serviceWorker';
import {MatchResultCard} from "./component/match-result-card";
import {MenuBar} from "./component/menu-bar";
import Player from "./pages/player/Player";
import League from "./pages/league/League";
import BigLeagueTable from "./component/bigLeagueTable/BigLeagueTable";

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Home/>, document.getElementById('root'));
// ReactDOM.render(<Team/>, document.getElementById('root'));
// ReactDOM.render(<Player/>, document.getElementById('root'));
ReactDOM.render(<League/>, document.getElementById('root'));
// ReactDOM.render(<BigLeagueTable/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
