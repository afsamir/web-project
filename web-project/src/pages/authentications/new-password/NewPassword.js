import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewPassword.css';
import 'semantic-ui-css/semantic.min.css';
import {MenuBar} from "../../../component/menu-bar";
import BackUrls from "../../../utils/BackUrls";
import Auth from "../../../utils/Auth";
import Axios from "axios";
import Login from "../login/Login";

class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            redirect:false
        }
    }


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


    send() {
        const form = document.getElementById('reset-form');
        let formJSON = this.formToJSON(form);
        Axios.post(BackUrls.resetPassword, formJSON).then(re => this.setState({redirect:true}));
    }



    render() {
        const {redirect} = this.state;

        if (redirect)
            return(<Login/>)
        return (
            <div className='Signup'>
                <MenuBar style={{position: 'fixed'}}/>
                <div className="ui middle aligned center aligned grid"
                     style={{maxWidth: '600px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                    <div className="column">
                        <form action={BackUrls.resetPassword + String(Auth.getToken())} method="post"
                              className="ui large form">
                            <div className="ui stacked secondary  segment">
                                <h2 className="ui image header">
                                    <div className="content">
                                        رمز جدید
                                    </div>
                                </h2>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"/>
                                        <input type="password" name="password" placeholder="رمز"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"/>
                                        <input type="password" name="confirm password" placeholder="تکرار رمز"/>
                                    </div>
                                </div>
                                <div className="ui fluid large teal submit button" onClick={this.send.bind(this)}>تغییر رمز</div>

                            </div>

                            <div className="ui error message"/>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
