import React from 'react'
import {Icon, Feed,} from "semantic-ui-react";
import './SmallMatchCard.css'


export class SmallMatchCard extends React.Component {
    render() {
        return (
            <Feed className={'results'}>
                <Feed.Event>
                    <Feed.Label className={'home-logo'}>
                        <img src={this.props.data.team1__image_url} alt={''}/>
                    </Feed.Label>
                    <Feed.Content className={'goals'}>
                        <div className={'home-goals'}>{this.props.data.goals1 || this.props.data.all_score1}</div>
                    </Feed.Content>
                    <div className={'time'}>
                        <Icon name={!this.props.data.finished ? 'red clock' : 'calendar alternate'} className={'time-icon'}/>
                        <div>{this.props.data.time}</div>
                    </div>
                    <Feed.Content className={'goals'}>
                        <div className={'visitor-goals'}>{this.props.data.goals2 || this.props.data.all_score2}</div>
                    </Feed.Content>
                    <Feed.Label className={'visitor-logo'}>
                        <img src={this.props.data.team2__image_url} alt={''}/>
                    </Feed.Label>
                </Feed.Event>
            </Feed>
        )
    }
}
