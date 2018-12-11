import React from 'react'
import {Divider, Icon, Image, List, Segment} from "semantic-ui-react";
import './Footer.css'

export class Footer extends React.Component{


    render() {
        return(
            <Segment padded={true} inverted attached={'bottom'} raised className={'footer'}>
                FOLLOW US ON
                <br/>
                <List horizontal className={'media-list'}>
                    <List.Item>
                        <Icon circular inverted name={'big twitter'} className={'icon'}> <a/></Icon>

                    </List.Item>
                    <List.Item>
                        <Icon circular inverted name={'big facebook f'} className={'icon'}> <a/></Icon>

                    </List.Item>
                    <List.Item>
                        <Icon circular inverted name={'big instagram'} className={'icon'}> <a/></Icon>

                    </List.Item>
                </List>
                <Divider/>
                <List divided verticalAlign='middle' className={'inner-links'}>
                    <List.Item>

                        <a>Shop</a>
                    </List.Item>
                    <Divider/>
                    <List.Item>
                        <a>Donate</a>
                    </List.Item>
                    <List.Item>
                        <Divider/>
                        <a>Cooperate</a>
                    </List.Item>
                </List>

                <div className={'bottom-link'}>

                    <List floated='left' horizontal>

                        <List.Item href='#'>Terms</List.Item>
                        <List.Item href='#'>Privacy</List.Item>
                        <List.Item href='#'>Contact</List.Item>

                    </List>

                    <List horizontal>

                        <List.Item href='#'>About Us</List.Item>
                        <List.Item href='#'>Jobs</List.Item>
                    </List>


                </div>
            </Segment>
        )
    }

}