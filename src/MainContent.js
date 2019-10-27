import React from 'react';
import VideoList from "./video/VideoList";
import styled from 'styled-components';

const Body = styled.body`

  background: #cfe0ea;
   
  
`;

const Container = styled.div`
   width : 80%;
    margin: 0 auto;
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