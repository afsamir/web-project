import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Register.css';
import 'semantic-ui-css/semantic.min.css';
import {MenuBar} from "../../../component/menu-bar";
import BackUrls from "../../../utils/BackUrls";
import Axios from "axios";
import Auth from "../../../utils/Auth";
import FrontUrls from "../../../utils/FrontUrls";


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


    register() {
        const form = document.getElementById('register-form');
        let formJSON = this.formToJSON(form);
        Axios.post(BackUrls.register, formJSON);
    }


    render() {
        return (
            <div className='Signup'>
                <MenuBar style={{position: 'fixed'}}/>
                <div className="ui middle aligned center aligned grid"
                     style={{maxWidth: '600px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                    <div className="column">
                        <form action={BackUrls.register} method="post" target="_self"
                              className="ui large form" id={'register-form'}>

                            <div className="ui stacked secondary  segment">
                                <h2 className="ui image header">
                                    <div className="content">
                                        ثبت نام
                                    </div>
                                </h2>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="mail icon"/>
                                        <input type="email" name="email" placeholder="ایمیل"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"/>
                                        <input type="text" name="username" placeholder="نام کاربری"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"/>
                                        <input type="text" name="first_name" placeholder="نام"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"/>
                                        <input type="text" name="last_name" placeholder="نام خانوادگی"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"/>
                                        <input type="password" name="password" placeholder="رمز"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"/>
                                        <input type="password" name="password_2" placeholder="تکرار رمز"/>
                                    </div>
                                </div>
                                <div className="ui fluid large teal submit button" onClick={this.register.bind(this)}>ثبت نام</div>

                                {/*<input type="submit" value="Submit" className="ui fluid large teal submit button" />*/}
                            </div>
                            <div className="ui error message"/>
                        </form>

                        <div className="ui message">
                            قبلا ثبت نام کردید؟ <a href={FrontUrls.login}>ورود</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
