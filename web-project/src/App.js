import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import News from './component/news/News'
import {Grid} from "semantic-ui-react";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <News/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default App;
