import React from 'react'
import {Divider, Icon, List, Segment} from "semantic-ui-react";
import './Footer.css'

export class Footer extends React.Component{


    render() {
        return(
            <Segment padded={true} inverted attached={'bottom'} raised className={'footer'}>
                FOLLOW US ON
                <br/>
                <List horizontal className={'media-list'}>
                    <List.Item>
                        <Icon circular inverted name={'big twitter'} className={'icon'}> </Icon>

                    </List.Item>
                    <List.Item>
                        <Icon circular inverted name={'big facebook f'} className={'icon'}> </Icon>

                    </List.Item>
                    <List.Item>
                        <Icon circular inverted name={'big instagram'} className={'icon'}> </Icon>

                    </List.Item>
                </List>
                <Divider/>


                <div className={'bottom-link'}>

                    <List floated='left' horizontal>

                        <List.Item href='#'>Terms</List.Item>
                        <List.Item href='#'>Privacy</List.Item>
                        <List.Item href='#'>Contact</List.Item>
                    </List>



                </div>
            </Segment>
        )
    }

}
