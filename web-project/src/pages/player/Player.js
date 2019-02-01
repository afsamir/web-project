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
import Axios from "axios";
import BackUrls from "../../utils/BackUrls";

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImage: [
            ],
            news: [],
            info:{},
            stats:[]
        };
    }


    componentDidMount() {

        let slug = this.props.match.params.slug;


        Axios.get(BackUrls.playerSlider(slug)).then(response => {
            const sliderImage = (response.data);
            this.setState({sliderImage});
        }).catch(er => this.setState({sliderImage: []}));

        Axios.get(BackUrls.playerNews(slug)).then(response => {
            const news = (response.data);
            this.setState({news});
        }).catch(er => this.setState({news: []}));

        Axios.get(BackUrls.playerInfo(slug)).then(response => {
            const info = (response.data);
            this.setState({info});
        }).catch(er => this.setState({info: []}));

        Axios.get(BackUrls.playerStats(slug)).then(response => {
            const stats = (response.data);
            this.setState({stats});
        }).catch(er => this.setState({info: []}));

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
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                <PlayerCard style={{padding: '10px'}} data={this.state.info}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={6}>
                                                <PlayerNews data={this.state.news}/>
                                            </Grid.Column>
                                            <Grid.Column width={10}>
                                                <PlayerResult data={this.state.stats} field={this.state.info.field} />
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
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <PlayerCard style={{padding: '10px'}} data={this.state.info}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <PlayerNews data={this.state.news}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerResult data={this.state.stats}/>
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
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerCard style={{padding: '10px'}} data={this.state.info}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerNews data={this.state.news}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PlayerResult data={this.state.stats}/>
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
