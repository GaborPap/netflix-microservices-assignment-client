const recommendReducer = (state, action) => {
    switch (action.type) {
        case "STORE_DATA":
            return {
                video: action.data.video,
                recommendations: action.data.recommendations
            };
        case "ADD_REC":
            let recommendations = state.recommendations;
            if (state.recommendations === null) {
                recommendations = [];
            }

            return {
                ...state,
                recommendations: [...recommendations, {
                    id: action.rec.recId,
                    rating: action.rec.rating,
                    comment: action.rec.comment
                }]
            };


        case "DELETE_REC":
            return {
                ...state,
                recommendations: state.recommendations.filter(recommendation => recommendation.id !== action.recId.recId)
            };

        case "ADD_REC_TO_UPDATE":
            return {
                ...state,
                recToUpdate: action.rec
            };
        case "UPDATE":
            return {
                ...state,
                recommendations: state.recommendations.map(
                    (content) => content.id === action.rec.recId ? {
                            ...content,
                            rating: action.rec.rating,
                            comment: action.rec.comment
                        }
                        : content
                )
            };

        default:
            return state;

    }
};

export default recommendReducer;