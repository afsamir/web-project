import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PasswordReset.css';
import 'semantic-ui-css/semantic.min.css';
import {MenuBar} from "../../../component/menu-bar";

class Home extends Component {
    render() {
        return (
            <div className='Signup'>
                <MenuBar style={{position: 'fixed'}}/>
                <div className="ui middle aligned center aligned grid"
                     style={{maxWidth: '600px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                    <div className="column">
                        <form action="https://s.codepen.io/voltron2112/debug/PqrEPM?" method="get"
                              className="ui large form">
                            <div className="ui stacked secondary  segment">
                                <h2 className="ui image header">
                                    <div className="content">
                                        RESET PASSWORD
                                    </div>
                                </h2>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="mail icon"/>
                                        <input type="email" name="email" placeholder="E-mail address"/>
                                    </div>
                                </div>
                                <div className="ui fluid large teal submit button">Reset Password</div>
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

export default Home;
