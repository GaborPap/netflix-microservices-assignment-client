const recommendReducer = (state, action) => {
    switch (action.type) {
        case "STORE_DATA":
            return {
                video: action.data.video,
                recommendations: action.data.recommendations
            };

        default:
            return state;

    }
};

export default recommendReducer;