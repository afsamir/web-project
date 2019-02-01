import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './PlayerCard.css';
import {Divider} from "semantic-ui-react";
import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider'
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";

class App extends Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Segment id='card'>
                    <Header as='h1' icon textAlign='center' size='huge'>
                        <Image circular
                               src={this.props.data.image_url}/>
                        <Header.Content>{this.props.data.name}</Header.Content>
                    </Header>
                    <div style={{height: '526px'}}>
                        <Divider horizontal>اطلاعات</Divider>
                        پست: {this.props.data.post__name} <Divider/>
                        ملیت: {this.props.data.nationality} <Divider/>
                        باشگاه: {this.props.data.team} <Divider/>
                        سن: {this.props.data.age} <Divider/>
                        محل تولد: {this.props.data.birthPlace} <Divider/>
                        قد: {this.props.data.height} <Divider/>
                        وزن: {this.props.data.weight} <Divider/>
                        شماره پیراهن در باشگاه: {this.props.data.teamNum} <Divider/>
                        شماره پیراهن در تیم ملی: {this.props.data.nationalTeamNum} <Divider/>
                        وب سایت رسمی: <a href={this.props.data.site}>{this.props.data.site}</a> <Divider/>
                    </div>
                </Segment>
            </DirectionProvider>
        );
    }
}
export default App;
