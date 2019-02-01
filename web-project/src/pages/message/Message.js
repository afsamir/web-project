import React from "react";
import {MenuBar} from "../../component/menu-bar";
import './Message.css'

export default class Message extends React.Component {

    render() {

        return (

            <div className='Login'>
                <MenuBar style={{position: 'fixed'}}/>
                <div className="ui middle aligned center aligned grid"
                     style={{maxWidth: '500px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                    <div className="column">
                        <div className="ui message">
                            {this.props.message}
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}