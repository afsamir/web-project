import React from "react";
import {Button, Icon} from "semantic-ui-react";
import Axios from "axios";
import BackUrls from "../../utils/BackUrls";
import Auth from "../../utils/Auth";

export default class LikeButton extends React.Component{

    constructor(props) {
        super(props);

    }

    likeStatus(){
        Axios.get(BackUrls.likeStatus(this)).then(re => this)

    }


    likeRequest(slug){
        if (!Auth.getProfile()){
            alert('ابندا به حساب خود وارد شوید.')
            return;
        }
        let data = {};
        data['token'] = Auth.getToken();
        data['slug'] = slug;
        Axios.get(BackUrls.sendLike(this), data).then()
    }

    render() {
        return (
                <Button animated='vertical' onClick={this.likeRequest.apply(this.props.slug)}>
                    <Button.Content hidden>دنبال کردن</Button.Content>
                    <Button.Content visible>
                        <Icon name='red like' />
                    </Button.Content>
                </Button>
        );
    }
}