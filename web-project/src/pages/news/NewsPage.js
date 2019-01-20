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

class NewsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'نشریات کره ای در روزهای اخیر اخباری در مورد دخالت غیرمستقیم یا مستقیم فدراسیون فوتبال کره جنوبی و درخواست آنها از پائولو بنتو برای قرار دادن لی سئونگ وو، بازیکن محبوب فوتبال این کشور حتی برای دقایقی کوتاه در ترکیب داده بودند که مسئولان فدراسیون این اخبار را تکذیب کردند.\n' +
                'کیم سئون، رئیس روابط عمومی فدراسیون کره جنوبی و مسئول تیم رسانه ای این کشور در جام ملت ها این اخبار را مسخره توصیف کرد. همچنین لی جائه چول، مدیر بازاریابی بازاریابی فدراسیون که تصویر لی سئونگ وو را بر روی پوستر تبلیغاتی بازی های کره قرار داده است در این مورد گفت: "هیچگونه ارتباط مستقیمی بین پائولو بنتو و بخش بازاریابی وجود نداشته و چنین اتفاقاتی واقعیت ندارد."',
            mainNews: {
                src: 'https://static.farakav.com/files/pictures/thumb/01360537.jpg',
                text: 'text'
            },
            otherNews: [
                {
                    src: 'https://www.activenewcastle.co.uk/sites/default/files/2017-11/soccer1.jpg',
                },
                {
                    src: 'https://www.activenewcastle.co.uk/sites/default/files/2017-11/soccer1.jpg',
                },
                {
                    src: 'https://www.activenewcastle.co.uk/sites/default/files/2017-11/soccer1.jpg',
                },
                {
                    src: 'https://www.activenewcastle.co.uk/sites/default/files/2017-11/soccer1.jpg',
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
                                                                data={this.state.mainNews}/>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={16}>
                                                            <Container textAlign={'right'}>
                                                                <p>
                                                                    {this.state.content}
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
                                                                {this.state.otherNews.map(c =>
                                                                    <PictureNews data={this.state.mainNews}/>
                                                                )}
                                                            </Slider>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <News news={this.state.news} height={1314}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} minWidth={768} maxWidth={1079}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <PictureNews
                                                    data={this.state.mainNews}/>

                                            </Grid.Column>
                                        </Grid.Row>

                                        <Grid.Row>
                                            <Grid.Column width={11}>
                                                <Container textAlign={'right'}>
                                                    <p>
                                                        {this.state.content}
                                                    </p>
                                                </Container>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <News news={this.state.news} height={1314}/>
                                            </Grid.Column>
                                            <Grid.Column width={16}>
                                                <Divider horizontal>
                                                    <Header as='h4'>
                                                        اخبار مرتبط
                                                    </Header>
                                                </Divider>
                                                <Slider {...matchResultSettings} className={'slider'}>
                                                    <Slider {...matchResultSettings} className={'slider'}>
                                                        {this.state.otherNews.map(c =>
                                                            <PictureNews data={this.state.mainNews}/>
                                                        )}
                                                    </Slider>
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
                                                    data={this.state.mainNews}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Container textAlign={'right'}>
                                                    <p>
                                                        {this.state.content}
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
                                                    <Slider {...matchResultSettings} className={'slider'}>
                                                        {this.state.otherNews.map(c =>
                                                            <PictureNews data={this.state.mainNews}/>
                                                        )}
                                                    </Slider>
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <News news={this.state.news} height={480}/>
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
