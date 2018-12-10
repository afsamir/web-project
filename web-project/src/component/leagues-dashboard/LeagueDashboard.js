import React from 'react'
import {Segment, Grid, Divider, Header, Button, Icon, Tab} from "semantic-ui-react";
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
                    <LeagueSelector/>
                    <Header icon={"circular inverted trophy"} name={"League"} className={'header'}>
                    </Header>
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
                            <LeagueTable table={false}/>
                        </Grid.Column>
                    </Grid>

                    <Divider fitted={true} section={false} vertical>
                        <Button circular animated='fade'>
                            <Button.Content hidden>Full</Button.Content>
                            <Button.Content visible>
                                <Icon name='trophy'/>
                            </Button.Content>
                        </Button>
                    </Divider>

                </Segment>
            </DirectionProvider>
        )
    }

}

export class LeagueSelector extends React.Component {

    render() {

        let teams = [
            {
                id: 1,
                name: 'پدیده',
                gameNum: 14,
                score: 30
            }, {
                id: 1,
                name: 'سپاهان',
                gameNum: 13,
                score: 29
            }, {
                id: 1,
                name: 'پرسپولیس',
                gameNum: 13,
                score: 27
            },
        ];

        let leagues = [
            {key: 'en', value: 'en', text: 'لیگ برتر انگلیس',},
            {key: 'la', value: 'la', text: 'لالیگا',},
            {key: 'ir', value: 'ir', text: 'لیگ برتر ایران',},
        ];

        const panes = [
            {
                menuItem: 'Football',
                render: () => <Tab.Pane attached={false}> <Dropdown placeholder='State' search selection
                                                                    options={leagues} defaultValue='ir' inverted
                                                                    className={'leagues-dropdown'}/>
                </Tab.Pane>
            },
            {
                menuItem: 'Basketball',
                render: () => <Tab.Pane attached={false}> <Dropdown placeholder='State' search selection
                                                                    options={leagues} defaultValue='en' inverted
                                                                    className={'leagues-dropdown'}/>
                </Tab.Pane>
            }
        ];

        return (<Tab menu={{tabular: true }} panes={panes}/>)

    }
}}