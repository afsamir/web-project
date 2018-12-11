import React, {Component} from "react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import {Image} from "semantic-ui-react";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import {Lineup} from "../lineup";

class GameTeams extends Component {
    render() {
        return (
            <div>
                <Segment id='LeagueTable' textAlign='center'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src="https://cdn3.iconfinder.com/data/icons/medcare/512/tables-512.png"/>
                        <Header.Content>ترکیب تیم ها</Header.Content>
                    </Header>
                    <Divider/>
                    <div style={{height: '500px', overflow:'scroll'}}>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'><img src='https://upload.wikimedia.org/wikipedia/commons/7/70/Perspolis_FC.png' style={{height: '100px', width: '100px'}} alt={''}/><Divider/><h3>پرسپولیس</h3></Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'/>
                                    <Table.HeaderCell textAlign='center'><img src='https://www.cambodianfootball.com/medias/esteghlal-logo.png' style={{height: '100px', width: '100px'}} alt={''}/><Divider/><h3>استقلال تهران</h3></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell textAlign='center'><Lineup/></Table.Cell>
                                    <Table.Cell textAlign='center'/>
                                    <Table.Cell textAlign='center'><Lineup/></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </Segment>
            </div>
        );
    }
}

export default GameTeams;
