import React, {useContext, useState} from 'react';
import axios from 'axios';
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
    const {videoId, handleAction} = props;
    const [type1, setUpdate] = useState("ADD")


    const [rating, setRating] = useState("5");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setRating('');
        setComment('');

        handleAction(rating,comment, '', type1);
    };


    return (
        <Container>
        <form onSubmit={handleSubmit}>
            <Rating value={rating} onChange={(e) => setRating(e.target.value)}/>

        <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} required/>
        <input type="submit" value="Add comment" />
        </form>
        </Container>
    );
}

export default RecommendationForm;