import React from 'react'
import {Divider, Icon, List} from "semantic-ui-react";
import "./Lineup.css"

export class Lineup extends React.Component {
    render() {
        return (
            <div className={'lineup'}>
                <List size={'huge'} link>
                    <Divider/>
                    <List.Item>
                        <LineupItem number={'۱۰ - '} name={"لیونل مسی"} events={[{item: 'black futbol', minute: '۳۴'}, {
                            item: 'red ambulance ',
                            minute: '۵۶'
                        }]}/>
                    </List.Item>
                    <List.Item>
                        <LineupItem number={'۱۰ - '} name={"لیونل مسی"} events={[{item: 'black futbol', minute: '۳۴'}, {
                            item: 'red ambulance ',
                            minute: '۵۶'
                        }]}/>
                    </List.Item>
                    <List.Item>
                        <LineupItem number={'۱۰ - '} name={"لیونل مسی"} events={[{item: 'black futbol', minute: '۳۴'}, {
                            item: 'red ambulance ',
                            minute: '۵۶'
                        }]}/>
                    </List.Item> <List.Item>
                    <LineupItem number={'۱۰ - '} name={"لیونل مسی"} events={[{item: 'black futbol', minute: '۳۴'}, {
                        item: 'red ambulance ',
                        minute: '۵۶'
                    }]}/>
                </List.Item> <List.Item>
                    <LineupItem number={'۱۰ - '} name={"لیونل مسی"} events={[{item: 'black futbol', minute: '۳۴'}, {
                        item: 'red ambulance ',
                        minute: '۵۶'
                    }]}/>
                </List.Item> <List.Item>
                    <LineupItem number={'۱۰ - '} name={"لیونل مسی"} events={[{item: 'black futbol', minute: '۳۴'}, {
                        item: 'red ambulance ',
                        minute: '۵۶'
                    }]}/>
                </List.Item> <List.Item>
                    <LineupItem number={'۱۰ - '} name={"لیونل مسی"} events={[{item: 'black futbol', minute: '۳۴'}, {
                        item: 'red ambulance ',
                        minute: '۵۶'
                    }]}/>
                </List.Item>






                </List>

            </div>
        );
    }

}

export class LineupItem extends React.Component {
    render() {

        const {number} = this.props, {name} = this.props, {events} = this.props;
        return (

            <List horizontal className={'lineup-item'}>
                <List.Item className={'player-num'}>
                    {number}
                </List.Item>
                <List.Item as='a' className={'player-name'}>
                    {name}
                </List.Item>
                {events.map(event => <List.Item>
                    <LineupEvent item={event.item} minute={event.minute}/>
                </List.Item>)}


            </List>

        );
    }

}

export class LineupEvent extends React.Component {
    render() {

        const {item} = this.props, {minute} = this.props;

        return (
            <div>
                <Icon name={item}/>
                <div>{minute}</div>
            </div>

        );
    }

}

