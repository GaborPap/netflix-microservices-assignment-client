import React, {useContext, useEffect, useState} from 'react';
import {recommendContext} from "../contexts/RecommendContext";
import Recommendation from "../recommendation/Recommendation";
import Video from "./Video";
import RecommendationForm from "../recommendation/RecommendationForm";

function VideoDetails(props) {

    const videoId = props.match.params.videoId;

    const {rec, fetchData} = useContext(recommendContext);


    useEffect(() => {

        fetchData(videoId);
    }, []);


    return (
        rec.recommendations !== undefined ?
            <div>
                {console.log(rec.recommendations)}

                {rec.recommendations.map(recommendation => {
                    return <Recommendation recommendation={recommendation}/>
                })}

                <Video video={rec.video}/>
                <RecommendationForm videoId={rec.video.id}/>
                <a href="/">Back to index</a>
            </div>
            :
            <div>
                Loading
            </div>


    );

}

export default VideoDetails;