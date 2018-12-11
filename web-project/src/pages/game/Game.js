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
                                            <Grid.Column width={8}>
                                                <GameTable/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <GameTeams/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <GameNews/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <GameReport/>
                                            </Grid.Column>
                                        </Grid.Row>
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
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={1079}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameTable/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameTeams/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameNews/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <GameReport/>
                                            </Grid.Column>
                                        </Grid.Row>
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
