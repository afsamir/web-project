import React from 'react';
import './NewsDiv.css';

import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';
import {Feed, Icon, Image} from "semantic-ui-react";


export class NewsDiv extends React.Component {

    constructor(props) {
        super(props);
        this.setState({type: this.props.type})
    }

    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL} className={'news-div'}>
                <div>
                    <Icon className={"icon"}/>
                    <div className={'main'}>ثبیبیب</div>
                    <p className={'news-text'}>
                        <Image size={'small'} src={"https://react.semantic-ui.com/images/wireframe/image.png"}
                               className={'news-image'}/> یورگن کلوپ:قهرمانی بارسلونا من را شگفت زده کرد!
                        <div className={'news-date'}>3 days ago</div>

                    </p>

                </div>
            </DirectionProvider>
        )
    }

}


