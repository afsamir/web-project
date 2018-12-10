import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Team.css';
import 'semantic-ui-css/semantic.min.css';
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";
import {MenuBar} from "../../component/menu-bar";
import Responsive from "semantic-ui-react/dist/commonjs/addons/Responsive/Responsive";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import TeamLogo from "../../component/team-logo/TeamLogo";
import {PictureNews} from "../../component/picture-news";
import Slider from "react-slick/lib";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import {TeamMemberDiv} from "../../component/team-member-div";
import TeamMember from "../../component/team-member";
import News from "../../component/news";
import TeamNews from "../../component/team-news/TeamNews";
import PlayerResult from "../../component/player-result";
import TeamResult from "../../component/team-result/TeamResult";

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
            centerMode: true,
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
                                            <Grid.Column width={11}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    <Image
                                                        src="http://hd.wallpaperswide.com/thumbs/real_madrid_champions_league_winners_2016-t2.jpg"/>
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <TeamLogo style={{padding: '10px'}}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={5}>
                                                <TeamNews/>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <TeamResult/>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <TeamMember/>
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
