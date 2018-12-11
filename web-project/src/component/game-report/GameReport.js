import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Divider} from "semantic-ui-react";
import './GameReport.css'
import {NewsDiv} from "../news-div";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";

class App extends Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div id="App">
                    <Header as='h1' icon textAlign='center'>
                        <Image
                            src="https://lh3.googleusercontent.com/_w5swHd9Zf7DcdjNN55ttYEwZ11OrMi8Hf9c7jBhK8wgnetmEmY8sWCT9hDaY_bNxx9I"/>
                        <Header.Content>گزارش لحظه به لحظه بازی</Header.Content>
                    </Header>
                    <Divider inverted/>
                    <div style={{height: '509px', overflow: 'scroll'}}>
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
                        <NewsDiv/>
                    </div>
                </div>
            </DirectionProvider>
        );
    }
}

export default App;
