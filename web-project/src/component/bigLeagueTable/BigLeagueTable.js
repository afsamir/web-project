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
        let teams = [
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
            {
                id: 1,
                name: 'دورتموند',
                gameNum: '14',
                win: '11',
                lose: '0',
                draw: '0',
                goalNum1: '39',
                goalNum2: '14',
                goalAverage: '25',
                score: '36',
            },
        ];
        return (
            <div>
                <Segment id='LeagueTable' textAlign='center'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src="https://cdn3.iconfinder.com/data/icons/medcare/512/tables-512.png"/>
                        <Header.Content>جدول</Header.Content>
                    </Header>
                    <LeagueSelector/>
                    {/*<Dropdown disabled={!table} placeholder='State' search selection options={leagues} defaultValue='ir' inverted/>*/}
                    <Divider/>
                    <div style={{height: '500px', overflow:'scroll'}}>
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
                                    teams.map(team =>
                                        <Table.Row key={teams.id}>
                                            <Table.Cell textAlign='center'> {team.id} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.name} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.gameNum} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.win} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.lose} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.draw} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.goalNum1} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.goalNum2} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.goalAverage} </Table.Cell>
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















