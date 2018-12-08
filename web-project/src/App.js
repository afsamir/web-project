import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import News from './component/news/News';
import Slider from './component/slider/Slider';
import {Grid} from "semantic-ui-react";
import {MenuBar} from "./component/menu-bar/MenuBar";
import {MatchResultCard} from "./component/match-result-card";
import PlayerCard from "./component/player-card";
import TeamMember from "./component/team-member";
import TeamLogo from "./component/team-logo/TeamLogo";
import {SimpleSlider} from "./component/util/slideshow";
import {TeamMemberDiv} from "./component/team-member-div";

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
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <MatchResultCard/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <MatchResultCard/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <MatchResultCard/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <MatchResultCard/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <PlayerCard/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <PlayerCard/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <PlayerCard/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <PlayerCard/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <TeamMember/>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <TeamLogo/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <SimpleSlider/>
            </div>

        );
    }
}

export default App;
