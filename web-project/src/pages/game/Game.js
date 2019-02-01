import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Game.css';
import 'semantic-ui-css/semantic.min.css';
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";
import {MenuBar} from "../../component/menu-bar";
import Responsive from "semantic-ui-react/dist/commonjs/addons/Responsive/Responsive";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import {Image} from "semantic-ui-react";
import {Footer} from "../../component/footer";
import GameTable from "../../component/game-table/GameTable";
import GameNews from "../../component/game-news/GameNews";
import GameReport from "../../component/game-report/GameReport";
import GameTeams from "../../component/game-teams/GameTeams";
import Timeline from "../../component/timeline";
import Axios from "axios";
import BackUrls from "../../utils/BackUrls";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{}],
            players: {
                "fix_players1": [],
                "fix_players2": [],
                "substitute_player1": [],
                "substitute_player2": []
            },
            info: {
                team1__name: '',
                team2__name: '',
                team1__image_url:'',
                team2__image_url:''
            },
            report: [{}],
            timeLine: [{}],
            slider: [{}]
        }
    }


    componentWillMount() {
        let slug = this.props.match.params.slug;


        Axios.get(BackUrls.gameNews(slug)).then(response => {
            const news = (response.data);
            this.setState({news});
        }).catch(er => this.setState({news: []}));

        Axios.get(BackUrls.gamePlayers(slug)).then(response => {
            const players = (response.data);
            this.setState({players});
        }).catch(er => this.setState({players: []}));

        Axios.get(BackUrls.gamesInfo(slug)).then(response => {
            const info = (response.data);
            this.setState({info});
        }).catch(er => this.setState({info: []}));

        Axios.get(BackUrls.gameReport(slug)).then(response => {
            const report = (response.data);
            this.setState({report});
        }).catch(er => this.setState({report: []}));

        Axios.get(BackUrls.gameTimeLine(slug)).then(response => {
            const timeLine = (response.data);
            this.setState({timeLine});
        }).catch(er => this.setState({timeLine: []}));

        Axios.get(BackUrls.gameSlider(slug)).then(response => {
            const slider = (response.data);
            this.setState({slider});
        }).catch(er => this.setState({slider: []}));

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

        const {players} = this.state,
            {info} = this.state,
            {timeLine} = this.state;
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
                                            <Grid.Column width={5}>
                                                <Timeline team1={{
                                                    name: info.team1__name,
                                                    image_url: info.team1__image_url
                                                }} team2={{
                                                    name: info.team2__name,
                                                    image_url: info.team2__image_url
                                                }} data={timeLine}/>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <GameTable data={this.state.info}/>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <GameTeams players={players}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <GameNews data={this.state.news}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <GameReport data={this.state.report}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.slider.map(c =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={1079} minWidth={768}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameTable data={this.state.info}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Timeline team1={{
                                                    name: info.team1__name,
                                                    image_url: info.team1__image_url
                                                }} team2={{
                                                    name: info.team2__name,
                                                    image_url: info.team2__image_url
                                                }} data={timeLine}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <GameTeams players={players}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <GameNews data={this.state.news}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <GameReport data={this.state.report}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.slider.map(c =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={767}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameTable data={this.state.info}/>

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Timeline team1={{
                                                    name: info.team1__name,
                                                    image_url: info.team1__image_url
                                                }} team2={{
                                                    name: info.team2__name,
                                                    image_url: info.team2__image_url
                                                }} data={timeLine}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameTeams players={players}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameNews data={this.state.news}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameReport data={this.state.report}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.slider.map(c =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
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
