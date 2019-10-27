import React, {useContext} from 'react';
import RecommendationForm from "./Form/RecommendationForm";
import Recommendation from "./Recommendation";
import axios from "axios";
import {recommendContext} from "../contexts/RecommendContext";
import styled from 'styled-components';


const NoRecommenDations = styled.div`
        background : red;
`

const Container = styled.div`
     background : #9ac0d5;
     width: 70%;
     margin: 0 auto;
     border : solid;
     border-color: grey;
     border-radius: 10px;
     padding: 20px;
     margin-top: 5px;
     margin-bottom: 5px;
`;



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
                    if (res.status === 200) {
                        const recId = res.data.id;
                        dispatch({type: "ADD_REC", rec: {rating, comment, recId}})
                    }
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

        <Container>
            <RecommendationForm handleAction={handleAction}/>

            <hr/>
            {
                rec1.recommendations !== null ?
                    rec1.recommendations.map(recommendation => {
                        return <Recommendation handleAction={handleAction} recommendation={recommendation}/>
                    })
                    :
                    <NoRecommenDations>No recommendations yet!</NoRecommenDations>
            }

        </Container>

    );
}

export default Recommendations;