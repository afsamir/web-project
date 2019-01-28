import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Login.css';
import 'semantic-ui-css/semantic.min.css';
import {MenuBar} from "../../../component/menu-bar";
import Urls from "../../../utils/Urls";
import Axios from "axios";
import Auth from "../../../utils/Auth";

class Login extends Component {


    formToJSON(form){

        let obj = {};
        let elements = form.querySelectorAll("input");
        for (let i = 0; i < elements.length; ++i) {
            let element = elements[i];
            let name = element.name;
            let value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return (obj);
    }

    login() {
        const form = document.getElementById('login-form');
        let formJSON = this.formToJSON(form);
        Axios.post(Urls.login, formJSON).then(response => Auth.setToken(response.data.token));
    }


    render() {
        return (
            <div className='Login'>
                <MenuBar style={{position: 'fixed'}}/>
                <div className="ui middle aligned center aligned grid"
                     style={{maxWidth: '500px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                    <div className="column">
                        <form action={Urls.login} method="post"
                              className="ui large form" id={'login-form'}>
                            <div className="ui stacked secondary  segment">
                                <h2 className="ui image header">
                                    <div className="content">
                                        Log in
                                    </div>
                                </h2>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="mail icon"/>
                                        <input type="text" name="email" placeholder="E-mail address"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"/>
                                        <input type="password" name="password" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="ui fluid large teal submit button" onClick={this.login.bind(this)}>Login</div>
                            </div>

                            <div className="ui error message"/>
                        </form>

                        <div className="ui message">
                            New to us? <a href="https://s.codepen.io/voltron2112/debug/PqrEPM?">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
