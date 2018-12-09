import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './LeagueTable.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";

class App extends Component {
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

        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div id='LeagueTable'>
                    <Table color='grey'>
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
                </div>
            </DirectionProvider>
        );
    }
}

export default App;
