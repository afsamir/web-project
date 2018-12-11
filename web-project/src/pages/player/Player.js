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
                                                    <Image
                                                        src="https://stmed.net/sites/default/files/lionel-messi-wallpapers-31172-6051644.jpg"/>
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                <PlayerCard style={{padding: '10px'}}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <PlayerNews/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <PlayerResult/>
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
                                                        src="https://stmed.net/sites/default/files/lionel-messi-wallpapers-31172-6051644.jpg"/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <PlayerCard style={{padding: '10px'}}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <PlayerNews/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerResult/>
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
                                                        src="https://stmed.net/sites/default/files/lionel-messi-wallpapers-31172-6051644.jpg"/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerCard style={{padding: '10px'}}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerNews/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerResult/>
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
