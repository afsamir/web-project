import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './PlayerResult.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";

class PlayerResult extends Component {
    render() {
        let teams = [
            {
                name: 'جام حذفی اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '480',
                gameNum: '5',
                goalNum: '5',
                goalPenalty: '0',
            }, {
                name: 'لالیگا اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '2729',
                gameNum: '33',
                goalNum: '26',
                goalPenalty: '3',
            }, {
                name: 'لیگ قهرمانان اروپا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '630',
                gameNum: '7',
                goalNum: '6',
                goalPenalty: '1',
            },
            {
                name: 'جام حذفی اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '480',
                gameNum: '5',
                goalNum: '5',
                goalPenalty: '0',
            }, {
                name: 'لالیگا اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '2729',
                gameNum: '33',
                goalNum: '26',
                goalPenalty: '3',
            }, {
                name: 'لیگ قهرمانان اروپا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '630',
                gameNum: '7',
                goalNum: '6',
                goalPenalty: '1',
            },
            {
                name: 'جام حذفی اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '480',
                gameNum: '5',
                goalNum: '5',
                goalPenalty: '0',
            }, {
                name: 'لالیگا اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '2729',
                gameNum: '33',
                goalNum: '26',
                goalPenalty: '3',
            }, {
                name: 'لیگ قهرمانان اروپا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '630',
                gameNum: '7',
                goalNum: '6',
                goalPenalty: '1',
            },
            {
                name: 'جام حذفی اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '480',
                gameNum: '5',
                goalNum: '5',
                goalPenalty: '0',
            }, {
                name: 'لالیگا اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '2729',
                gameNum: '33',
                goalNum: '26',
                goalPenalty: '3',
            }, {
                name: 'لیگ قهرمانان اروپا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '630',
                gameNum: '7',
                goalNum: '6',
                goalPenalty: '1',
            },
            {
                name: 'جام حذفی اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '480',
                gameNum: '5',
                goalNum: '5',
                goalPenalty: '0',
            }, {
                name: 'لالیگا اسپانیا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '2729',
                gameNum: '33',
                goalNum: '26',
                goalPenalty: '3',
            }, {
                name: 'لیگ قهرمانان اروپا',
                date: '2015/2016',
                team: 'بارسلونا',
                num: '10',
                time: '630',
                gameNum: '7',
                goalNum: '6',
                goalPenalty: '1',
            },
        ];

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
                        <Table color='grey'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>رقابت</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>فصل</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>تیم</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>شماره پیراهن</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>دقایق بازی </Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>تعداد بازی </Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>گل زده </Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>گل پنالتی</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    teams.map(team =>
                                        <Table.Row key={teams.id}>
                                            <Table.Cell textAlign='center'> {team.name} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.date} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.team} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.num} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.time} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.gameNum} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.goalNum} </Table.Cell>
                                            <Table.Cell textAlign='center'> {team.goalPenalty} </Table.Cell>
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
