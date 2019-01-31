import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Divider, Dropdown, Menu} from "semantic-ui-react";
import './News.css'
import {NewsDiv} from "../news-div";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: 'آخرین اخبار',
            footballNews: [],
            basketballNews: [],
            newsToShow: []
        };
        this.state.newsToShow = this.props.footballNews


    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.state.newsToShow = nextProps.footballNews
    }


    stateOptions = [{key: 'FB', value: 'FB', text: 'فوتبال'}, {key: 'BB', value: 'BB', text: 'بسکتبال'}];

    handleItemClick = (e, {value}) => {

        if (value === 'FB') {
            this.setState({newsToShow: this.props.footballNews})
        } else
            this.setState({newsToShow: this.props.basketballNews})

    };

    render() {
        const {activeItem} = this.state;
        const {newsToShow} = this.state;
        return (
            <div id="App">
                <Menu fluid widths={2} inverted>
                    <Menu.Item name='آخرین اخبار' active={activeItem === 'آخرین اخبار'}
                    />
                    <Menu.Item name='مورد علاقه ها' active={activeItem === 'مورد علاقه ها'}
                    />
                </Menu>

                <Container textAlign='center'>
                    <Dropdown placeholder='State' search selection options={this.stateOptions} defaultValue='FB'
                              inverted onChange={this.handleItemClick}/>
                </Container>

                <Divider hidden/>
                <Divider horizontal>اخبار</Divider>

                <Segment fluid textAlign='justified' style={{overflow: 'auto', height: this.props.height}}>
                    {newsToShow.map(news =>
                        <NewsDiv data={news}/>
                    )}
                </Segment>
            </div>
        );
    }

}

export default News;
