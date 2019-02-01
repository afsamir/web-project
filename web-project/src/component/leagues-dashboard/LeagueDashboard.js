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
import Axios from "axios";
import BackUrls from "../../utils/BackUrls";


export class LeagueDashboard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const matchResultSettings = {
            speed: 300,
            slidesToShow: 8,
            slidesToScroll: 1,
            vertical: true,
            infinite: true,

            verticalSwiping: true,
            swipeToSlide: true,
            centerMode: false,
            arrows: false
        };

        const {smallMatchCards} = this.props,
            {tableData} = this.props;


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
                                                {smallMatchCards.map(c =>
                                                    <SmallMatchCard data={c} field={c.field}/>
                                                )}
                                            </Slider>
                                        </div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <LeagueTable width={'300px'} tableData={tableData}/>
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
                                                {smallMatchCards.map(c =>
                                                    <SmallMatchCard data={c}/>
                                                )}
                                            </Slider>
                                        </div>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <LeagueTable width={'300px'} tableData={tableData}/>
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
    constructor(props) {
        super(props);
        this.state = {
            selected: 'لالیگا-2017-2018',
            smallMatchCards: {
                games:[{}]
            },
            tableData: {
                teams: [
                ]
            }

        }
    }


    componentDidMount() {
        this.fetchData()
    }


    fetchData() {



        Axios.get(BackUrls.homeLeagueTable(this.state.selected)).then(response => {
            const tableData = response.data;
            this.setState({tableData})
        }).catch(er => {
            this.setState({tableData: {teams:[]}})
        });

        Axios.get(BackUrls.homeLeagueGames(this.state.selected)).then(response => {
            const smallMatchCards = response.data;
            this.setState({smallMatchCards})

        }).catch(er => this.setState({smallMatchCards: {games:[]}}));
    }


    handleItemClick = (e, {value}) => {

        // this.setState(() =>({selected:value}));

        this.state.selected = value

        if (this.state.selected !== '') {

            this.fetchData()
        }
    };


    render() {

        const footballLeagues = this.props.leagues.footballLeagues,
            basketballLeagues = this.props.leagues.basketballLeagues,
            {tableData} = this.state,
            {smallMatchCards} = this.state;
        const panes = [
            {
                menuItem: 'فوتبال',
                render: () => <Tab.Pane> <Dropdown placeholder='State' search selection
                                                   options={footballLeagues} defaultValue='لالیگا-2017-2018' inverted
                                                   className={'leagues-dropdown'} onChange={this.handleItemClick} />
                    <Button circular={true} color={'teal'} content={' صفحه لیگ'}/>
                </Tab.Pane>
            },
            {
                menuItem: 'بسکتبال',
                render: () => <Tab.Pane>
                    <Dropdown placeholder='State' search selection
                              options={basketballLeagues} defaultValue='لالیگا-2017-2018' inverted
                              className={'leagues-dropdown'} onChange={this.handleItemClick}/>
                    <Button circular={true} color={'teal'} content={' صفحه لیگ'}/>
                </Tab.Pane>
            }
        ];

        return (
            <div>
                <Tab menu={{tabular: true}} panes={panes}/>
                <LeagueDashboard tableData={tableData} smallMatchCards={smallMatchCards.games}/>
            </div>)

    }
}
