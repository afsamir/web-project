import React, { Component } from 'react';
import './Home.css';
import 'semantic-ui-css/semantic.min.css';
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";
import {MenuBar} from "../../component/menu-bar";

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <DirectionProvider direction={DIRECTIONS.RTL}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={16} computer={16}>
                                <MenuBar/>
                            </Grid.Column>


                        </Grid.Row>
                    </Grid>
                </DirectionProvider>
            </div>
        );
    }
}

export default Home;
