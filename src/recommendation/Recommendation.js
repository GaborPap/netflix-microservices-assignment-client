import React from 'react';

function Recommendation(props) {
    const {recommendation} = props;
    return (
        <div>
            <div>Rating: {recommendation.rating}</div>
            <div>Comment: {recommendation.comment}</div>

        </div>
    );
}

export default Recommendation;