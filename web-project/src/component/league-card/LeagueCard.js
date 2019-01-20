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
                               src="data:image/png;base64,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"/>
                        <Header.Content>{this.props.data.name}</Header.Content>
                    </Header>
                    <div style={{height: '387px'}}>
                        <Divider horizontal>اطلاعات</Divider>
                        کشور: {this.props.data.country}
                        <Divider/>
                        کنفدراسیون: {this.props.data.confederation}
                        <Divider/>
                        دسته: {this.props.data.daste}
                        <Divider/>
                        تعداد تیم ها: {this.props.data.teamNum}
                        <Divider/>
                        بهترین تیم: {this.props.data.bestTeam}
                        <Divider/>
                        سال تاسیس: {this.props.data.date}
                        <Divider/>
                        وب سایت رسمی: {this.props.data.site}
                        <Divider/>
                    </div>
                </div>
            </DirectionProvider>
        );
    }
}

export default App;
