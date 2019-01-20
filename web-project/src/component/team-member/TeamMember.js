import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './TeamMember.css'
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import {TeamMemberDiv} from "../team-member-div";

class App extends Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div id='TeamMember'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src="https://cdn3.iconfinder.com/data/icons/soccer-14/33/soccer_team-512.png"/>
                        <Header.Content>اعضای تیم</Header.Content>
                    </Header>
                    <Divider inverted/>
                    <div style={{ height: '480px', overflow: 'scroll'}}>
                        {this.props.data.map(teamMember =>
                            <TeamMemberDiv data={teamMember}/>
                        )}
                    </div>
                </div>
            </DirectionProvider>
        );
    }
}

export default App;
