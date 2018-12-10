import React from 'react'
import {Segment, Grid, Divider, Header, Button, Icon} from "semantic-ui-react";
import './LeagueDashboard.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import LeagueTable from "../league-table";
import {SmallMatchCard} from "../small-match-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export class LeagueDashboard extends React.Component {


    render() {

        const matchResultSettings = {
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            centerMode: true
        };

        return (

            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Segment>
                    <Header content={"league"}/>
                    <Divider/>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column className={'match-results'}>
                            <Slider {...matchResultSettings}>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                                <SmallMatchCard/>
                            </Slider>
                        </Grid.Column>
                        <Grid.Column>
                            <LeagueTable/>
                        </Grid.Column>
                    </Grid>

                    <Divider vertical>
                        <Button circular animated='fade'>
                        <Button.Content hidden>Full</Button.Content>
                        <Button.Content visible>
                            <Icon name='trophy' />
                        </Button.Content>
                    </Button></Divider>

                </Segment>
            </DirectionProvider>
        )
    }
}