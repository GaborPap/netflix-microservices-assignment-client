import React from 'react';
import RecommendationForm from "./Form/RecommendationForm";
import Recommendation from "./Recommendation";
import styled from 'styled-components';


const NoRecommenDations = styled.div`
        background : red;
`;

const Container = styled.div`
     background : #9ac0d5;
     width: 74%;
     margin: 0 auto;
     border : solid;
     border-color: grey;
     border-radius: 10px;
     padding: 20px;
     margin-top: 5px;
     margin-bottom: 5px;
`;

const RecommendationLabel = styled.div`
        text-align : center;
        font-size: 2em;
        font-weight: bold;
`;

const Hr = styled.hr`
    margin-bottom: 20px;
`;

function Recommendations(props) {
    const {rec1} = props;

    return (
        <React.Fragment>
            <RecommendationForm/>
            <Container>
                <RecommendationLabel>Recommendations</RecommendationLabel>
                <Hr/>
                {
                    rec1.recommendations !== null ?
                        rec1.recommendations.map(recommendation => {
                            return <Recommendation recommendation={recommendation}/>
                        })
                        :
                        <NoRecommenDations>No recommendations yet!</NoRecommenDations>
                }
            </Container>
        </React.Fragment>
    );
}

export default Recommendations;