import React from 'react';
import './NewsDiv.css';

import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';
import { Responsive} from "semantic-ui-react";


export class NewsDiv extends React.Component {
    render() {
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>


                <div>
                    <Responsive minWidth={1080} className={'news-div'}>

                        {/*
                        <Image style={this.props.data.image_url ? {} : {display: 'none'}} size={'small'}
                               src={this.props.data.image_url}
                               className={'news-image-large'}/>
*/}
                        <div className={'news-text-large'}>
                            <b>
                                <div className={'main'} style={{display: 'block'}}>{this.props.data.category} </div>
                                {this.props.data.title}
                            </b>
                        </div>
                        <div className={'news-date'}>{this.props.data.time}</div>
                    </Responsive>
                    <Responsive maxWidth={1079} minWidth={768} className={'news-div'}>

                        <div className={'news-text'}>
                            <b>
                                <div className={'main'}>{this.props.data.category}</div>
                                {this.props.data.title}
                            </b>
                            <div className={'news-date'}>{this.props.data.time}</div>
                        </div>
                    </Responsive>
                    <Responsive maxWidth={767} className={'news-div'}>

                        <b>
                            <div className={'main'}>{this.props.data.category}</div>
                            {this.props.data.title}
                        </b>
                        <div className={'news-date'}>{this.props.data.time}</div>
                    </Responsive>
                </div>
            </DirectionProvider>
        )
    }

}


