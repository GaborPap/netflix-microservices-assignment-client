import React, {useContext, useEffect} from 'react';
import {recommendContext} from "../contexts/RecommendContext";
import Video from "./Video";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import Recommendations from "../recommendation/Recommendations";
import Header from "./Header";


const Body = styled.body`
    height : 100%;
    background : #cfe0ea;
  
`;

const Container = styled.div`
    width : 50%;
    margin: 0 auto;
  
`;

const LinkCenter = styled.div`
    margin: 0  auto;
    text-align: center;
`;

function VideoDetails(props) {

    const videoId = props.match.params.videoId;

    const {rec, fetchData} = useContext(recommendContext);

    useEffect(() => {

        fetchData(videoId);
    }, []);


    return (
        rec.recommendations !== undefined ?
            <Body>

                <Container>
                    <Header headerTitle={"Details of" + rec.video.name}/>
                    <Video video={rec.video} width="100%" height={300}/>
                    <Recommendations rec1={rec}/>
                    <LinkCenter>
                        <Link to={"/"}><Button variant="contained" color="primary">Back to index</Button></Link>
                    </LinkCenter>
                </Container>
            </Body>
            :
            <div>
                Loading...
            </div>


    );

}

export default VideoDetails;