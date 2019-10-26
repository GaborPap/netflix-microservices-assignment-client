import React, {useContext} from 'react';
import RecommendationForm from "./RecommendationForm";
import Recommendation from "./Recommendation";
import axios from "axios";
import {recommendContext} from "../contexts/RecommendContext";

function Recommendations(props) {
    const {rec} = props;

    const {dispatch} = useContext(recommendContext);

    const handleAction = (rating, comment, recId, type) => {
        let url='';
        let send={};
        if (type==='ADD') {
            dispatch({type: "ADD_REC", rec: {rating, comment}})

            send = {
                rating: rating,
                comment: comment,
                videoId: rec.video.id
            };
            url = "http://localhost:8762/videos/addRecommendation";
            axios.defaults.headers.common = {
                "Content-Type": "application/json"
            };

            axios.post(url, send)
                .then(res => {
                    console.log(res);
                })
        }
        else if (type==='DELETE'){
            dispatch({type: "DELETE_REC", recId: {recId}});
            url = "http://localhost:8762/videos/deleteRec/"+recId;
            axios.defaults.headers.common = {
                "Content-Type": "application/json"
            };

            axios.delete(url)
                .then(res => {
                    console.log(res);
                })
        }





        };



    return (
        <div>

            <RecommendationForm videoId={rec.video.id} handleAction={handleAction}/>
            {
                rec.recommendations!==null ?
                    rec.recommendations.map(recommendation => {
                        return <Recommendation handleAction={handleAction} recommendation={recommendation}/>
                    })
                    :
                    <div>No recommendations yet!</div>

            }

        </div>
    );
}

export default Recommendations;