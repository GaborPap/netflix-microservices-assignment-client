import React, {useContext, useState} from 'react';
import {recommendContext} from "../contexts/RecommendContext";
import styled from "styled-components";
import Rating from '@material-ui/lab/Rating';

const Container = styled.div`
     width : 70%
          margin: 0 auto;;
     background : #9ac0d5;
     border : solid;
     border-color: black;
     border-radius: 10px;
       padding: 20px;
       margin-top: 5px;
       margin-bottom: 5px;
 
`;


function RecommendationForm(props) {
    const {handleAction} = props;
    const {rec, dispatch} = useContext(recommendContext);

    const [updated, setUpdated] = useState(false);
    const [rating, setRating] = useState("5");
    const [comment, setComment] = useState("");
    const [type1, setUpdate] = useState("ADD");
    const [recId, setId] = useState("-1");
    if (rec.recToUpdate!==undefined) {
        if (!updated) {
            setRating(rec.recToUpdate.recommendation.rating);
            setComment(rec.recToUpdate.recommendation.comment);
            setId(rec.recToUpdate.recommendation.id);
            setUpdated(true);
            setUpdate("UPDATE");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRating('');
        setComment('');
        setUpdated(false);
        dispatch({type: "ADD_REC_TO_UPDATE", rec: undefined});

        handleAction(rating,comment,recId, type1);
    };


    return (
        <Container>
        <form onSubmit={handleSubmit}>
            <Rating value={rating} onChange={(e) => setRating(e.target.value)}/>

        <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} required/>
        <input type="submit" value="Submit" />
        </form>
        </Container>
    );
}

export default RecommendationForm;