import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Home.css';
import 'semantic-ui-css/semantic.min.css';
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";
import {MenuBar} from "../../component/menu-bar";
import PlayerCard from "../../component/player-card";
import Image from "semantic-ui-react/dist/commonjs/elements/Image/Image";
import {PictureNews} from "../../component/picture-news";

class Home extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            // centerMode: true,
        };

        return (
            <div className='Home' style={{padding: "5px"}}>
                <MenuBar/>
                <DirectionProvider direction={DIRECTIONS.RTL}>
                    <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column mobile={16} tablet={16} computer={16}>
                                    <Slider {...settings} className={'slider'} style={{margin: '5px'}}>

                                        <Image
                                            src="data:image/jpeg;base64,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"/>
                                        <Image
                                            src="data:image/jpeg;base64,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"/>

                                    </Slider>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>                            <PictureNews/>


                                <Grid.Column>
                                    <PlayerCard/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </DirectionProvider>
            </div>
        );
    }
}

export default Home;