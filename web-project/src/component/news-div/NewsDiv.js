import React from 'react';
import './NewsDiv.css';

import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';
import {Icon, Image, Responsive} from "semantic-ui-react";


export class NewsDiv extends React.Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div className={'news-div'}>
                    <Responsive minWidth={768}>
                        <Icon className={"icon"}/>
                         <p className={'news-text'}>
                                <p className={'main'}>{this.props.data.type}</p>
                                <Image style={this.props.data.image? {}: {display:'none'}} size={'small'} src={this.props.data.src}
                                   className={'news-image'}/> {this.props.data.title}
                            <div className={'news-date'}>{this.props.data.time}</div>
                        </p>
                    </Responsive>
                    <Responsive maxWidth={767} >
                        <Icon className={"icon"}/>
                        <p className={'news-text'}>
                            <Icon name={'angle left'} className={'main'}/>
                            <Image style={this.props.data.image? {}: {display:'none'}} size={'small'} src={this.props.data.src}
                                   className={'news-image'}/> {this.props.data.title}
                            <div className={'news-date'}>{this.props.data.time}</div>
                        </p>
                    </Responsive>
                </div>
            </DirectionProvider>
        )
    }

}


