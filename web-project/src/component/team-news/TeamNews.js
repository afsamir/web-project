import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Divider} from "semantic-ui-react";
import './TeamNews.css'
import {NewsDiv} from "../news-div";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";

class App extends Component {
    render() {
        return (
            <div id="App">
                <Header as='h1' icon textAlign='center'>
                    <Image src="https://lh3.googleusercontent.com/_w5swHd9Zf7DcdjNN55ttYEwZ11OrMi8Hf9c7jBhK8wgnetmEmY8sWCT9hDaY_bNxx9I"/>
                    <Header.Content>اخبار تیم</Header.Content>
                </Header>
                <Segment fluid textAlign='justified' style={{overflow: 'auto', maxHeight: '500px' }}>
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
