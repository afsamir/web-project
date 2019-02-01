import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './PlayerResult.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import FrontUrls from "../../utils/FrontUrls";

class PlayerResult extends Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL} textAlign='center'>
                <Segment id='PlayerResult' textAlign='center'>
                    <Header as='h1' icon textAlign='center'>
                        <Image
                            src="https://previews.123rf.com/images/scanrail/scanrail1201/scanrail120100080/12074969-football-championship-concept-golden-trophy-cup-and-soccer-ball-with-crown-isolated-on-white-backgro.jpg"/>
                        <Header.Content>آمار بازیکن</Header.Content>
                    </Header>
                    <Divider inverted/>
                    <div style={{height: "542px", overflow: "auto"}}>
                        <Table color='grey' unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>رقابت</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>فصل</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>تیم</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>شماره پیراهن</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>تعداد بازی </Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>دقایق بازی </Table.HeaderCell>

                                    <Table.HeaderCell
                                        textAlign='center'>{this.props.field === 'FTB' ? 'گل زده' : 'امتیاز'}</Table.HeaderCell>
                                    < Table.HeaderCell textAlign='center'>پاس گل </Table.HeaderCell>
                                    <Table.HeaderCell
                                        textAlign='center'>{this.props.field === 'FTB' ? 'گل پنالتی' : 'سه امتیازی'}</Table.HeaderCell>
                                    <Table.HeaderCell
                                        textAlign='center'>{this.props.field === 'FTB' ? 'کار زرد' : 'ریباند'}</Table.HeaderCell>
                                    <Table.HeaderCell
                                        textAlign='center'>{this.props.field === 'FTB' ? 'کارت قرمز' : 'خطا'}</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    this.props.data.map(team =>
                                        <Table.Row key={this.props.data.id}>
                                            <Table.Cell
                                                textAlign='center'> {team.teamLeague__league__name} </Table.Cell>
                                            <Table.Cell
                                                textAlign='center'> {team.teamLeague__league__year} </Table.Cell>
                                            <Table.Cell textAlign='center'><a href={FrontUrls.teamPage(team.team_slug)}> {team.team} </a></Table.Cell>
                                            <Table.Cell textAlign='center'> {team.num} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.game_num} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.time} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.scoring_goal_number | team.all_score } </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.assist_goal_number | team.assist_number} </Table.Cell>
                                            <Table.Cell
                                                textAlign='center'> {team.scoring_penalty_goal_number | team.throw3_number} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.yellow_card_number | team.ribbond} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.red_card_number | team.foul_number} </Table.Cell>

                                        </Table.Row>
                                    )
                                }
                            </Table.Body>
                        </Table>
                    </div>
                </Segment>
            </DirectionProvider>
        );
    }
}

export default PlayerResult;
