import React from 'react'
import {Embed} from "semantic-ui-react";

export class VideoFrame extends React.Component {

    render() {

        const {placeholder} = this.props;
        const {url} = this.props;

        return (
            <Embed
                autoplay={false}
                brandedUI
                color='red'
                hd={false}
                placeholder={placeholder}
                url={"http://bing.com"}
                className={'video-frame'}
            />
        );
    }

}