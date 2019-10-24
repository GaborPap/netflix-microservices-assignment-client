import React, {useContext, useState} from 'react';
import axios from 'axios';
import {recommendContext} from "../contexts/RecommendContext";

function RecommendationForm(props) {
    const {videoId} = props;

    const {dispatch} = useContext(recommendContext);
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setRating('');
        setComment('');
        dispatch({type:"ADD_REC", rec : {rating, comment}})

        let send = {
            rating: rating,
            comment: comment,
            videoId: videoId
        };

        console.log(send);
        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        };

        axios.post("http://localhost:8762/videos/addRecommendation", send)
            .then(res => {
                console.log(res);
            })
    };


    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required/>
        <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} required/>
        <input type="submit" value="Add comment" />
        </form>
    );
}

export default RecommendationForm;