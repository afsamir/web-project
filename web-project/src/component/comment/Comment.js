import React from "react";
import './Comment.css'
import Time from "../../utils/Time";

export default class Comment extends React.Component {


    render() {
        const {data} =this.props;
        // alert(JSON.stringify(data))
        return (
            <div className={'comment'}>

                <div className={'info'}>
                    <div className={'profile'}>
                        {data.user__username}
                    </div>
                    <div className={'date'}>
                        {Time.daysFrom(data.created_date_time)}
                    </div>
                </div>
                <div className={'text'}>
                    {data.text}
                </div>
            </div>
        );
    }


}