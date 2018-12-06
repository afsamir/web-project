import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import News from './component/news/News';
import Slider from './component/slider/Slider';
import {Grid, Image} from "semantic-ui-react";
import {MenuBar} from "./component/menu-bar/MenuBar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <MenuBar/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={6}>
                    <News/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Slider/>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default App;
