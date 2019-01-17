import React from 'react'
import {Segment, Grid, Button, Tab, Responsive} from "semantic-ui-react";
import './LeagueDashboard.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import LeagueTable from "../league-table";
import {SmallMatchCard} from "../small-match-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";


export class LeagueDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            SmallMatchCards: [
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
            ],
        }
    }

    render() {
        const matchResultSettings = {
            speed: 300,
            slidesToShow: 7,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            centerMode: false,
            arrows:false
        };

        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Segment id='LeagueDashboard'>
                    <Responsive minWidth={1080}>
                        <div style={{display: 'none'}}>{matchResultSettings.slidesToShow = 5}</div>
                        <Grid columns={2} relaxed='very'>
                            <Grid.Row>
                                <Grid.Column className={'match-results'} width={6}>
                                    <div id='match-result'>
                                    <Header as='h1' icon textAlign='center'>
                                        <Image
                                            src="https://cdn4.iconfinder.com/data/icons/football-13/64/Football-22-512.png"/>
                                        <Header.Content>بازی ها</Header.Content>
                                    </Header>
                                    <div style={{height: '250px'}}>
                                        <Slider {...matchResultSettings}>
                                            {this.state.SmallMatchCards.map( c  =>
                                                <SmallMatchCard data={c}/>
                                            )}
                                        </Slider>
                                    </div>
                                        </div>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <LeagueTable width={'300px'} table={false}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Responsive>
                    <Responsive maxWidth={1079}>
                        <div style={{display: 'none'}}>{matchResultSettings.slidesToShow = 5}</div>
                        <Grid relaxed='very'>
                            <Grid.Row>
                                <Grid.Column className={'match-results'} width={16}>
                                    <div id='match-result'>
                                        <Header as='h1' icon textAlign='center'>
                                            <Image
                                                src="https://cdn4.iconfinder.com/data/icons/football-13/64/Football-22-512.png"/>
                                            <Header.Content>بازی ها</Header.Content>
                                        </Header>
                                        <div style={{height: '250px'}}>
                                            <Slider {...matchResultSettings}>
                                                {this.state.SmallMatchCards.map( c  =>
                                                    <SmallMatchCard data={c}/>
                                                )}
                                            </Slider>
                                        </div>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <LeagueTable width={'300px'} table={this.props.table}/>
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
                menuItem: 'فوتبال',
                render: () => <Tab.Pane> <Dropdown placeholder='State' search selection
                                                   options={leagues} defaultValue='ir' inverted
                                                   className={'leagues-dropdown'}/>
                    <Button circular={true} color={'teal'} content={' صفحه لیگ'}/>
                </Tab.Pane>
            },
            {
                menuItem: 'بسکتبال',
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
