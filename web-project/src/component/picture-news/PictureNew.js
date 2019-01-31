import React from 'react'
import {Header, Image, Dimmer, Segment} from "semantic-ui-react";
import './PictureNews.css'
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import FrontUrls from "../../utils/FrontUrls";


export class PictureNews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleShow = () => this.setState({active: true});
    handleHide = () => this.setState({active: false});

    render() {
        const {active} = this.state;

        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <a href={this.props.data.url}>

                    <Dimmer.Dimmable as={Segment} blurring dimmed={active} onMouseEnter={this.handleShow}
                                     onMouseLeave={this.handleHide} className={'pic-news-div'}>
                        <Image src={this.props.data.image} centered fluid/>
                        <Dimmer active={active} onClickOutside={this.handleHide}>
                            <Header dividing={true} as='h3' position={'top'} inverted className={'pic-news'}>
                                {this.props.data.text}
                            </Header>
                        </Dimmer>

                    </Dimmer.Dimmable>
                </a>
            </DirectionProvider>
        )
    }
}
