import React, {useContext} from 'react';
import {videoContext} from '../contexts/VideoContext'
import Video from "./Video";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import Header from "./Header";
import Grid from '@material-ui/core/Grid';

const Container = styled.div`
     
  width: 100%;
  padding : 0;
  margin : 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30% 40% 30%;
  height: 100vh; 
  
`;


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