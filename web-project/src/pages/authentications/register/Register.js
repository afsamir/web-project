import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Register.css';
import 'semantic-ui-css/semantic.min.css';
import {MenuBar} from "../../../component/menu-bar";
import Urls from "../../../utils/Urls";


class Home extends Component {


    render() {
        return (
            <div className='Signup'>
                <MenuBar style={{position: 'fixed'}}/>
                <div className="ui middle aligned center aligned grid"
                     style={{maxWidth: '600px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                    <div className="column">
                        <form action={Urls.register} method="post" target="_self"
                              className="ui large form">

                            <div className="ui stacked secondary  segment">
                                <h2 className="ui image header">
                                    <div className="content">
                                        Register
                                    </div>
                                </h2>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="mail icon"/>
                                        <input type="email" name="email" placeholder="E-mail address"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"/>
                                        <input type="text" name="username" placeholder="Username"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"/>
                                        <input type="text" name="first_name" placeholder="First name"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"/>
                                        <input type="text" name="last_name" placeholder="Last name"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"/>
                                        <input type="password" name="password" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"/>
                                        <input type="password" name="password_2" placeholder="Confirm Password"/>
                                    </div>
                                </div>
                                <input type="submit" value="Submit" className="ui fluid large teal submit button"/>
                            </div>
                            <div className="ui error message"/>
                        </form>

                        <div className="ui message">
                            New to us? <a href={Urls.register}>Register</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
