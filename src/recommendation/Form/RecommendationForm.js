import React, {useContext, useState} from 'react';
import {recommendContext} from "../../contexts/RecommendContext";
import styled from "styled-components";
import Rating from '@material-ui/lab/Rating';
import FormHeader from "./FormHeader";
import {Input} from "@material-ui/core";

const Container = styled.div`

     width : 74%
     margin: 0 auto;;
     background : #9ac0d5;
     border : solid;
     border-color: black;
     border-radius: 10px;
     padding: 20px;
     margin-top: 20px;
     margin-bottom: 20px;
`;

const FromFieldContainer = styled.div`
        width:90%;
`;

const FormField = styled.div`
        display: flex;
`;

const Label = styled.div`
    width: 85px;
    font-weight : bold;
    margin-bottom: 5px;
    margin-right:5px;
    text-align: right;
`;

const SubmitButtonContainer = styled.div`
        text-align: right;
        margin-top: -50px;
        position:right;

`;

const InputField = styled(Input)`
        margin-bottom: 30px;
        width : 100%;
        background: white;

`;


function RecommendationForm(props) {

    const {rec, dispatch, handleAction} = useContext(recommendContext);

    const [updated, setUpdated] = useState(false);
    const [rating, setRating] = useState("5");
    const [comment, setComment] = useState("");
    const [type1, setUpdate] = useState("ADD");
    const [recId, setId] = useState("-1");
    if (rec.recToUpdate !== undefined) {
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

        handleAction(rating, comment, recId, type1);
    };
    const formHeaderText = !updated ? "Add new comment" : "Update comment";

    return (

        <Container>
            <FormHeader formLabel={formHeaderText}/>
            <hr/>
            <form onSubmit={handleSubmit}>
                <FromFieldContainer>
                    <FormField>
                        <Label>Rating:</Label>
                        <div><Rating value={rating} onChange={(e) => setRating(e.target.value)}/>
                        </div>
                    </FormField>
                    <FormField>
                        <Label> Comment:</Label>

                        <div><InputField fullWidth={true} type="text" placeholder="Comment" value={comment}
                                         onChange={(e) => setComment(e.target.value)}
                                         required/></div>
                    </FormField>
                </FromFieldContainer>
                <SubmitButtonContainer><input type="submit" value="Submit"/></SubmitButtonContainer>
            </form>
        </Container>
    );
}

export default RecommendationForm;