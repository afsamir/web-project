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
                    {this.props.data.num}
                </List.Item>
                <List.Item as='a' className={'player-name'}>
                    <a href={FrontUrls.playerPage(this.props.data.player__slug)}>{this.props.data.player__name}</a>
                </List.Item>
                <List.Item className={'player-num'}>
                    {this.props.data.player__post__short_name}
                </List.Item>


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

