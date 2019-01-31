import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import 'semantic-ui-css/semantic.min.css';
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";
import {MenuBar} from "../../component/menu-bar";
import {MatchResultCard} from "../../component/match-result-card";
import News from "../../component/news";
import {LeagueDashboard, LeagueSelector} from "../../component/leagues-dashboard";
import Responsive from "semantic-ui-react/dist/commonjs/addons/Responsive/Responsive";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import {Image} from "semantic-ui-react";
import {Footer} from "../../component/footer";
import Axios from 'axios'
import BackUrls from "../../utils/BackUrls";
import Auth from "../../utils/Auth";

class Home extends Component {

    componentDidMount() {

        Axios.get(BackUrls.footballNewsSummary).then(response => {
            const footballNews = (response.data);
            this.setState({footballNews})

        }).catch(er => this.setState({footballNews: []}));

        Axios.get(BackUrls.basketballNewsSummary).then(response => {
            const basketballNews = (response.data);
            this.setState({basketballNews});

        }).catch(er => this.setState({basketballNews: []}));
        Axios.get(BackUrls.homeSliders).then(response => {
            const sliderImages = (response.data);
            this.setState({sliderImages});

        }).catch(er => this.setState({sliderImages: []}));
        Axios.get(BackUrls.matchCards).then(response => {
            const matchResultCards = (response.data);
            this.setState({matchResultCards});
        }).catch(er => this.setState({matchResultCards: []}));
        Axios.get(BackUrls.leagueSummary).then(response => {
            const footballLeagues = response.data.football,
                basketballLeagues = response.data.basketball;
            this.setState({footballLeagues});
            this.setState({basketballLeagues})
        }).catch(er => {
                this.setState({footballLeagues: []});
                this.setState({basketballLeagues: []})
            }
        );

    }


    constructor(props) {
        super(props);
        this.state = {
            loading_news: true,
            loading_slidersImages: true,
            loading_matchCards: true,
            sliderImages: [],
            footballNews: [],
            basketBallNews: [],
            footballLeagues: [],
            basketballLeagues: [],
            matchResultCards: [],
            tableData: [],

        };
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
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            slide: MatchResultCard,

            // centerMode: true,
        };

        const {footballNews} = this.state,
            {basketballNews} = this.state,
            {sliderImages} = this.state,
            {matchResultCards} = this.state,
            {footballLeagues} = this.state,
            {basketballLeagues} = this.state;


        return (

            <div className='Home'>
                <MenuBar style={{position: 'fixed'}}/>
                <DirectionProvider direction={DIRECTIONS.RTL}>
                    <div style={{maxWidth: '1500px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                        <div style={{margin: '5px'}}>
                            <Segment.Group>
                                <Responsive as={Segment} minWidth={1080}>
                                    <Grid id={'background'}>
                                        <Grid.Row>
                                            <Grid.Column width={11}>
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <Slider {...picSettings} className={'slider'}>
                                                                {sliderImages.map(c =>
                                                                    <Image src={c.image_url}/>
                                                                )}
                                                            </Slider>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <Slider {...matchResultSettings} className={'slider'}>
                                                                {matchResultCards.map(c =>
                                                                    <MatchResultCard data={c}/>
                                                                )}
                                                            </Slider>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <LeagueSelector leagues={{
                                                                basketballLeagues: basketballLeagues,
                                                                footballLeagues: footballLeagues
                                                            }}/>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <News footballNews={footballNews}
                                                      basketballNews={basketballNews} height={1360}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} minWidth={768} maxWidth={1079}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {sliderImages.map(c =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...matchResultSettings} className={'slider'}>
                                                    {matchResultCards.map(c =>
                                                        <MatchResultCard data={c}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <LeagueSelector/>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <LeagueDashboard
                                                                smallMatchCards={this.state.smallMatchCards}
                                                                tableData={this.state.tableData}/>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <News footballNews={footballNews}
                                                      basketballNews={basketballNews} height={974}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={767}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {sliderImages.map(c =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <div
                                                    style={{display: 'none'}}>  {matchResultSettings.slidesToShow = 2}
                                                </div>
                                                <Slider {...matchResultSettings} className={'slider'}>
                                                    {matchResultCards.map(c =>
                                                        <MatchResultCard data={c}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueSelector style={{maxWidth: '500px'}}/>
                                            </Grid.Column>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard smallMatchCards={this.state.smallMatchCards}
                                                                 tableData={this.state.tableData}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <News footballNews={footballNews}
                                                      basketballNews={basketballNews} height={1314}/>
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
