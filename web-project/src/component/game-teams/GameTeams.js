import React, {Component} from "react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import {Image} from "semantic-ui-react";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import {Lineup} from "../lineup";

class GameTeams extends Component {



    render() {
        // alert(JSON.stringify(this.props.players));
        return (
            <div>
                <Segment id='LeagueTable' textAlign='center'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src="https://cdn3.iconfinder.com/data/icons/medcare/512/tables-512.png"/>
                        <Header.Content>ترکیب تیم ها</Header.Content>
                    </Header>
                    <Divider/>
                    <div style={{height: '500px', overflow: 'scroll'}}>
                        <Table unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'><img src={this.props.players.team_slug_1}
                                                                              style={{height: '100px', width: '100px'}}
                                                                              alt={''}/>
                                        <Divider/>
                                        <h3>{this.props.players.team1}</h3>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'/>
                                    <Table.HeaderCell textAlign='center'><img src={this.props.players.team_slug_2}
                                                                              style={{height: '100px', width: '100px'}}
                                                                              alt={''}/>
                                        <Divider/>
                                        <h3>{this.props.players.team2}</h3>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell textAlign='center'><Lineup fix={this.props.players.fix_players1} sub={this.props.players.substitute_player1}/></Table.Cell>
                                    <Table.Cell textAlign='center'/>
                                    <Table.Cell textAlign='center'><Lineup fix={this.props.players.fix_players2} sub={this.props.players.substitute_player2}/></Table.Cell>
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
