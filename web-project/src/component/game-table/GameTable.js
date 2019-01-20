import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './GameTable.css'
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
                        <Header.Content>نتایج نهایی</Header.Content>
                    </Header>
                    <Divider/>
                    <div style={{height: '500px', overflow:'scroll'}}>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'><img src={this.props.data.src1} style={{height: '100px', width: '100px'}}/><Divider/><h3>پرسپولیس</h3></Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'> <h1>{this.props.data.goal1} - {this.props.data.goal2}</h1> </Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'><img src={this.props.data.src2} style={{height: '100px', width: '100px'}}/><Divider/><h3>استقلال تهران</h3></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>{this.props.data.shots1}({this.props.data.shotsOnTarget1})</Table.Cell>
                                    <Table.Cell textAlign='center'>شوت</Table.Cell>
                                    <Table.Cell textAlign='center'>{this.props.data.shots2}({this.props.data.shotsOnTarget2})</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>{this.props.data.possession1}%</Table.Cell>
                                    <Table.Cell textAlign='center'>مالکیت توپ</Table.Cell>
                                    <Table.Cell textAlign='center'>{this.props.data.possession2}%</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>{this.props.data.passes1}</Table.Cell>
                                    <Table.Cell textAlign='center'>پاس</Table.Cell>
                                    <Table.Cell textAlign='center'>{this.props.data.passes2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>{this.props.data.fouls1}</Table.Cell>
                                    <Table.Cell textAlign='center'>خطا</Table.Cell>
                                    <Table.Cell textAlign='center'>{this.props.data.fouls2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>{this.props.data.yellowCards1}</Table.Cell>
                                    <Table.Cell textAlign='center'>کارت زرد</Table.Cell>
                                    <Table.Cell textAlign='center'>{this.props.data.yellowCards2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>{this.props.data.redCards1}({this.props.data.correctShoot1})</Table.Cell>
                                    <Table.Cell textAlign='center'>کارت قرمز</Table.Cell>
                                    <Table.Cell textAlign='center'>{this.props.data.redCards2}({this.props.data.correctShoot2})</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>{this.props.data.offsides1}</Table.Cell>
                                    <Table.Cell textAlign='center'>آفساید</Table.Cell>
                                    <Table.Cell textAlign='center'>{this.props.data.offsides2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>{this.props.data.corners1}</Table.Cell>
                                    <Table.Cell textAlign='center'>کرنر</Table.Cell>
                                    <Table.Cell textAlign='center'>{this.props.data.corners2}</Table.Cell>
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















