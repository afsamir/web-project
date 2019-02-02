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
import Responsive from "semantic-ui-react/dist/commonjs/addons/Responsive/Responsive";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import {Container, Divider, Header} from "semantic-ui-react";
import {PictureNews} from "../../component/picture-news";
import {Footer} from "../../component/footer";
import Axios from 'axios'
import BackUrls from "../../utils/BackUrls";
import FrontUrls from "../../utils/FrontUrls";
import Comment from "../../component/comment";
import CreateComment from "../../component/create-comment";

class NewsPage extends Component {

    componentDidMount() {
        Axios.get(BackUrls.footballNewsSummary).then(response => {
            const footballNews = response.data;
            this.setState({footballNews});
        }).catch(er => this.setState({footballNews: []}));

        Axios.get(BackUrls.basketballNewsSummary).then(response => {
            const basketballNews = response.data;
            this.setState({basketballNews});
        }).catch(er => this.setState({basketballNews: []}));

        Axios.get(BackUrls.detailedNews(this.props.match.params.slug)).then(response => {
            const news = response.data;
            this.setState({news});
        }).catch(er => this.setState({news: {related_news: [{}]}}));


        Axios.get(BackUrls.comment(this.props.match.params.slug)).then(response => {
            const comments= response.data;
            this.setState({comments});
        }).catch(er => this.setState({comments:[{}]}));


    }


    constructor(props) {
        super(props);
        this.state = {
            footballNews: [],
            basketballNews: [],
            news: {related_news: [{}]},
            comments:[{}]
        }

    }

    render() {
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

        const {basketballNews} = this.state,
            {footballNews} = this.state,
            {news} = this.state,
            {match} = this.props;

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
                                                                data={{image: news.image_url, text: news.title}}/>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <Container textAlign={'right'}>
                                                                <p>
                                                                    {news.text}
                                                                </p>
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
                                                                {news.related_news.map(c =>
                                                                    <PictureNews data={{
                                                                        image: c.image_url,
                                                                        text: c.title,
                                                                        url: FrontUrls.news + c.slug
                                                                    }}/>
                                                                )}
                                                            </Slider>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            {this.state.comments.map(c =>
                                                            <Comment data={c}/>
                                                            )}
                                                            <CreateComment slug={match.params.slug}/>
                                                        </Grid.Column>

                                                    </Grid.Row>
                                                </Grid>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <News footballNews={footballNews}
                                                      basketballNews={basketballNews} height={1314}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} minWidth={768} maxWidth={1079}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PictureNews data={{image: news.image_url, text: news.title}}/>


                                            </Grid.Column>
                                        </Grid.Row>

                                        <Grid.Row>
                                            <Grid.Column width={11}>
                                                <Grid.Row>
                                                    <Container textAlign={'right'}>
                                                        <p>
                                                            {news.text}
                                                        </p>
                                                    </Container>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Divider horizontal>
                                                        <Header as='h4'>
                                                            اخبار مرتبط
                                                        </Header>
                                                    </Divider>
                                                    <Slider {...matchResultSettings} className={'slider'}>
                                                        {news.related_news.map(c =>
                                                            <PictureNews data={{
                                                                image: c.image_url,
                                                                text: c.title,
                                                                url: FrontUrls.news + c.slug
                                                            }}/>
                                                        )}
                                                    </Slider>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={16}>
                                                        {this.state.comments.map(c =>
                                                            <Comment data={c}/>
                                                        )}
                                                        <CreateComment slug={match.params.slug}/>
                                                    </Grid.Column>

                                                </Grid.Row>

                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <News footballNews={footballNews}
                                                      basketballNews={basketballNews} height={1314}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={767}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PictureNews data={{image: news.image_url, text: news.title}}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Container textAlign={'right'}>
                                                    <p>
                                                        {news.text}
                                                    </p>
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
                                                    {news.related_news.map(c =>
                                                        <PictureNews data={{
                                                            image: c.image_url,
                                                            text: c.title,
                                                            url: FrontUrls.news + c.slug
                                                        }}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                {this.state.comments.map(c =>
                                                    <Comment data={c}/>
                                                )}
                                                <CreateComment slug={match.params.slug}/>
                                            </Grid.Column>

                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <News footballNews={footballNews}
                                                      basketballNews={basketballNews} height={480}/>
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

export default NewsPage;
