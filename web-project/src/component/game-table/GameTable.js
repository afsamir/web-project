import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './GameTable.css'
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import Slider from "react-slick/lib";
import FrontUrls from "../../utils/FrontUrls";

class GameTable extends Component {
    render() {

        if (this.props.data.field === 'FTB') {
            return (
                <div>
                    <Segment id='LeagueTable' textAlign='center'>
                        <Header as='h1' icon textAlign='center'>
                            <Image src="https://cdn3.iconfinder.com/data/icons/medcare/512/tables-512.png"/>
                            <Header.Content>نتایج نهایی</Header.Content>
                        </Header>
                        <Divider/>
                        <div style={{height: '500px', overflow: 'scroll'}}>
                            <Table unstackable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign='center'><img src={this.props.data.team1__image_url}
                                                                                  style={{
                                                                                      height: '100px',
                                                                                      width: '100px'
                                                                                  }}/>
                                            <Divider/>
                                            <h3><a
                                                href={FrontUrls.teamPage(this.props.data.team1__slug)}>{this.props.data.team1__name}</a>
                                            </h3>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>
                                            <h1>{this.props.data.goal1} - {this.props.data.goal2}</h1>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'><img src={this.props.data.team2__image_url}
                                                                                  style={{
                                                                                      height: '100px',
                                                                                      width: '100px'
                                                                                  }}/><Divider/>
                                            <h3><a
                                                href={FrontUrls.teamPage(this.props.data.team2__slug)}>{this.props.data.team2__name}</a>
                                            </h3>
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell
                                            textAlign='center'>{this.props.data.shots1}({this.props.data.shots_on_target1})</Table.Cell>
                                        <Table.Cell textAlign='center'>شوت</Table.Cell>
                                        <Table.Cell
                                            textAlign='center'>{this.props.data.shots2}({this.props.data.shots_on_target2})</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.possession1}%</Table.Cell>
                                        <Table.Cell textAlign='center'>مالکیت توپ</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.possession2}%</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.passes1}</Table.Cell>
                                        <Table.Cell textAlign='center'>پاس</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.passes2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.fouls1}</Table.Cell>
                                        <Table.Cell textAlign='center'>خطا</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.fouls2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.yellow_cards1}</Table.Cell>
                                        <Table.Cell textAlign='center'>کارت زرد</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.yellow_cards2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell
                                            textAlign='center'>{this.props.data.redCards1}</Table.Cell>
                                        <Table.Cell textAlign='center'>کارت قرمز</Table.Cell>
                                        <Table.Cell
                                            textAlign='center'>{this.props.data.redCards2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.offsides1}</Table.Cell>
                                        <Table.Cell textAlign='center'>آفساید</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.offsides2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.corners1}</Table.Cell>
                                        <Table.Cell textAlign='center'>کرنر</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.corners2}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </Segment>
                </div>
            )
        } else {
            return (
                <div>
                    <Segment id='LeagueTable' textAlign='center'>
                        <Header as='h1' icon textAlign='center'>
                            <Image src="https://cdn3.iconfinder.com/data/icons/medcare/512/tables-512.png"/>
                            <Header.Content>نتایج نهایی</Header.Content>
                        </Header>
                        <Divider/>
                        <div style={{height: '500px', overflow: 'scroll'}}>
                            <Table unstackable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign='center'><img src={this.props.data.team1__image_url}
                                                                                  style={{
                                                                                      height: '100px',
                                                                                      width: '100px'
                                                                                  }}/>
                                            <Divider/>
                                            <h3><a
                                                href={FrontUrls.teamPage(this.props.data.team1__slug)}>{this.props.data.team1__name}</a>
                                            </h3>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>
                                            <h1>
                                                {this.props.data.all_score1} - {this.props.data.all_score2}</h1>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'><img src={this.props.data.team2__image_url}
                                                                                  style={{
                                                                                      height: '100px',
                                                                                      width: '100px'
                                                                                  }}/><Divider/>
                                            <h3><a
                                                href={FrontUrls.teamPage(this.props.data.team1__slug)}>{this.props.data.team1__name}</a>
                                            </h3>
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell
                                            textAlign='center'>{this.props.data.score3_team1}</Table.Cell>
                                        <Table.Cell textAlign='center'>شوت ۳ امتیازی</Table.Cell>
                                        <Table.Cell
                                            textAlign='center'>{this.props.data.score3_team2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.score2_team1}</Table.Cell>
                                        <Table.Cell textAlign='center'>شوت ۲ امتیازی</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.score2_team2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.score1_team1}</Table.Cell>
                                        <Table.Cell textAlign='center'>پنالتی</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.score1_team2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.fouls1}</Table.Cell>
                                        <Table.Cell textAlign='center'>خطا</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.fouls2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.out1}</Table.Cell>
                                        <Table.Cell textAlign='center'>اخراج</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.out2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell
                                            textAlign='center'>{this.props.data.ribbond1}</Table.Cell>
                                        <Table.Cell textAlign='center'>ریباند</Table.Cell>
                                        <Table.Cell
                                            textAlign='center'>{this.props.data.ribbond2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.style1}</Table.Cell>
                                        <Table.Cell textAlign='center'>توپ دزدی</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.style2}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{this.props.data.counter_attack1}</Table.Cell>
                                        <Table.Cell textAlign='center'>ضد حمله</Table.Cell>
                                        <Table.Cell textAlign='center'>{this.props.data.counter_attack2}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </Segment>
                </div>
            );
        }
    }
}

export default GameTable;















