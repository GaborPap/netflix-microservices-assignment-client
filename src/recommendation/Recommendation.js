import React, {useContext} from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import {Button} from "@material-ui/core";
import {recommendContext} from "../contexts/RecommendContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPen} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
     background : #9ac0d5;
     width: 100%;
     margin: 0 auto;
     border : solid;
     border-color: grey;
     border-radius: 10px;
     padding: 10px;
     margin-top: 10px;
     margin-bottom: 10px;
     display: flex;
`;

const RecContainer = styled.div`
        width:100%;
`;

const ButtonsContainer = styled.div`
        position:right;
        width:7%
`;

function Recommendation(props) {
    const {recommendation} = props;
    const {dispatch, handleAction} = useContext(recommendContext);

    const deleteRecommendation = () => {
        handleAction('', '', recommendation.id, 'DELETE');

    };

    const updateRecommendation = () => {
        dispatch({type: "ADD_REC_TO_UPDATE", rec: {recommendation}});
        dispatch({type: "SET_UPDATE", updating: false});
        handleAction('', '', recommendation.id, 'UPDATE');

    };

    return (
        <Container>
            <RecContainer>
                Rating:
                <Rating value={recommendation.rating} readOnly/>
                <div>Comment: {recommendation.comment}</div>
            </RecContainer>
            <ButtonsContainer>
                <Button onClick={deleteRecommendation}>
                    <FontAwesomeIcon icon={faTrash} color={"red"}/>
                </Button>
                <Button onClick={updateRecommendation}>
                    <FontAwesomeIcon icon={faPen} color={"orange"}/>
                </Button>
            </ButtonsContainer>


        </Container>
    );
}

export default Recommendation;