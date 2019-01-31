import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './LeagueTable.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import FrontUrls from "../../utils/FrontUrls";

class App extends Component {


    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL} textAlign='center'>
                <Segment id='LeagueTable' textAlign='center'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src="https://cdn3.iconfinder.com/data/icons/medcare/512/tables-512.png"/>
                        <Header.Content>جدول</Header.Content>
                    </Header>
                    {/*<Dropdown disabled={!table} placeholder='State' search selection options={leagues} defaultValue='ir' inverted/>*/}
                    <Divider/>
                    <div style={{height: '300px', overflow:'scroll'}}>
                    <Table unstackable sortable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell textAlign='center'>رتبه</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>تیم</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>بازی ها</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>امتیاز</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                this.props.tableData.map(team =>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>{}</Table.Cell>
                                        <Table.Cell textAlign='center'><a href={FrontUrls.teamPage(team.team__slug)}> {team.team__name}</a> </Table.Cell>
                                        <Table.Cell textAlign='center'> {team.game_number} </Table.Cell>
                                        <Table.Cell textAlign='center'> {team.score} </Table.Cell>
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

export default App;
