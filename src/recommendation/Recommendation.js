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
     border: solid grey;
     border-radius: 10px;
     padding: 10px;
     margin: 10px auto;
     display: flex;
`;

const RecContainer = styled.div`
        width:100%;
`;

const ButtonsContainer = styled.div`
        width:7%
`;

const ButtonHover = styled(Button)`
    &:hover {
     width: 110%;
    }
`

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
                <ButtonHover onClick={deleteRecommendation}>
                    <FontAwesomeIcon icon={faTrash} color={"red"}/>
                </ButtonHover>
                <ButtonHover onClick={updateRecommendation}>
                    <FontAwesomeIcon icon={faPen} color={"orange"}/>
                </ButtonHover>
            </ButtonsContainer>


        </Container>
    );
}

export default Recommendation;