import React from 'react';
import './NewsDiv.css';
import BackUrls from '../../utils/BackUrls'
import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';
import {Responsive} from "semantic-ui-react";
import Link from "react-router-dom/es/Link";
import FrontUrls from "../../utils/FrontUrls";
import {NavLink} from "react-router-dom";


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
                                <a href={FrontUrls.news + this.props.data.slug}>{this.props.data.title}</a>
                            </b>
                        </div>
                        <div className={'news-date'}>{this.props.data.created_date_time}</div>
                    </Responsive>
                    <Responsive maxWidth={1079} minWidth={768} className={'news-div'}>

                        <div className={'news-text'}>
                            <b>
                                <div className={'main'}>{this.props.data.category}</div>
                            </b>
                            <div className={'news-date'}>{this.props.data.created_date_time}</div>
                            <a href={FrontUrls.news + this.props.data.slug}>{this.props.data.title}</a>
                        </div>
                    </Responsive>
                    <Responsive maxWidth={767} className={'news-div'}>

                        <b>
                            <div className={'main'}>{this.props.data.category}</div>
                            <a href={FrontUrls.news + this.props.data.slug}>{this.props.data.title}</a>

                        </b>
                        <div className={'news-date'}>{this.props.data.created_date_time}</div>
                    </Responsive>
                </div>
            </DirectionProvider>
        )
    }

}


