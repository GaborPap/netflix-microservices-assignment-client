import React, {useContext, useEffect} from 'react';
import {recommendContext} from "../contexts/RecommendContext";
import Recommendation from "../recommendation/Recommendation";
import Video from "./Video";
import RecommendationForm from "../recommendation/RecommendationForm";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import Recommendations from "../recommendation/Recommendations";


const Body = styled.body`
   width : 100%;
  background : #cfe0ea;
  
`;

const Container = styled.div`
   width : 50%;
  margin: 20px auto;
  
  
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
                {console.log(rec)}
                <Video video={rec.video} width="100%" height={300} />
               <Recommendations rec={rec}/>

                <Link to={"/"}><Button variant="contained" color="primary">Back to index</Button></Link>

            </Container>
            </Body>
            :
            <div>
                Loading
            </div>


    );

}

export default VideoDetails;