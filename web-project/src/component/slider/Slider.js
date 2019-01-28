import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Slider.css'
import Carousel from 'nuka-carousel'
import {Image} from "semantic-ui-react";
import Slider from "../util/slider-wrapper/SliderWrapper";

class App extends Component {
    render() {
        const {isLoading} = this.props;
        var sliderImages;
        if (isLoading) {
            sliderImages = [{}];
        } else {
            sliderImages = this.props.images;
        }
        return (
            <div id='carousel'>
                <Carousel>
                    {sliderImages.map(c =>
                        <Image src={c.image_url}/>
                    )}
                </Carousel>
            </div>

        );
    }
}

export default App;
