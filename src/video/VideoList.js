import React, {useContext} from 'react';
import {videoContext} from '../contexts/VideoContext'
import Video from "./Video";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import Header from "./Header";

const Container = styled.div`
     
  width: 100%;
  padding : 0;
    margin : 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30% 40% 30%;
  height: 100vh; 
  
`;



function VideoList(props) {

    const {video} = useContext(videoContext);

    return (
        video.url!=='' ?
            <div><Header headerTitle="Video list"/>
            <Container>

            {video.map(vid => { return (<Link to={"/video/"+vid.id}  key={vid.id}><Video width="100%" height="100%" video={vid}/></Link>) } )}
        </Container>
            </div>
            :
            <div>loagind</div>
    );
}

export default VideoList;