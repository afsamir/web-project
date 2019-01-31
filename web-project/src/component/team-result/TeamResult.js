import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './TeamResult.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";

class App extends Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL} textAlign='center'>
                <Segment id='TeamResult' textAlign='center'>
                    <Header as='h1' icon textAlign='center'>
                        <Image
                            src="https://previews.123rf.com/images/scanrail/scanrail1201/scanrail120100080/12074969-football-championship-concept-golden-trophy-cup-and-soccer-ball-with-crown-isolated-on-white-backgro.jpg"/>
                        <Header.Content>آمار تیم</Header.Content>
                    </Header>
                    <Divider inverted/>
                    <div style={{height: "480px", overflow: "auto"}}>
                        <Table unstackable color='grey'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>رقابت</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>فصل</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>نتیجه</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>تعداد بازی </Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>گل زده</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>گل خورده</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    this.props.data.map(l =>
                                        <Table.Row>
                                            <Table.HeaderCell textAlign='center'>{l.league__name}<br/><Divider hidden/></Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>{l.league__year}<br/><Divider hidden/></Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>{l.result}<br/><Divider hidden/></Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>{l.game_number}<br/><Divider hidden/></Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>{l.scoring_goal_number}<br/><Divider hidden/></Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>{l.receiving_goal_number}<br/><Divider hidden/></Table.HeaderCell>
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
