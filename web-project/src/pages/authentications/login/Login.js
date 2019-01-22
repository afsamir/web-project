import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Login.css';
import 'semantic-ui-css/semantic.min.css';
import {MenuBar} from "../../../component/menu-bar";

class Home extends Component {
    render() {
        return (
            <div className='Login'>
                <MenuBar style={{position: 'fixed'}}/>
                <div className="ui middle aligned center aligned grid"
                     style={{maxWidth: '500px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                    <div className="column">
                        <h2 className="ui image header">
                            <div className="content">
                                Log in
                            </div>
                        </h2>
                        <form action="https://s.codepen.io/voltron2112/debug/PqrEPM?" method="get"
                              className="ui large form">
                            <div className="ui stacked secondary  segment">
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
                                <div className="ui fluid large teal submit button">Log in</div>
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
