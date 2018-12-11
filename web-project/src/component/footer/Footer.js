import React from 'react'
import {Divider, Icon, List, Segment} from "semantic-ui-react";
import './Footer.css'

export class Footer extends React.Component{


    render() {
        return(
            <Segment padded={true} inverted attached={'bottom'} raised className={'footer'}>
                ما را دنبال کنید
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

                        <List.Item href='#'>قوانین</List.Item>
                        <List.Item href='#'>حریم شخصی</List.Item>
                        <List.Item href='#'>تماس</List.Item>
                    </List>



                </div>
            </Segment>
        )
    }

}
