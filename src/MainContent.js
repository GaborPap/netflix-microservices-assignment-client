import React from 'react';
import VideoList from "./video/VideoList";
import styled from 'styled-components';

const Body = styled.body`
  
  background: #DDD;
   
  
`;

const Container = styled.div`
   width : 80%;
    margin-top: 20 px; 
`;


function MainContent(props) {
    return (
        <Body>
            <Container>
                <VideoList/>
            </Container>
        </Body>
    );
}

export default MainContent;