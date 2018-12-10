import React from 'react'
import {Icon, Feed, Label} from "semantic-ui-react";
import './SmallMatchCard.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";


export class SmallMatchCard extends React.Component {

    render() {


        return (

            <DirectionProvider direction={DIRECTIONS.RTL}>

                <Feed>
                    <Feed.Event className={'results'}>
                        <Feed.Label className={'home-logo'}>
                            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                        </Feed.Label>
                        <Feed.Content className={'goals'}>
                            <div className={'home-goals'}>2</div>
                        </Feed.Content>
                        <div className={'time'} >
                            <Icon name='red clock' className={'time-icon'}/>
                            <div>49</div>
                        </div>
                        <Feed.Content className={'goals'}>
                            <div className={'visitor-goals'}>0</div>
                        </Feed.Content>
                        <Feed.Label className={'visitor-logo'}>
                            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                        </Feed.Label>
                    </Feed.Event>
                </Feed>
            </DirectionProvider>
        )
    }
}
