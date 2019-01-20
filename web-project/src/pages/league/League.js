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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImage: [
                {
                    src: "http://www.fifaworldcupnews.com/wp-content/uploads/2018/08/Bundesliga-Fixtures-Point-Table-Teams.jpg",
                },
                {
                    src: "https://brightcove04pmdo-a.akamaihd.net/4221396001/4221396001_5702845000001_5702842932001-vs.jpg?pubId=4221396001&videoId=5702842932001",
                }
            ],
            leagueCard: {
                date: "1963",
                country: 'آلمان',
                confederation:'یوفا',
                daste: '1',
                teamNum: '18',
                rank: '1',
                bestTeam: 'بایرن مونیخ',
                site: 'http://www.bundesliga.de/',
            },
            leagueTable: [
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
                {
                    id: 1,
                    name: 'دورتموند',
                    gameNum: '14',
                    win: '11',
                    lose: '0',
                    draw: '0',
                    goalNum1: '39',
                    goalNum2: '14',
                    goalAverage: '25',
                    score: '36',
                },
            ],
            theBestPlayers: [
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
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
        }
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
                                                        <Image src={c.src}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <LeagueCard data={this.state.leagueCard}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BigLeagueTable data={this.state.leagueTable}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={5}>
                                                <BestPlayer data={this.state.theBestPlayers}/>
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
                                                            {this.state.smallMatchCards.map( c  =>
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
                                                        <Image src={c.src}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <LeagueCard data={this.state.leagueCard}/>
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
                                                            {this.state.smallMatchCards.map( c  =>
                                                                <SmallMatchCard data={c}/>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BigLeagueTable data={this.state.leagueTable}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <BestPlayer data={this.state.theBestPlayers}/>
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
                                                        <Image src={c.src}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueCard data={this.state.leagueCard}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BigLeagueTable data={this.state.leagueTable}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BestPlayer data={this.state.theBestPlayers}/>
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
                                                            {this.state.smallMatchCards.map( c  =>
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
