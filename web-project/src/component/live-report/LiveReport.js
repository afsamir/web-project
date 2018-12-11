import React from 'react'
import {Divider, Feed, Icon, List} from "semantic-ui-react";
import "./LiveReport.css"


export class LiveReport extends React.Component {
    render() {
        const {item} = this.props, {time}=this.props, {summary}=this.props;
        return (
            <Feed>
                <Feed.Event
                    icon={item} className={'live-item'}/>
                <Feed.Date content={time} className={'live-date'}/>
                <Feed.Summary content={summary} className={'live-item'}/>

            </Feed>
        );
    }

}