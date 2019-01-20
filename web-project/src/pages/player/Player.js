import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Player.css';
import 'semantic-ui-css/semantic.min.css';
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";
import {MenuBar} from "../../component/menu-bar";
import Responsive from "semantic-ui-react/dist/commonjs/addons/Responsive/Responsive";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Slider from "react-slick/lib";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import PlayerCard from "../../component/player-card";
import PlayerNews from "../../component/player-news/PlayerNews";
import PlayerResult from "../../component/player-result";

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImage: [
                {
                    src: "http://hd.wallpaperswide.com/thumbs/real_madrid_champions_league_winners_2016-t2.jpg,",
                }
            ],
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
            playerCard: {
                name: 'لیونل آندرس مسی',
                post: 'مهاجم',
                nationality: "آرژانتین",
                team: "بارسلونا",
                age: 31,
                birthPlace: 'روزاریو، آرژانتین',
                height: 1.7,
                weight: 72,
                teamNum: 10,
                nationalTeamNum: 10,
                site: 'http://www.leomessi.com'
            },
            playerResult: [
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    team: 'بارسلونا',
                    num: '10',
                    time: '480',
                    gameNum: '5',
                    goalNum: '5',
                    goalPenalty: '0',
                },
            ]
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

        return (
            <div className='Team'>
                <MenuBar style={{position: 'fixed'}}/>
                <DirectionProvider direction={DIRECTIONS.RTL}>
                    <div style={{maxWidth: '1500px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                        <div style={{margin: '5px'}}>
                            <Segment.Group>
                                <Responsive as={Segment} minWidth={1080}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={12}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.sliderImage.map( c  =>
                                                        <Image src={c.src}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                <PlayerCard style={{padding: '10px'}} data={this.state.playerCard}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <PlayerNews data={this.state.news}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <PlayerResult data={this.state.playerResult}/>
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
                                                        <Image src={c.src}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <PlayerCard style={{padding: '10px'}} data={this.state.playerCard}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <PlayerNews data={this.state.news}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerResult data={this.state.playerResult}/>
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
                                                        <Image src={c.src}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerCard style={{padding: '10px'}} data={this.state.playerCard}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerNews data={this.state.news}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerResult data={this.state.playerResult}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                            </Segment.Group>
                        </div>
                    </div>
                </DirectionProvider>
            </div>
        );
    }
}

export default Team;
