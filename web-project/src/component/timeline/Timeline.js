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

    TLHandler(tl) {

        let icon = 'futbol';
        if (tl.type === 'goal') {
            icon = 'futbol';
        } else if (tl.type === 'red card') {
            icon = 'red clone';
        } else if (tl.type === 'yellow card') {
            icon = 'yellow clone';
        } else if (tl.type === 'substitute') {
            icon = 'sync alternate';
        } else if (tl.type === 'throw') {
            if (tl.score === '1') {
                icon = 'red basketball ball';
            } else if (tl.score === '2') {
                icon = 'basketball ball';
            } else if (tl.score === '3') {
                icon = 'crosshairs';
            }
        } else if (tl.type === 'penalty goal') {
            icon = 'flag checkered';
        }

        if (tl.team__name === this.props.team2.name) {
            return (<Table.Row>
                <Table.Cell textAlign='center'></Table.Cell>
                <Table.Cell textAlign='center'>{tl.second} : {tl.minute}</Table.Cell>
                <Table.Cell textAlign='center' style={{fontSize: '10px'}}>{tl.out_player__name || ''}<Icon
                    name={icon}/>{tl.in_player__name || ''}</Table.Cell>
            </Table.Row>)

        } else return (<Table.Row>
            <Table.Cell textAlign='center' style={{fontSize: '10px'}}>{tl.out_player__name || ''}<Icon
                name={icon}/>{tl.in_player__name || ''}</Table.Cell>
            <Table.Cell textAlign='center'>{tl.minute} : {tl.second}</Table.Cell>
            <Table.Cell textAlign='center'></Table.Cell>

        </Table.Row>)


    }

    render() {

        return (
            <div>
                <Segment id='LeagueTable' textAlign='center'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src="https://cdn3.iconfinder.com/data/icons/medcare/512/tables-512.png"/>
                        <Header.Content>خط زمانی بازی</Header.Content>
                    </Header>
                    <Divider/>
                    <div style={{height: '500px', overflow: 'scroll'}}>
                        <Table unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'><img src={this.props.team1.image_url} style={{
                                        height: '100px',
                                        width: '100px'
                                    }}/>
                                        <Divider/>
                                        <h3>{this.props.team1.name}</h3>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'><h1></h1></Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'><img src={this.props.team2.image_url} style={{
                                        height: '100px',
                                        width: '100px'
                                    }}/>
                                        <Divider/>
                                        <h3>{this.props.team2.name}
                                        </h3>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {this.props.data.map(tl =>
                                    this.TLHandler(tl)
                                )}

                            </Table.Body>
                        </Table>
                    </div>
                </Segment>
            </div>
        );
    }
}

export default GameTable;















