import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PasswordReset.css';
import 'semantic-ui-css/semantic.min.css';
import {MenuBar} from "../../../component/menu-bar";
import Axios from "axios";
import BackUrls from "../../../utils/BackUrls";

class Home extends Component {


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
        Axios.post(BackUrls.resetPasswordRequest, formJSON);
    }

    render() {
        return (
            <div className='Signup'>
                <MenuBar style={{position: 'fixed'}}/>
                <div className="ui middle aligned center aligned grid"
                     style={{maxWidth: '600px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                    <div className="column">
                        <form action="https://s.codepen.io/voltron2112/debug/PqrEPM?" method="get"
                              className="ui large form" id={'reset-form'}>
                            <div className="ui stacked secondary  segment">
                                <h2 className="ui image header">
                                    <div className="content">
                                        تغییر رمز
                                    </div>
                                </h2>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="mail icon"/>
                                        <input type="email" name="email" placeholder="آدرس ایمیل"/>
                                    </div>
                                </div>
                                <div className="ui fluid large teal submit button" onClick={this.send.bind(this)}>ارسال درخواست</div>

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
