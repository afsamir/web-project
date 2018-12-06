import React from 'react';
import './MatchResultCard.css';

import {Card, Feed, Divider} from 'semantic-ui-react'
import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';
import {Image} from "../util/image";




export class MatchResultCard extends React.Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.LTR}>
                <Card className={'match-result'} id="card">
                    <Card.Content>
                        <Card.Header>UEFA Champions League</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Feed>

                            <Feed.Event>
                                <Feed.Label image={<Image
                                    src="https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png"
                                    alt="could not load" width={40} height={40}/>}/>
                                <Feed.Content>
                                    <Feed.Date content='Manchester United'/>
                                    <Feed.Summary className={'goals-text'}>
                                        1
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label image={<Image
                                    src="http://www.stickpng.com/assets/images/584a9b47b080d7616d298778.png"
                                    alt="could not load" width={40} height={40} mode={'fit'} />}/>
                                <Feed.Content>
                                    <Feed.Date content='Real Madrid'/>
                                    <Feed.Summary className={'goals-text'}>
                                        2
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
                            <Feed.Extra className={'game-status'}>
                                Full time
                                <Divider fitted/>
                                2018/08/13
                            </Feed.Extra>
                        </Feed>
                    </Card.Content>
                </Card>
            </DirectionProvider>)
    }


}

