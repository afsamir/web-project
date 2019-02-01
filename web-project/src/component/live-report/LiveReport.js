import React from 'react'
import {Feed} from "semantic-ui-react";
import "./LiveReport.css"


export class LiveReport extends React.Component {


    handleIcon(tl) {
        let icon = 'futbol';
        if (tl === 'goal') {
            icon = 'futbol';
        } else if (tl === 'red card') {
            icon = 'red clone';
        } else if (tl === 'yellow card') {
            icon = 'yellow clone';
        } else if (tl === 'substitute') {
            icon = 'sync alternate';
        } else if (tl === 'throw') {
            icon = 'basketball ball';
        } else if (tl === 'penalty goal') {
            icon = 'flag checkered';
        }
        return icon
    }

    render() {

        let icon = this.handleIcon(this.props.data.title)

        return (
            <Feed>
                <Feed.Event icon={icon} className={'live-item'}/>
                <Feed.Date className={'live-date'}>{this.props.data.minute} : {this.props.data.second} </Feed.Date>
                <Feed.Summary content={this.props.data.title} className={'live-item'}/>
            </Feed>
        );
    }
}
