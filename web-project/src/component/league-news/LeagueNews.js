import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Divider, Icon} from "semantic-ui-react";
import './LeagueNews.css'
import {NewsDiv} from "../news-div";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";

class App extends Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div id="App">
                    <Header as='h1' icon textAlign='center'>
                        <Icon  name='newspaper'/>
                        <Header.Content>اخبار لیگ</Header.Content>
                    </Header>
                    <Divider inverted/>
                    <div style={{height: '310px', overflow: 'scroll'}}>
                        {this.props.data.map(news =>
                            <NewsDiv data={news}/>
                        )}
                    </div>
                </div>
            </DirectionProvider>
        );
    }
}

export default App;
