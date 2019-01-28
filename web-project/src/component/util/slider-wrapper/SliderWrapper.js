import React from 'react'
import {Image} from "semantic-ui-react";
import Slider from "react-slick";


export default class SliderWrapper extends React.Component{

    defaultUrl = 'https://sportseventsspain.com/wp-content/uploads/2016/12/Wit-Logo-Sportseventsspain.jpg';



    render() {
        const picSettings = {
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
        const {isLoading} = this.props;
        var sliderImages;
        if (isLoading){
            sliderImages = [{}];
            // alert(JSON.stringify(sliderImages))
        }
        else {
            sliderImages = this.props.images;
            // alert(JSON.stringify(sliderImages))
        }
        return(
            <Slider {...picSettings} className={'slider'}>
            {sliderImages.map(c =>
                <Image src={c.image_url}/>
            )}
        </Slider>)


    }

}