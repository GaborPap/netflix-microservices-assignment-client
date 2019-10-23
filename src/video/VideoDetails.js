import React, {useContext, useEffect, useState} from 'react';
import {recommendContext} from "../contexts/RecommendContext";
import Recommendation from "../recommendation/Recommendation";
import Video from "./Video";

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

            </div>
            :
            <div>
                Loading
            </div>


    );

}

export default VideoDetails;