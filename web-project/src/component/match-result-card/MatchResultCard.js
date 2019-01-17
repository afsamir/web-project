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
                        <Card.Header className={'league'}>{this.props.data.title}</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label image={<Image
                                    src={this.props.data.src1}
                                    alt="could not load" width={40} height={40}/>}/>
                                <Feed.Content>
                                    <Feed.Date content={this.props.data.team1}/>
                                    <Feed.Summary className={'goals-text'}>
                                        {this.props.data.goal1}
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label image={<Image
                                    src={this.props.data.src2}
                                    alt="could not load" width={40} height={40} mode={'fit'}/>}/>
                                <Feed.Content>
                                    <Feed.Date content={this.props.data.team2}/>
                                    <Feed.Summary className={'goals-text'}>
                                        {this.props.data.goal2}
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
                            <Feed.Extra className={'game-status'}>
                                {this.props.data.state}
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

