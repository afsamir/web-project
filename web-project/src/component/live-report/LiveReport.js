import React from 'react'
import {Feed} from "semantic-ui-react";
import "./LiveReport.css"


export class LiveReport extends React.Component {
    render() {
        return (
            <Feed>
                <Feed.Event
                    icon={this.props.data.item} className={'live-item'}/>
                <Feed.Date content={this.props.data.time} className={'live-date'}/>
                <Feed.Summary content={this.props.data.summary} className={'live-item'}/>
            </Feed>
        );
    }
}
