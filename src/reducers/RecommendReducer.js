import Recommendation from "../recommendation/Recommendation";

const recommendReducer = (state, action) => {
    switch (action.type) {
        case "STORE_DATA":
            return {
                video: action.data.video,
                recommendations: action.data.recommendations
            };
        case "ADD_REC":
            return {
                ...state,
                recommendations: [...state.recommendations,  {rating : action.rec.rating  , comment: action.rec.comment}]
            };

        case "DELETE_REC":
            return {
                ...state,
                recommendations : state.recommendations.filter(recommendation => recommendation.id!==action.recId.recId)
            };
        default:
            return state;

    }
};

export default recommendReducer;