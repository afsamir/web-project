import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './PlayerCard.css';
import {Card, Divider} from "semantic-ui-react";
import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider'

class App extends Component {
    render() {
        this.state={
            age: 31,
            height: 1.7,
            weight: 70,
            nationality: "آرژانتین",
            team: "بارسلونا"

        };
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Card
                    id='card'
                    image='https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2018/10/09/608bb4da-06db-47b1-ac42-55707ec47a66/p19054.png'
                    header='لیونل مسی'
                    meta='مهاجم'
                    description={
                        <div>
                            <Divider horizontal>اطلاعات</Divider>
                            سن: {this.state['age']} <br/>
                            قد: {this.state['height']} <br/>
                            وزن: {this.state['weight']} <br/>
                            ملیت: {this.state['nationality']} <br/>
                            تیم کنونی: {this.state['team']} <br/>

                        </div>
                    }


                />
            </DirectionProvider>
        );
    }
}
export default App;
