import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home'
import * as serviceWorker from './serviceWorker';
// import Register from "./pages/authentications/register/Register";
import Login from "./pages/authentications/login/Login";
import Register from "./pages/authentications/register/Register";
import NewPassword from "./pages/authentications/new-password/NewPassword";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import NewsPage from "./pages/news";
// import App from './App';
// import Team from './pages/team/Team'
// import {MatchResultCard} from "./component/match-result-card";
// import {MenuBar} from "./component/menu-bar";
// import Player from "./pages/player/Player";
// import League from "./pages/league/League";
// import BigLeagueTable from "./component/bigLeagueTable/BigLeagueTable";
// import Game from "./pages/game/Game";
// import NewsPage from "./pages/news";
// import Login from "./pages/authentications/login/Login"
// import Register from "./pages/authentications/register/Register";
// import PasswordReset from "./pages/authentications/password-reset/PasswordReset";
// import NewPassword from "./pages/authentications/new-password/NewPassword";

// ReactDOM.render(<Home/>, document.getElementById('root'));
// ReactDOM.render(<Login/>, document.getElementById('root'));
// ReactDOM.render(<Register/>, document.getElementById('root'));
// ReactDOM.render(<PasswordReset/>, document.getElementById('root'));
// ReactDOM.render(<NewPassword/>, document.getElementById('root'));
// ReactDOM.render(<Team/>, document.getElementById('root'));
// ReactDOM.render(<Player/>, document.getElementById('root'));
// ReactDOM.render(<League/>, document.getElementById('root'));
// ReactDOM.render(<NewsPage/>, document.getElementById('root'));
// ReactDOM.render(<Game/>, document.getElementById('root'));
// ReactDOM.render(<NewPassword/>, document.getElementById('root'));
// ReactDOM.render(<Register/>, document.getElementById('root'));


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/"  render={(routeProps) => <Home {...routeProps} ds={'sdsd'}/>}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/new_password" component={NewPassword}/>
            <Route exact path="/news/:slug" component={NewsPage}/>

        </div>
    </Router>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
