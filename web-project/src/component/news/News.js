import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Divider, Dropdown, Grid, Menu} from "semantic-ui-react";
import './News.css'
import {NewsDiv} from "../news-div";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";

class App extends Component {
    state = {activeItem: 'buy',};
    stateOptions = [{key: 'FB', value: 'FB', text: 'Football'}, {key: 'BB', value: 'BB', text: 'Basketball'}];

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <div id="App">
                <Menu fluid widths={2} inverted>
                    <Menu.Item name='buy' active={activeItem === 'buy'} onClick={this.handleItemClick}/>
                    <Menu.Item name='sell' active={activeItem === 'sell'} onClick={this.handleItemClick}/>
                </Menu>

                <Container textAlign='center'>
                    <Dropdown placeholder='State' search selection options={this.stateOptions} defaultValue='FB' inverted/>
                </Container>

                <Divider hidden/>
                <Divider horizontal>News</Divider>

                <Segment fluid textAlign='justified' style={{overflow: 'auto', height: '1314px' }}>
                    <NewsDiv />
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                    <NewsDiv/>
                </Segment>
            </div>
        );
    }
}

export default App;
