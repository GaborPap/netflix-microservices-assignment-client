import React, {useContext} from 'react';
import RecommendationForm from "./RecommendationForm";
import Recommendation from "./Recommendation";
import axios from "axios";
import {recommendContext} from "../contexts/RecommendContext";

function Recommendations(props) {
    const {rec1} = props;

    const {dispatch} = useContext(recommendContext);

    const handleAction = (rating, comment, recId, type) => {
        let send = {
            rating: rating,
            comment: comment,
            videoId: rec1.video.id
        };

        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        };


        if (type === 'ADD') {
            axios.post("http://localhost:8762/videos/addRecommendation", send)
                .then(res => {
                    if (res.status === 200)
                        dispatch({type: "ADD_REC", rec: {rating, comment}})
                })
        } else if (type === 'DELETE') {
            axios.delete("http://localhost:8762/videos/deleteRec/" + recId)
                .then(res => {
                    if (res.status === 200)
                        dispatch({type: "DELETE_REC", recId: {recId}});
                })
        } else if (type === 'UPDATE') {
            if (comment.length > 1) {
                axios.put("http://localhost:8762/videos/updateRecommendation/" + recId, send)
                    .then(res => {
                        if (res.status === 200)
                            dispatch({type: "UPDATE", rec: {recId, rating, comment}});
                    })
            }
        }

    };

    return (
        <div>
            <RecommendationForm handleAction={handleAction}/>
            {
                rec1.recommendations !== null ?
                    rec1.recommendations.map(recommendation => {
                        return <Recommendation handleAction={handleAction} recommendation={recommendation}/>
                    })
                    :
                    <div>No recommendations yet!</div>
            }

        </div>
    );
}

export default Recommendations;