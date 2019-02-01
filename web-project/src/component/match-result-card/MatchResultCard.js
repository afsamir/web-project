import React from 'react';
import './MatchResultCard.css';

import {Card, Feed, Divider} from 'semantic-ui-react'
import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';
import {Image} from "../util/image";

export class MatchResultCard extends React.Component {

    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.LTR} >
                <div className={'card'}>
                <Card className={'match-result'} >
                    <Card.Content>
                        <Card.Header className={'league'}>{this.props.data.league__name}</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label image={<Image
                                    src={this.props.data.team1__image_url}
                                    alt="could not load" width={40} height={40}/>}/>
                                <Feed.Content>
                                    <Feed.Date content={this.props.data.team1__name}/>
                                    <Feed.Summary className={'goals-text'}>
                                        {this.props.data.goals1 || this.props.data.all_score1}
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label image={<Image
                                    src={this.props.data.team2__image_url}
                                    alt="could not load" width={40} height={40} mode={'fit'}/>}/>
                                <Feed.Content>
                                    <Feed.Date content={this.props.data.team2__name}/>
                                    <Feed.Summary className={'goals-text'}>
                                        {this.props.data.goals2 || this.props.data.all_score2}
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
                            <Feed.Extra className={'game-status'}>
                                {this.props.data.full_time ? 'نتیجه نهایی':'در جریان' }
                                <Divider fitted/>
                                {this.props.data.date}
                            </Feed.Extra>
                        </Feed>
                    </Card.Content>
                </Card>
                </div>
            </DirectionProvider>)
    }
}

