import React from 'react';
import Slider from "react-slick";
import './SlideShow.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MatchResultCard} from "../../match-result-card";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";


export class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };

        return (
            <Segment id='Slider'>
            <Slider {...settings} className={'slider'}>
                <div> <MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
            </Slider>
            </Segment>
        );
    }
}

