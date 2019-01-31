import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './TeamLogo.css'
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import {Divider} from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div id='TeamLogo'>
                    <Header as='h1' icon textAlign='center' size='huge'>
                        <Image circular
                               src={this.props.data.image_url}/>
                        <Header.Content>{this.props.data.name}</Header.Content>
                    </Header>
                    <div style={{height: '480px'}}>
                        <Divider horizontal>اطلاعات</Divider>
                        رتبه جهانی: {this.props.data.internationalRank}
                        <Divider/>
                        لقب: {this.props.data.nickname}
                        <Divider/>
                        شهر: {this.props.data.city}
                        <Divider/>
                        کشور: {this.props.data.country}
                        <Divider/>
                        سال تاسیس: {this.props.data.establishedYear}
                        <Divider/>
                        مربی: {this.props.data.coach}
                        <Divider/>
                        کاپیتان: {this.props.data.captain}
                        <Divider/>
                        وب سایت رسمی:   <a href={this.props.data.website}>{this.props.data.website} </a>
                        <Divider/>
                    </div>
                </div>
            </DirectionProvider>


        );
    }
}

export default App;
