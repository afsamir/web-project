import React, {Component} from 'react';
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
import Axios from "axios";
import BackUrls from "../../utils/BackUrls";

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderImage: [
                {
                    src: "http://hd.wallpaperswide.com/thumbs/real_madrid_champions_league_winners_2016-t2.jpg,",
                }
            ],
            playerNews: [{}],
            teamNews: {},
            info: {},
            members: [{}],
            stats: [{}],
            games: [],
            tableData: {teams:[]},
        }
    }

    componentWillMount() {
        let slug = this.props.match.params.slug;

        Axios.get(BackUrls.teamSlider(slug)).then(response => {
            const sliderImage = (response.data);
            this.setState({sliderImage})

        }).catch(er => this.setState({sliderImage: []}));

        Axios.get(BackUrls.teamInfo(slug)).then(response => {
            const info = (response.data);
            this.setState({info})

        }).catch(er => this.setState({info: []}));

        Axios.get(BackUrls.teamNewsByPlayer(slug)).then(response => {
            const playerNews = (response.data);
            this.setState({playerNews})

        }).catch(er => this.setState({playerNews: [{}]}));

        Axios.get(BackUrls.teamNewsByTeam(slug)).then(response => {
            const teamNews = (response.data);
            this.setState({teamNews})

        }).catch(er => this.setState({teamNews: [{}]}));

        Axios.get(BackUrls.teamLeagues(slug)).then(response => {
            const tableData = (response.data[0]);
            this.setState({tableData})

        }).catch(er => this.setState({tableData: {teams:[]}}));

        Axios.get(BackUrls.teamMembers(slug)).then(response => {
            const members = (response.data);
            this.setState({members})
        }).catch(er => this.setState({members: [{}]}));


        Axios.get(BackUrls.teamStats(slug)).then(response => {
            const stats = (response.data);
            this.setState({stats})

        }).catch(er => this.setState({stats: [{}]}));


        Axios.get(BackUrls.teamGames(slug)).then(response => {
            const games = (response.data);
            this.setState({games})

        }).catch(er => this.setState({games: [{}]}));

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
                                                    {this.state.sliderImage.map(c =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                <TeamLogo style={{padding: '10px'}} data={this.state.info}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard smallMatchCards={this.state.games}
                                                                 tableData={this.state.tableData}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={5}>
                                                <TeamNews data={this.state.playerNews}/>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                                <TeamResult data={this.state.stats}/>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <TeamMember data={this.state.members}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} minWidth={768} maxWidth={1079}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.sliderImage.map(c =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <TeamLogo style={{padding: '10px'}} data={this.state.info}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <TeamMember data={this.state.members}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard smallMatchCards={this.state.games}
                                                                 tableData={this.state.tableData}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <TeamNews data={this.state.playerNews}/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <TeamResult data={this.state.stats}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                                <Responsive as={Segment} maxWidth={767}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Slider {...picSettings} className={'slider'}>
                                                    {this.state.sliderImage.map(c =>
                                                        <Image src={c.image_url}/>
                                                    )}
                                                </Slider>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamLogo style={{padding: '10px'}} data={this.state.info}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <LeagueDashboard smallMatchCards={this.state.games}
                                                                 tableData={this.state.tableData}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamNews data={this.state.playerNews}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamResult data={this.state.stats}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <TeamMember data={this.state.members}/>
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
