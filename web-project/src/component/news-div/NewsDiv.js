import React from 'react';
import './NewsDiv.css';

import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';
import {Icon, Image, Responsive} from "semantic-ui-react";


export class NewsDiv extends React.Component {

    constructor(props) {
        super(props);
        this.setState({type: this.props.type})
    }

    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL} >

                <div className={'news-div'}>
                    <Responsive minWidth={768}>
                    <Icon className={"icon"}/>

                    <p className={'news-text'}>
                        <p className={'main'}>UCL</p>
                        <Image style={this.props.hasImage? {}: {display:'none'}} size={'small'} src={"https://react.semantic-ui.com/images/wireframe/image.png"}
                               className={'news-image'}/> یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!
                        <div className={'news-date'}>3 days ago</div>

                    </p>
                    </Responsive>
                    <Responsive maxWidth={767} >
                        <Icon className={"icon"}/>

                        <p className={'news-text'}>
                            <Icon name={'angle left'} className={'main'}/>
                            <Image size={'tiny'} src={"https://react.semantic-ui.com/images/wireframe/image.png"}
                                   className={'news-image'}/> یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!
                            <div className={'news-date'}>3 days ago</div>

                        </p>
                    </Responsive>
                </div>


            </DirectionProvider>
        )
    }

}


