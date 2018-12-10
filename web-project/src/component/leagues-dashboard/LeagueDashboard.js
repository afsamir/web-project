import React from 'react'
import { Segment, Grid, Divider} from "semantic-ui-react";
import './LeagueDashboard.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import LeagueTable from "../league-table";
import {SmallMatchCard} from "../small-match-card";


export class LeagueDashboard extends React.Component {

    render() {


        return (

            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Segment>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column className={'match-results'}>

                            <SmallMatchCard/>
                            <SmallMatchCard/>
                            <SmallMatchCard/>
                            <SmallMatchCard/>

                        </Grid.Column>
                        <Grid.Column>
                            <LeagueTable/>
                        </Grid.Column>
                    </Grid>

                    <Divider vertical>And</Divider>

                </Segment>
            </DirectionProvider>
        )
    }
}