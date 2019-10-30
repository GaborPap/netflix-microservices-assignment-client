import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';


const Container = styled.div`
     width : 74%;
     background : #9ac0d5;
     margin: 0 auto;
     border: solid black;
     border-radius: 10px;
           &:hover {
      box-shadow: 5px 5px 5px 5px #999999;
      }
`;


const VideoContainer = styled.div`
      margin: 20px;

`;

const VideoName = styled.div`
     width : 100%;

     margin-top: 10px;
     color: white;
`;


function Video(props) {
    return (
        <Container>
            <VideoContainer>
                <ReactPlayer
                    width={props.width}
                    height={props.height}
                    url={props.video.url}
                    controls={true}
                />
                <VideoName>{props.video.name}</VideoName>
            </VideoContainer>
        </Container>
    );
}

export default Video;