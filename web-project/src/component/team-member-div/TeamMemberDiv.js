import React from 'react';
import './TeamMemberDiv.css';
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import {Feed, Image} from "semantic-ui-react";

export class TeamMemberDiv extends React.Component{

    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.LTR}>
                <Feed>
                    <Feed.Event>
                        <Feed.Label image={<Image circular size='small'src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />}/>
                        <Feed.Content>
                            <a>برانکو ایوانکویچ</a>
                        <Feed.Extra> سرمربی</Feed.Extra>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </DirectionProvider>
        );
    }

}