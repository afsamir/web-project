import React from 'react';
import './TeamMemberDiv.css';
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import {Divider, Feed, Image} from "semantic-ui-react";

export class TeamMemberDiv extends React.Component{

    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL} className={'member-card'}>
                <Feed className={'member'}>
                    <Feed.Event>
                        <Feed.Label image={<Image circular size='small' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />}/>
                        <Feed.Content>
                            <a position="right" className={'name'}>{this.props.data.name}</a>
                            <Divider/>
                        <Feed.Extra className={'position'}>{this.props.data.post}</Feed.Extra>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </DirectionProvider>
        );
    }

}
