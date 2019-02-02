import React from "react";
import './Comment.css'
import Time from "../../utils/Time";

export default class Comment extends React.Component {


    render() {
        const {data} =this.props;
        // alert(JSON.stringify(data))
        return (
            <div className={'comment'}>

                <div className={'info-comment'}>
                    <div className={'profile-comment'}>
                        {data.user__username}
                    </div>
                    <div className={'date-comment'}>
                        {Time.daysFrom(data.created_date_time)}
                    </div>
                </div>
                <div className={'text-comment'}>
                    {data.text}
                </div>
            </div>
        );
    }


}