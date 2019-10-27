import React, {useContext} from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import {Button} from "@material-ui/core";
import {recommendContext} from "../contexts/RecommendContext";


const Body = styled.div`
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


function Recommendation(props) {
    const {recommendation, handleAction} = props;
    const {dispatch} = useContext(recommendContext);


    const deleteRecommendation = () => {
        handleAction('', '', recommendation.id, 'DELETE');

    };

    const updateRecommendation = () => {
        //   console.log("REC to update" + recommendation.comment);
        dispatch({type: "ADD_REC_TO_UPDATE", rec: {recommendation}});
        dispatch({type: "SET_UPDATE", updating: false});
        handleAction('', '', recommendation.id, 'UPDATE');

    };

    return (
        <Body>
            <div>
                Rating:
                <Rating value={recommendation.rating} readOnly/>
                <div>Comment: {recommendation.comment}</div>
                <Button onClick={deleteRecommendation}>Delete</Button>
                <Button onClick={updateRecommendation}>Update</Button>


            </div>
        </Body>
    );
}

export default Recommendation;