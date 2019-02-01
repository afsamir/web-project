import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './League.css';
import 'semantic-ui-css/semantic.min.css';
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";
import {MenuBar} from "../../component/menu-bar";
import Responsive from "semantic-ui-react/dist/commonjs/addons/Responsive/Responsive";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import {Image} from "semantic-ui-react";
import {Footer} from "../../component/footer";
import LeagueCard from "../../component/league-card/LeagueCard";
import BigLeagueTable from "../../component/bigLeagueTable/BigLeagueTable";
import LeagueNews from "../../component/league-news/LeagueNews";
import BestPlayer from "../../component/best-player/BestPlayer";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import {SmallMatchCard} from "../../component/small-match-card";
import Axios from "axios";
import BackUrls from "../../utils/BackUrls";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

            sliderImage: [],
            info: {},
            news: [],
            stats: [],
            bests:[{}],
            games:[],
            tableData:{teams:[]},
        }
    }


    componentDidMount() {

        let slug = this.props.match.params.slug;


        Axios.get(BackUrls.leagueSlider(slug)).then(response => {
            const sliderImage = (response.data);
            this.setState({sliderImage});
        }).catch(er => this.setState({sliderImage: []}));


        Axios.get(BackUrls.leagueInfo(slug)).then(response => {
            const info= (response.data);
            this.setState({info});
        }).catch(er => this.setState({info: []}));

        Axios.get(BackUrls.leagueNews(slug)).then(response => {
            const news = (response.data);
            this.setState({news});
        }).catch(er => this.setState({news: []}));

        Axios.get(BackUrls.leagueStats(slug)).then(response => {
            const stats= (response.data);
            this.setState({stats});
        }).catch(er => this.setState({stats: []}));

        Axios.get(BackUrls.leagueBests(slug)).then(response => {
            const bests= (response.data);
            this.setState({bests});
        }).catch(er => this.setState({bests: []}));

        Axios.get(BackUrls.leagueGames(slug)).then(response => {
            const games= (response.data);
            this.setState({games});
        }).catch(er => this.setState({games: []}));

        Axios.get(BackUrls.leagueStats(slug)).then(response => {
            const tableData= (response.data);
            this.setState({tableData});
        }).catch(er => this.setState({tableData: {teams:[]}}));


    }

    render() {
        const picSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            // centerMode: true,
        };
        const matchResultSettings = {
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            centerMode: false
        };

        return (
            <div className='Home'>
                <MenuBar style={{position: 'fixed'}}/>
                <DirectionProvider direction={DIRECTIONS.RTL}>
                    <div style={{maxWidth: '1500px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                        <div style={{margin: '5px'}}>
                            <Segment.Group>
                                <Responsive as={Segment} minWidth={1080}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={10}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.sliderImage.map( c  =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <LeagueCard data={this.state.info}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BigLeagueTable data={this.state.tableData}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={5}>
                                                <BestPlayer data={this.state.bests}/>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <LeagueNews data={this.state.news}/>
                                            </Grid.Column>
                                            <Grid.Column className={'match-results'} width={5}>
                                                <div id='match-result'>
                                                    <Header as='h1' icon textAlign='center'>
                                                        <Image
                                                            src="https://cdn4.iconfinder.com/data/icons/football-13/64/Football-22-512.png"/>
                                                        <Header.Content>بازی ها</Header.Content>
                                                    </Header>
                                                    <div style={{height: '250px'}}>
                                                        <Slider {...matchResultSettings}>
                                                            {this.state.games.map( c  =>
                                                                <SmallMatchCard data={c}/>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} minWidth={768} maxWidth={1079}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.sliderImage.map( c  =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <LeagueCard data={this.state.info}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <div id='games'>
                                                    <Header as='h1' icon textAlign='center'>
                                                        <Image
                                                            src="https://cdn4.iconfinder.com/data/icons/football-13/64/Football-22-512.png"/>
                                                        <Header.Content>بازی ها</Header.Content>
                                                    </Header>
                                                    <div style={{height: '250px'}}>
                                                        <Slider {...matchResultSettings}>
                                                            {this.state.games.map( c  =>
                                                                <SmallMatchCard data={c}/>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BigLeagueTable data={this.state.homeLeagueTable}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <BestPlayer data={this.state.bests}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <LeagueNews data={this.state.news}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={767}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.sliderImage.map( c  =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueCard data={this.state.info}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BigLeagueTable data={this.state.homeLeagueTable}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BestPlayer data={this.state.bests}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueNews data={this.state.news}/>
                                            </Grid.Column>
                                        </Grid.Row>
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
                                                            {this.state.games.map( c  =>
                                                                <SmallMatchCard data={c}/>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                            </Segment.Group>
                        </div>
                    </div>
                </DirectionProvider>
                <Footer/>
            </div>
        );
    }
}

export default Home;
