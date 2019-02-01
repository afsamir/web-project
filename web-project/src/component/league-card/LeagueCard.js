import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './LeagueCard.css'
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import {Divider} from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div id='LeagueCard'>
                    <Header as='h1' icon textAlign='center' size='huge'>
                        <Image
                               src={this.props.data.image_url}/>
                        <Header.Content>{this.props.data.name}</Header.Content>
                    </Header>
                    <div style={{height: '387px'}}>
                        <Divider horizontal>اطلاعات</Divider>
                        کشور: {this.props.data.country}
                        <Divider/>
                        کنفدراسیون: {this.props.data.confederation}
                        <Divider/>
                        تعداد تیم ها: {this.props.data.numberOfTeams}
                        <Divider/>
                        بهترین تیم: {this.props.data.bestTeam}
                        <Divider/>
                        سال تاسیس: {this.props.data.establishedYear}
                        <Divider/>
                        وب سایت رسمی: <a href={this.props.data.website}> {this.props.data.website}</a>
                        <Divider/>
                    </div>
                </div>
            </DirectionProvider>
        );
    }
}

export default App;
