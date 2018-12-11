import React from 'react'
import {Embed} from "semantic-ui-react";

export class VideoFrame extends React.Component {

    render() {

        const {placeholder} = this.props,
            {url} = this.props,
            {active} = this.props


        return (
            <Embed
                autoplay={false}
                brandedUI
                color='red'
                hd={false}
                active={active}
                placeholder={placeholder}
                url={url}
                className={'video-frame'}
            />
        );
    }

}