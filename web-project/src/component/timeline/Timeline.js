import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Timeline.css'
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import Slider from "react-slick/lib";

class GameTable extends Component {
    render() {
        return (
            <div>
                <Segment id='LeagueTable' textAlign='center'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src="https://cdn3.iconfinder.com/data/icons/medcare/512/tables-512.png"/>
                        <Header.Content>خط زمانی بازی</Header.Content>
                    </Header>
                    <Divider/>
                    <div style={{height: '500px', overflow:'scroll'}}>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'><img src='https://upload.wikimedia.org/wikipedia/commons/7/70/Perspolis_FC.png' style={{height: '100px', width: '100px'}}/><Divider/><h3>پرسپولیس</h3></Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'> <h1></h1> </Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'><img src='https://www.cambodianfootball.com/medias/esteghlal-logo.png' style={{height: '100px', width: '100px'}}/><Divider/><h3>استقلال تهران</h3></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell textAlign='center'>5:10</Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name='black futbol'/></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'><Icon name='black futbol'/></Table.Cell>
                                    <Table.Cell textAlign='center'>10:20</Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell textAlign='center'>48:19</Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name='black futbol'/></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'><Icon name='black futbol'/></Table.Cell>
                                    <Table.Cell textAlign='center'>87:23</Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </Segment>
            </div>
        );
    }
}

export default GameTable;















