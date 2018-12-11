import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import {VideoFrame} from "../../component/video";

class NewsPage extends Component {
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
                    <div style={{maxWidth: '1500px', margin: '30px auto 0 auto', marginTop: '80px'}}>
                        <div style={{margin: '5px'}}>
                            <Segment.Group>
                                <Responsive as={Segment} minWidth={1080}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={11}>
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <Slider {...picSettings} className={'slider'}>
                                                                <Image src="https://www.desktopbackground.org/download/o/2014/04/29/754479_football-or-soccer-balls-hd-wallpapers-4k-wallpapers_1920x1080_h.jpg"/>
                                                                <Image src="https://wallpaperaccess.com/full/498543.png"/>
                                                                <Image src="https://wallpaperaccess.com/full/498589.jpg"/>
                                                            </Slider>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <Slider {...matchResultSettings} className={'slider'}>
                                                                <MatchResultCard/>
                                                                <MatchResultCard/>
                                                                <MatchResultCard/>
                                                                <MatchResultCard/>
                                                                <MatchResultCard/>
                                                                <MatchResultCard/>
                                                                <MatchResultCard/>
                                                                <MatchResultCard/>
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
                                                            <LeagueDashboard table={false}/>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <News/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} minWidth={768} maxWidth={1079}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    <Image src="https://www.desktopbackground.org/download/o/2014/04/29/754479_football-or-soccer-balls-hd-wallpapers-4k-wallpapers_1920x1080_h.jpg"/>
                                                    <Image src="https://wallpaperaccess.com/full/498543.png"/>
                                                    <Image src="https://wallpaperaccess.com/full/498589.jpg"/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...matchResultSettings} className={'slider'}>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <News/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <LeagueSelector/>
                                                <LeagueDashboard/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={767}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    <Image src="https://www.desktopbackground.org/download/o/2014/04/29/754479_football-or-soccer-balls-hd-wallpapers-4k-wallpapers_1920x1080_h.jpg"/>
                                                    <Image src="https://wallpaperaccess.com/full/498543.png"/>
                                                    <Image src="https://wallpaperaccess.com/full/498589.jpg"/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <div
                                                    style={{display: 'none'}}>  {matchResultSettings.slidesToShow = 2}</div>
                                                <Slider {...matchResultSettings} className={'slider'}>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                    <MatchResultCard/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueSelector style={{maxWidth: '500px'}}/>
                                            </Grid.Column>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <News/>
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

export default NewsPage;
