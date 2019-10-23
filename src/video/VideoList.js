import React, {useContext} from 'react';
import {videoContext} from '../contexts/VideoContext'
import Video from "./Video";
import {Link} from "react-router-dom";

function VideoList(props) {

    const {video} = useContext(videoContext);

    return (
        video.url!=='' ?
        <div>
            {console.log(video)}
            {console.log(video.length)}
            {video.map(vid => { return (<Link to={"/video/"+vid.id}><Video width={300} height={200} video={vid} key={vid.id}/></Link>) } )}
        </div>
            :
            <div>loagind</div>
    );
}

export default VideoList;