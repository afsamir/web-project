import React, { Component } from 'react';
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

class Home extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            sliderImage: [
                {
                    src: 'https://wallpaperaccess.com/full/498543.png'
                },
                {
                    src: 'https://wallpaperaccess.com/full/498589.jpg'
                }
            ],
            matchResultCards: [
                {
                    title: "لیگ قهرمانان اروپا", team1: "منچستر یونایتد", goal1: "2", team2: "بارسلونا", goal2: "1",
                    state: "نتیجه نهایی", date: "۲۰۱۸/۰۸/۰۳",
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                },
                {
                    title: "لیگ قهرمانان اروپا", team1: "منچستر یونایتد", goal1: "2", team2: "بارسلونا", goal2: "1",
                    state: "نتیجه نهایی", date: "۲۰۱۸/۰۸/۰۳",
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                },
                {
                    title: "لیگ قهرمانان اروپا", team1: "منچستر یونایتد", goal1: "2", team2: "بارسلونا", goal2: "1",
                    state: "نتیجه نهایی", date: "۲۰۱۸/۰۸/۰۳",
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                },
                {
                    title: "لیگ قهرمانان اروپا", team1: "منچستر یونایتد", goal1: "2", team2: "بارسلونا", goal2: "1",
                    state: "نتیجه نهایی", date: "۲۰۱۸/۰۸/۰۳",
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                },
                {
                    title: "لیگ قهرمانان اروپا", team1: "منچستر یونایتد", goal1: "2", team2: "بارسلونا", goal2: "1",
                    state: "نتیجه نهایی", date: "۲۰۱۸/۰۸/۰۳",
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                },
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
            smallMatchCards: [
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
            tableData: [
                {
                    id: 1,
                    name: 'پدیده',
                    gameNum: 14,
                    score: 30
                },
                {
                    id: 1,
                    name: 'سپاهان',
                    gameNum: 13,
                    score: 29
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },{
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
            ],
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

        return (
            <div className='Home'>
                <MenuBar style={{position: 'fixed'}}/>
                <DirectionProvider direction={DIRECTIONS.RTL}>
                    <div style={{maxWidth: '1500px', margin: '30px auto 0 auto', marginTop: '80px'}} >
                        <div style={{margin: '5px'}}>
                            <Segment.Group>
                                <Responsive as={Segment} minWidth={1080} >
                                    <Grid id={'background'}>
                                        <Grid.Row>
                                            <Grid.Column width={11}>
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
                                                            <Slider {...matchResultSettings} className={'slider'}>
                                                                {this.state.matchResultCards.map( c  =>
                                                                    <MatchResultCard data={c}/>
                                                                )}
                                                            </Slider>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <LeagueSelector/>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <LeagueDashboard smallMatchCards={this.state.smallMatchCards} tableData={this.state.tableData}/>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <News news={this.state.news} height={1360}/>
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
                                            <Grid.Column width={16}>
                                                <Slider {...matchResultSettings} className={'slider'}>
                                                    {this.state.matchResultCards.map( c  =>
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
                                                            <LeagueDashboard smallMatchCards={this.state.smallMatchCards} tableData={this.state.tableData}/>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <News news={this.state.news} height={974}/>
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
                                                <div
                                                    style={{display: 'none'}}>  {matchResultSettings.slidesToShow = 2}</div>
                                                <Slider {...matchResultSettings} className={'slider'}>
                                                    {this.state.matchResultCards.map( c  =>
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
                                                <LeagueDashboard smallMatchCards={this.state.smallMatchCards} tableData={this.state.tableData}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <News news={this.state.news} height={1314}/>
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
