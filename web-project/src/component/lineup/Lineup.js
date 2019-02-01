import React from 'react'
import {Divider, Icon, List} from "semantic-ui-react";
import "./Lineup.css"
import FrontUrls from "../../utils/FrontUrls";

export class Lineup extends React.Component {
    render() {
        return (
            <div className={'lineup'}>
                <List size={'huge'} link>
                    ترکیب اصلی
                    <Divider/>
                    {this.props.players.fix.map(p =>
                        <List.Item>

                            <LineupItem data={p}/>

                        </List.Item>
                    )}
                    <Divider/>
                    ذخیره
                    <Divider/>

                    {this.props.players.sub.map(p =>
                        <List.Item>

                            <LineupItem data={p}/>

                        </List.Item>
                    )}


                </List>

            </div>
        );
    }

}

export class LineupItem extends React.Component {
    render() {

        return (

            <List horizontal className={'lineup-item'}>
                <List.Item className={'player-num'}>
                    {this.props.data.number}
                </List.Item>
                <List.Item as='a' className={'player-name'}>
                    <a href={FrontUrls.playerPage(this.props.data.name)}>{this.props.data.name}</a>
                </List.Item>
                {/*{events.map(event => <List.Item>*/}
                {/*<LineupEvent item={event.item} minute={event.minute}/>*/}
                {/*</List.Item>)}*/}


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

