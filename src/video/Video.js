import React from 'react';
import ReactPlayer from 'react-player'

function Video(props) {
    return (
        <div>
            <ReactPlayer width={props.width} height={props.height} url={props.video.url}/>
            <div>{props.video.name}</div>
        </div>
    );
}

export default Video;