import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './LeagueTable.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";

class App extends Component {
    stateOptions = [{key: 'FB', value: 'FB', text: 'Football'}, {key: 'BB', value: 'BB', text: 'Basketball'}];


    render() {
        let teams = [
            {
                id: 1,
                name: 'پدیده',
                gameNum: 14,
                score: 30
            }, {
                id: 1,
                name: 'سپاهان',
                gameNum: 13,
                score: 29
            }, {
                id: 1,
                name: 'پرسپولیس',
                gameNum: 13,
                score: 27
            },
        ];

        let leagues = [
            {key: 'en', value: 'en', text: 'لیگ برتر انگلیس',},
            {key: 'la', value: 'la', text: 'لالیگا',},
            {key: 'ir', value: 'ir', text: 'لیگ برتر ایران',},
        ];

        const {table} = this.props;

        return (

            <DirectionProvider direction={DIRECTIONS.RTL} textAlign='center'>
                <Segment id='LeagueTable' textAlign='center'>
                    <Header>جدول لیگ</Header>
                    <Dropdown disabled={!table} placeholder='State' search selection options={leagues} defaultValue='ir' inverted/>
                    <Divider/>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell textAlign='center'>ردیف</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>تیم</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>بازی ها</Table.HeaderCell>
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
                                        <Table.Cell textAlign='center'> {team.score} </Table.Cell>
                                    </Table.Row>
                                )
                            }
                        </Table.Body>
                    </Table>
                </Segment>
            </DirectionProvider>
        );
    }
}

export default App;
