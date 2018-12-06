import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Slider.css'
import Carousel from 'nuka-carousel'
import {Image} from "semantic-ui-react";

class App extends Component {
    render() {
        return(
            <div id='carousel'>
                <Carousel>
                    <Image src="https://as00.epimg.net/futbol/imagenes/2017/12/06/champions/1512551986_235931_1512552972_noticia_normal.jpg"/>
                    <Image src="https://www.latimes.com/resizer/daVnS4wjuyU_yPYS2fQbWilzW2Y=/1400x0/www.trbimg.com/img-5c088f84/turbine/la-1544064896-gpthnsq3jd-snap-image"/>
                    <Image src="https://www.economist.com/sites/default/files/20170805_BLP529.jpg"/>
                </Carousel>
            </div>

        );
    }
}

export default App;
