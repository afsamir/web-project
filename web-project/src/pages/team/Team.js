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
    constructor(props) {
        super(props);
        this.state={
            sliderImage:[
                {
                    src: "http://hd.wallpaperswide.com/thumbs/real_madrid_champions_league_winners_2016-t2.jpg,",
                }
            ],
            teamLogo: {
                internatinalRank: "1",
                europeRank: '1',
                name: 'رئال مادرید',
                nickname: 'کهکشانی ها - کرکس ها',
                city: 'مادرید',
                country: 'اسپانیا',
                establishedYear: '1902',
                coach: 'سانتیاگو سولاری',
                captain: 'سرخیو راموس',
                site: 'www.realmadrid.com'
            },
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
            smallMatchCards: [
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
                {
                    src1: "https://igbolive.com/wp-content/uploads/2018/03/manu-logo.png",
                    src2: "http://upload.wikimedia.org/wikipedia/it/archive/0/07/20120411134648!Fc_barcelona.png",
                    goalNum1: 1, goalNum2: 2, time: 55, finished: true
                },
            ],
            tableData: [
                {
                    id: 1,
                    name: 'پدیده',
                    gameNum: 14,
                    score: 30
                },
                {
                    id: 1,
                    name: 'سپاهان',
                    gameNum: 13,
                    score: 29
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },{
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
                {
                    id: 1,
                    name: 'پرسپولیس',
                    gameNum: 13,
                    score: 27
                },
            ],
            teams: [
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                    penaltyGoal: '5',

                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
                {
                    name: 'جام حذفی اسپانیا',
                    date: '2015/2016',
                    result: 'نیمه نهایی',
                    gameNum: '5',
                    goalNum1: '5',
                    goalNum2: '5',
                },
            ],
            teamMembers: [
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
                {
                    name: 'برانکو ایوانکویچ',
                    post: 'سرمربی'
                },
            ]
        }
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
                                                        <Image src={c.src}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                <TeamLogo style={{padding: '10px'}} data={this.state.teamLogo}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard smallMatchCards={this.state.smallMatchCards} tableData={this.state.tableData}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={5}>
                                                <TeamNews data={this.state.news}/>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <TeamResult data={this.state.teams}/>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <TeamMember data={this.state.teamMembers}/>
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
                                                        <Image src={c.src}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <TeamLogo style={{padding: '10px'}} data={this.state.teamLogo}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <TeamMember data={this.state.teamMembers}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard smallMatchCards={this.state.smallMatchCards} tableData={this.state.tableData}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <TeamNews news={this.state.news}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <TeamResult data={this.state.teams}/>
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
                                                        <Image src={c.src}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamLogo style={{padding: '10px'}} data={this.state.teamLogo}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard smallMatchCards={this.state.smallMatchCards} tableData={this.state.tableData}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamNews news={this.state.news}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamResult data={this.state.teams}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamMember data={this.state.teamMembers}/>
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
