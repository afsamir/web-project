import React from 'react'
import {Segment, Grid, Divider, Button, Tab, Responsive} from "semantic-ui-react";
import './LeagueDashboard.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import LeagueTable from "../league-table";
import {SmallMatchCard} from "../small-match-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown";


export class LeagueDashboard extends React.Component {


    render() {

        const matchResultSettings = {
            speed: 300,
            slidesToShow: 7,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            centerMode: false
        };

        return (

            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Segment>
                    <Responsive minWidth={1080}>
                        <div style={{display: 'none'}}>{matchResultSettings.slidesToShow = 7}</div>
                        <Grid columns={2} relaxed='very'>
                            <Grid.Row>
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
                                <LeagueTable width={'300px'} table={false}/>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Responsive>
                    <Responsive maxWidth={1080}>
                        <Grid columns={1} relaxed='very'>
                            <Grid.Row className={'match-results'}>
                                <Grid.Column>
                                <div style={{display: 'none'}}>{matchResultSettings.slidesToShow = 4}</div>

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
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                <LeagueTable table={false}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Responsive>
                </Segment>
            </DirectionProvider>
        )
    }

}

export class LeagueSelector extends React.Component {

    render() {
        let leagues = [
            {key: 'en', value: 'en', text: 'لیگ برتر انگلیس',},
            {key: 'la', value: 'la', text: 'لالیگا',},
            {key: 'ir', value: 'ir', text: 'لیگ برتر ایران',},
        ];

        const panes = [
            {
                menuItem: 'Football',
                render: () => <Tab.Pane> <Dropdown placeholder='State' search selection
                                                   options={leagues} defaultValue='ir' inverted
                                                   className={'leagues-dropdown'}/>
                    <Button circular={true} color={'teal'} content={' صفحه لیگ'}/>
                </Tab.Pane>
            },
            {
                menuItem: 'Basketball',
                render: () => <Tab.Pane>
                    <Dropdown placeholder='State' search selection
                              options={leagues} defaultValue='en' inverted
                              className={'leagues-dropdown'}/>
                    <Button circular={true} color={'teal'} content={' صفحه لیگ'}/>
                </Tab.Pane>
            }
        ];

        return (<Tab menu={{tabular: true}} panes={panes}/>)

    }
}

export class JustLeagueSelector extends React.Component {

    render() {

        let leagues = [
            {key: 'en', value: 'en', text: 'لیگ برتر انگلیس',},
            {key: 'la', value: 'la', text: 'لالیگا',},
            {key: 'ir', value: 'ir', text: 'لیگ برتر ایران',},
        ];

        return (<Dropdown placeholder='State' search selection
                          options={leagues} defaultValue='en' inverted
                          className={'leagues-dropdown'}/>)
    }
}
