import React, {Component} from 'react';
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
import {Container, Divider, Header, Icon, Image} from "semantic-ui-react";
import {VideoFrame} from "../../component/video";
import {PictureNews} from "../../component/picture-news";
import {Footer} from "../../component/footer";

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
                                                            {/*<VideoFrame active={false} url={"http://varzesh3.com"} placeholder={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>*/}
                                                            <PictureNews
                                                                src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                        </Grid.Column>
                                                    </Grid.Row>


                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <Container textAlign={'right'}>
                                                                <p> طبی همانطور که در کنفرانس معارفه خود اشاره کرده بود،
                                                                    دیروز در گفت و گو با شبکه تلویزیونی خوزستان هم تاکید
                                                                    کرد که تلاش کرده در وهله اول بازیکنان تیمش را همدل
                                                                    کند. او گفت: حالا بچه ها متحد هستند و برای نام فولاد
                                                                    بازی می کنند، نه گروه یا دسته ای دیگر.</p>
                                                            </Container>

                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <Divider horizontal>
                                                                <Header as='h4'>

                                                                    اخبار مرتبط
                                                                </Header>
                                                            </Divider>
                                                            <Slider {...matchResultSettings} className={'slider'}>
                                                                <PictureNews
                                                                    src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                                <PictureNews
                                                                    src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                                <PictureNews
                                                                    src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                                <PictureNews
                                                                    src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                                <PictureNews
                                                                    src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>

                                                            </Slider>
                                                        </Grid.Column>
                                                    </Grid.Row>


                                                </Grid>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <News height={1314}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} minWidth={768} maxWidth={1079}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PictureNews
                                                    src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>

                                            </Grid.Column>
                                        </Grid.Row>


                                        <Grid.Row>
                                            <Grid.Column width={11}>
                                                <Container textAlign={'right'}>
                                                    <p> طبی همانطور که در کنفرانس معارفه خود اشاره کرده بود، دیروز در
                                                        گفت و گو با شبکه تلویزیونی خوزستان هم تاکید کرد که تلاش کرده در
                                                        وهله اول بازیکنان تیمش را همدل کند. او گفت: حالا بچه ها متحد
                                                        هستند و برای نام فولاد بازی می کنند، نه گروه یا دسته ای
                                                        دیگر.</p>
                                                </Container>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <News height={1314}/>
                                            </Grid.Column>
                                            <Grid.Column width={16}>
                                                <Divider horizontal>
                                                    <Header as='h4'>

                                                        اخبار مرتبط
                                                    </Header>
                                                </Divider>
                                                <Slider {...matchResultSettings} className={'slider'}>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>

                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={767}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PictureNews
                                                    src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Container textAlign={'right'}>
                                                    <p> طبی همانطور که در کنفرانس معارفه خود اشاره کرده بود، دیروز در
                                                        گفت و گو با شبکه تلویزیونی خوزستان هم تاکید کرد که تلاش کرده در
                                                        وهله اول بازیکنان تیمش را همدل کند. او گفت: حالا بچه ها متحد
                                                        هستند و برای نام فولاد بازی می کنند، نه گروه یا دسته ای
                                                        دیگر.</p>
                                                </Container>

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Divider horizontal>
                                                    <Header as='h4'>

                                                        اخبار مرتبط
                                                    </Header>
                                                </Divider>
                                                <Slider {...matchResultSettings} className={'slider'}>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>
                                                    <PictureNews
                                                        src={'https://static.farakav.com/files/pictures/thumb/01360537.jpg'}/>

                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <News height={480}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                            </Segment.Group>
                        </div>
                        <Footer/>
                    </div>
                </DirectionProvider>
            </div>
        );
    }
}

export default NewsPage;
