import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home'
import * as serviceWorker from './serviceWorker';
import {MatchResultCard} from "./component/match-result-card";
import {MenuBar} from "./component/menu-bar";

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Home style={{ width: 500, textAlign: "center" }}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
