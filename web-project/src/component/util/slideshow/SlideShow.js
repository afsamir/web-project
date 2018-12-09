import React from 'react';
import Slider from "react-slick";
import './SlideShow.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MatchResultCard} from "../../match-result-card";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import PlayerCard from "../../player-card";


export class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover:true,
            pauseOnDotsHover:true
        };

        return (
            <Slider {...settings} className={'slider'}>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
                <div><MatchResultCard/></div>
            </Slider>

        );
    }
}

