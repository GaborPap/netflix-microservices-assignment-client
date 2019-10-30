import React, {useContext} from 'react';
import {videoContext} from '../contexts/VideoContext'
import Video from "./Video";
import {Link} from "react-router-dom";
import Header from "./Header";
import Grid from '@material-ui/core/Grid';



function VideoList() {

    const {video} = useContext(videoContext);

    return (
        video.url !== '' ?
            <div><Header headerTitle="Video list"/>
                <Grid container spacing={4}>

                    {video.map(vid => {
                        return (<Grid item xs={4}><Link to={"/video/" + vid.id} key={vid.id}><Video width="100%" height="100%"
                                                                                                    video={vid}/></Link></Grid>)
                    })}

               </Grid>


            </div>
            :
            <div>Loading...</div>
    );
}

export default VideoList;