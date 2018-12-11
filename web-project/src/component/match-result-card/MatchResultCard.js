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
                        <Card.Header className={'league'}>لیگ قهرمانان اروپا</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Feed>

                            <Feed.Event>
                                <Feed.Label image={<Image
                                    src="https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png"
                                    alt="could not load" width={40} height={40}/>}/>
                                <Feed.Content>
                                    <Feed.Date content='منچستر یونایتد'/>
                                    <Feed.Summary className={'goals-text'}>
                                        ۱
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label image={<Image
                                    src="http://www.stickpng.com/assets/images/584a9b47b080d7616d298778.png"
                                    alt="could not load" width={40} height={40} mode={'fit'}/>}/>
                                <Feed.Content>
                                    <Feed.Date content='ریال مادرید'/>
                                    <Feed.Summary className={'goals-text'}>
                                        ۲
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
                            <Feed.Extra className={'game-status'}>
                                نتیجه نهایی
                                <Divider fitted/>
                                ۲۰۱۸/۰۸/۰۳
                            </Feed.Extra>
                        </Feed>
                    </Card.Content>
                </Card>
                </div>
            </DirectionProvider>)
    }


}

