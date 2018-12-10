import React from 'react'
import {Segment, Grid, Divider, Header} from "semantic-ui-react";
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
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            vertical: true,
            slidesPerRow: 2,
            verticalSwiping: true,
            centerPadding:true
        };

        return (

            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Segment>
                    <Header content={"league"}></Header>
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


                            </Slider>
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