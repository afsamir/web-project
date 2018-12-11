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
                                                    <Image
                                                        src="http://www.fifaworldcupnews.com/wp-content/uploads/2018/08/Bundesliga-Fixtures-Point-Table-Teams.jpg"/>
                                                    <Image
                                                        src="https://brightcove04pmdo-a.akamaihd.net/4221396001/4221396001_5702845000001_5702842932001-vs.jpg?pubId=4221396001&videoId=5702842932001"/>
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <LeagueCard/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BigLeagueTable/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={5}>
                                                <BestPlayer/>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <LeagueNews/>
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
                                                            <SmallMatchCard finished={false}/>
                                                            <SmallMatchCard finished={true}/>
                                                            <SmallMatchCard finished={true}/>
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
                                                    <Image
                                                        src="http://www.fifaworldcupnews.com/wp-content/uploads/2018/08/Bundesliga-Fixtures-Point-Table-Teams.jpg"/>
                                                    <Image
                                                        src="https://brightcove04pmdo-a.akamaihd.net/4221396001/4221396001_5702845000001_5702842932001-vs.jpg?pubId=4221396001&videoId=5702842932001"/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <LeagueCard/>
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
                                                            <SmallMatchCard finished={false}/>
                                                            <SmallMatchCard finished={true}/>
                                                            <SmallMatchCard finished={true}/>
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
                                                    </div>
                                                </div>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BigLeagueTable/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <BestPlayer/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <LeagueNews/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={767}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    <Image
                                                        src="http://www.fifaworldcupnews.com/wp-content/uploads/2018/08/Bundesliga-Fixtures-Point-Table-Teams.jpg"/>
                                                    <Image
                                                        src="https://brightcove04pmdo-a.akamaihd.net/4221396001/4221396001_5702845000001_5702842932001-vs.jpg?pubId=4221396001&videoId=5702842932001"/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueCard/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BigLeagueTable/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <BestPlayer/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueNews/>
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
                                                            <SmallMatchCard finished={false}/>
                                                            <SmallMatchCard finished={true}/>
                                                            <SmallMatchCard finished={true}/>
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
