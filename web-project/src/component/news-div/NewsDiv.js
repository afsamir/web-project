import React from 'react';
import './NewsDiv.css';

import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';
import {Feed, Icon} from "semantic-ui-react";


export class NewsDiv extends React.Component {

    constructor(props) {
        super(props);
        this.setState({type: this.props.type})
    }

    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL} className={'news-div'}>
                <Feed size='small'>
                    <Feed.Event>
                        <Feed.Label className={'label'}>
                            <Icon fitted size={'tiny'}
                                  name={this.props.type === 'text' ? 'pen square inverted' : 'play inverted'}/>
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary className={'news-text'}>
                                <Feed.Content>
                                    <a className={'news-title'}> ریال قهرمان چمپیونز لیگ شد</a>
                                </Feed.Content>
                                <Feed.Date className={'news-date'}> ۳ روز بیش

                                </Feed.Date>
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </DirectionProvider>
        )
    }

}


