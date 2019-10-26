import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';


const Container = styled.div`
     width : 74%;
     background : #9ac0d5;
     margin: 0 auto;
     border : solid;
     border-color: black;
     border-radius: 10px;


  
`;


const VideoContainer = styled.div`

margin 20px;
  
  
`;

const VideoName = styled.div`
     width : 100%;
   background : grey;
   margin-top: 10px;
   color: white;
  
`;


function Video(props) {
    return (
<Container>
            <VideoContainer>
                <ReactPlayer width={props.width} height={props.height} url={props.video.url}/>
                <VideoName>{props.video.name}</VideoName>
            </VideoContainer>
</Container>


    );
}

export default Video;