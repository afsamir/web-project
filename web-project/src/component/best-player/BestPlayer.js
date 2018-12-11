import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './BestPlayer.css'
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import {TeamMemberDiv} from "../team-member-div";
import {Icon} from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div id='TeamMember'>
                    <Header as='h1' icon textAlign='center'>
                        <Icon name='trophy'/>
                        <Header.Content>برترین ها</Header.Content>
                    </Header>
                    <Divider inverted/>
                    <div style={{height: '310px', overflow: 'scroll'}}>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                        <TeamMemberDiv/>
                    </div>
                </div>
            </DirectionProvider>
        );
    }
}

export default App;
