import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/home/Home'
import Team from './pages/team/Team'
import Player from "./pages/player/Player";
import League from "./pages/league/League";
import Game from "./pages/game/Game";
import NewsPage from "./pages/news";

// ReactDOM.render(<Home/>, document.getElementById('root'));
// ReactDOM.render(<Team/>, document.getElementById('root'));
// ReactDOM.render(<Player/>, document.getElementById('root'));
// ReactDOM.render(<League/>, document.getElementById('root'));
// ReactDOM.render(<NewsPage/>, document.getElementById('root'));
ReactDOM.render(<Game/>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
