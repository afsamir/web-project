import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Divider, Dropdown, Menu} from "semantic-ui-react";
import './News.css'
import {NewsDiv} from "../news-div";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Table from "semantic-ui-react/dist/commonjs/collections/Table";

class App extends Component {
    state = {
        activeItem: 'buy',
    };
    stateOptions = [{key: 'FB', value: 'FB', text: 'فوتبال'}, {key: 'BB', value: 'BB', text: 'بسکتبال'}];

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <div id="App">
                <Menu fluid widths={2} inverted>
                    <Menu.Item name='آخرین اخبار' active={activeItem === 'buy'} onClick={this.handleItemClick}/>
                    <Menu.Item name='مورد علاقه ها ' active={activeItem === 'sell'} onClick={this.handleItemClick}/>
                </Menu>

                <Container textAlign='center'>
                    <Dropdown placeholder='State' search selection options={this.stateOptions} defaultValue='FB' inverted/>
                </Container>

                <Divider hidden/>
                <Divider horizontal>اخبار</Divider>

                <Segment fluid textAlign='justified' style={{overflow: 'auto', height: this.props.height }}>
                    {this.props.news.map(news =>
                        <NewsDiv data={news}/>
                    )}
                </Segment>
            </div>
        );
    }
}

export default App;
