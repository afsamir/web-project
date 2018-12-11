import React from 'react'
import {Icon, Feed,} from "semantic-ui-react";
import './SmallMatchCard.css'


export class SmallMatchCard extends React.Component {

    render() {


        return (

            <Feed className={'results'}>
                <Feed.Event>
                    <Feed.Label className={'home-logo'}>
                        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' alt={''}/>
                    </Feed.Label>
                    <Feed.Content className={'goals'}>
                        <div className={'home-goals'}>۲</div>
                    </Feed.Content>
                    <div className={'time'}>
                        <Icon name={!this.props.finished ? 'red clock' : 'calendar alternate'} className={'time-icon'}/>
                        <div>۶۹</div>
                    </div>
                    <Feed.Content className={'goals'}>
                        <div className={'visitor-goals'}>۰</div>
                    </Feed.Content>
                    <Feed.Label className={'visitor-logo'}>
                        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' alt={''}/>
                    </Feed.Label>
                </Feed.Event>
            </Feed>
        )
    }
}
