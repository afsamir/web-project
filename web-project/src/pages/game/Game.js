import React, { Component } from 'react';
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
            news: [
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: false,
                    src: 'https://cdn-01.independent.ie/incoming/article35233744.ece/ALTERNATES/h342/JKLopp.jpg',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: true,
                    src: 'https://cdn-01.independent.ie/incoming/article35233744.ece/ALTERNATES/h342/JKLopp.jpg',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: false,
                    src: 'https://react.semantic-ui.com/images/wireframe/image.png',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: true,
                    src: 'https://cdn-01.independent.ie/incoming/article35233744.ece/ALTERNATES/h342/JKLopp.jpg',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: false,
                    src: 'https://react.semantic-ui.com/images/wireframe/image.png',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: true,
                    src: 'https://cdn-01.independent.ie/incoming/article35233744.ece/ALTERNATES/h342/JKLopp.jpg',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: false,
                    src: 'https://react.semantic-ui.com/images/wireframe/image.png',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: true,
                    src: 'https://cdn-01.independent.ie/incoming/article35233744.ece/ALTERNATES/h342/JKLopp.jpg',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: false,
                    src: 'https://react.semantic-ui.com/images/wireframe/image.png',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: true,
                    src: 'https://cdn-01.independent.ie/incoming/article35233744.ece/ALTERNATES/h342/JKLopp.jpg',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: false,
                    src: 'https://react.semantic-ui.com/images/wireframe/image.png',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: true,
                    src: 'https://cdn-01.independent.ie/incoming/article35233744.ece/ALTERNATES/h342/JKLopp.jpg',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: false,
                    src: 'https://react.semantic-ui.com/images/wireframe/image.png',
                    time: '۸ساعت پیش'
                },
                {
                    type: 'حاشیه',
                    title: 'یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!',
                    image: true,
                    src: 'https://cdn-01.independent.ie/incoming/article35233744.ece/ALTERNATES/h342/JKLopp.jpg',
                    time: '۸ساعت پیش'
                },
            ],
            teamStats: {
                goal1: 0,
                goal2: 0,
                shots1: 7,
                shots2: 14,
                shotsOnTarget1: 3,
                shotsOnTarget2: 5,
                possession1: 54,
                possession2: 46,
                passes1: 283,
                passes2: 390,
                fouls1: 20,
                fouls2: 10,
                yellowCards1: 1,
                yellowCards2: 1,
                redCards1: 1,
                redCards2: 2,
                offsides1: 4,
                offsides2: 2,
                corners1: 4,
                corners2: 1,
                src1: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Perspolis_FC.png',
                src2: 'https://www.cambodianfootball.com/medias/esteghlal-logo.png',
            },
            sliderImages: [
                {
                    src: 'http://www.fifaworldcupnews.com/wp-content/uploads/2018/08/Bundesliga-Fixtures-Point-Table-Teams.jpg',
                },
                {
                    src: 'https://brightcove04pmdo-a.akamaihd.net/4221396001/4221396001_5702845000001_5702842932001-vs.jpg?pubId=4221396001&videoId=5702842932001',
                },
            ],
            gameReport: [
                {
                    item: 'futbol',
                    time: '۲۰:۳۴',
                    summary: 'گل برای سپاهان : هادی عقیلی'
                },
                {
                    item: 'futbol',
                    time: '۲۰:۳۴',
                    summary: 'گل برای سپاهان : هادی عقیلی'
                },
                {
                    item: 'futbol',
                    time: '۲۰:۳۴',
                    summary: 'گل برای سپاهان : هادی عقیلی'
                },
            ]
        }
    }


    componentDidMount() {
        let slug = this.props.match.params.slug;


        Axios.get(BackUrls.gameNews(slug)).then(response => {
            const news= (response.data);
            this.setState({news});
        }).catch(er => this.setState({news: []}));

        Axios.get(BackUrls.gamePlayers(slug)).then(response => {
            const players= (response.data);
            this.setState({players});
        }).catch(er => this.setState({players: []}));

        Axios.get(BackUrls.gamesInfo(slug)).then(response => {
            const info= (response.data);
            this.setState({info});
        }).catch(er => this.setState({info: []}));

        Axios.get(BackUrls.gameReport(slug)).then(response => {
            const report= (response.data);
            this.setState({report});
        }).catch(er => this.setState({report: []}));

        Axios.get(BackUrls.gameTimeLine(slug)).then(response => {
            const timeLine= (response.data);
            this.setState({timeLine});
        }).catch(er => this.setState({timeLine: []}));

        Axios.get(BackUrls.gameSlider(slug)).then(response => {
            const slider= (response.data);
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
                                                <Timeline data={this.state.timeLine}/>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <GameTable data={this.state.teamStats}/>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <GameTeams players={this.state.players}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <GameNews data={this.state.news}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <GameReport data={this.state.gameReport}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.sliderImages.map(c=>
                                                        <Image src={c.src}/>
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
                                                <GameTable data={this.state.teamStats}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Timeline/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <GameTeams/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <GameNews data={this.state.news}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <GameReport data={this.state.gameReport}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.sliderImages.map(c=>
                                                        <Image src={c.src}/>
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
                                                <GameTable data={this.state.teamStats}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Timeline/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameTeams/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameNews data={this.state.news}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameReport data={this.state.gameReport}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.sliderImages.map(c=>
                                                        <Image src={c.src}/>
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
