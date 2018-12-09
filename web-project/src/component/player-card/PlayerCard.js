import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './PlayerCard.css';
import {Card, Divider} from "semantic-ui-react";
import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider'
import Table from "semantic-ui-react/dist/commonjs/collections/Table/Table";

class App extends Component {
    render() {
        var info = {name: 'لیونل آندرس مسی',
            post: 'مهاجم',
            nationality: "آرژانتین",
            team: "بارسلونا",
            birthDate: '24/6/1987',
            age: 31,
            birthPlace: 'روزاریو، آرژانتین',
            height: 1.7,
            weight: 72,
            teamNum: 10,
            nationalTeamNum: 10,
            site: 'http://www.leomessi.com'
        };
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Card
                    id='card'
                    image='https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2018/10/09/608bb4da-06db-47b1-ac42-55707ec47a66/p19054.png'
                    header={info.name}
                    meta={info.post}
                    description={
                        <div>
                            <Divider horizontal>اطلاعات</Divider>
                            ملیت: {info.nationality} <br/>
                            باشگاه: {info.team} <br/>
                            تاریخ تولد: {info.birthDate} <br/>
                            سن: {info.age} <br/>
                            محل تولد: {info.birthPlace} <br/>
                            قد: {info.height} <br/>
                            وزن: {info.weight} <br/>
                            شماره پیراهن در باشگاه: {info.teamNum} <br/>
                            شماره پیراهن در تیم ملی: {info.nationalTeamNum} <br/>
                            وب سایت رسمی: <a href={info.site}>{info.site}</a> <br/>

                        </div>
                    }


                />
            </DirectionProvider>
        );
    }
}
export default App;
