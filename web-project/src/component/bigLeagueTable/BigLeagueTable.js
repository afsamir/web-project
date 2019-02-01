import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './BigLeagueTable.css'
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import {LeagueSelector} from "../leagues-dashboard";

class App extends Component {

    render() {
        return (
            <div>
                <Segment id='LeagueTable' textAlign='center'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src="https://cdn3.iconfinder.com/data/icons/medcare/512/tables-512.png"/>
                        <Header.Content>جدول</Header.Content>
                    </Header>
                    <Divider/>
                    <div style={{height: '500px', overflow: 'scroll'}}>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>رتبه</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>نام تیم</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>بازی ها</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>برد</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>باخت</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>تساوی</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>گل زده</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>گل خورده</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>تفاضل گل</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>امتیاز</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    this.props.data.teams.map(team =>
                                        <Table.Row key={this.props.data.id}>
                                            <Table.Cell textAlign='center'> {team.rank} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.team__name} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.game_number} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.win_number} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.lose_number} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.draw_number} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.scoring_goal_number} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.receiving_goal_number} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.difference} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.score} </Table.Cell>
                                        </Table.Row>
                                    )
                                }
                            </Table.Body>
                        </Table>
                    </div>
                </Segment>
            </div>
        );
    }
}

export default App;















