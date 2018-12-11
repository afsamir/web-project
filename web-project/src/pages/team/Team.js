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
import Slider from "react-slick/lib";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import TeamMember from "../../component/team-member";
import TeamNews from "../../component/team-news/TeamNews";
import TeamResult from "../../component/team-result/TeamResult";
import {LeagueDashboard} from "../../component/leagues-dashboard";

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
                                                        src="http://hd.wallpaperswide.com/thumbs/real_madrid_champions_league_winners_2016-t2.jpg"/>
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                <TeamLogo style={{padding: '10px'}}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard/>
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
                                <Responsive as={Segment} minWidth={768} maxWidth={1079}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    <Image
                                                        src="http://hd.wallpaperswide.com/thumbs/real_madrid_champions_league_winners_2016-t2.jpg"/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <TeamLogo style={{padding: '10px'}}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <TeamMember/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <TeamNews/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <TeamResult/>
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
                                                        src="http://hd.wallpaperswide.com/thumbs/real_madrid_champions_league_winners_2016-t2.jpg"/>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamLogo style={{padding: '10px'}}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamNews/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamResult/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
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
