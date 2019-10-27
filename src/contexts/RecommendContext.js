import React, {createContext, useReducer} from 'react';
import axios from 'axios';
import recommendReducer from "../reducers/RecommendReducer";

export const recommendContext = createContext();


function RecommendContextProvider(props) {
    const intialState = [
        {
            video : {
                id : 0,
                name : '',
                url: ''
            },
            recommendations :[
                {
                    id : 0,
                    rating : 0,
                    comment: 'a',
                    videoId : 0
                }
            ],
            recToUpdate : { id : 0,
                rating : 0,
                comment: '',
                videoId : 0}

        }
    ];

    const [rec, dispatch] = useReducer(recommendReducer, intialState);

    const fetchData = (videoId) => {
        axios.get("http://localhost:8762/videos/video/"+videoId)
            .then(res => {
                const data = res.data;
                dispatch({type: "STORE_DATA", data})
            })
    };

    return (
        <recommendContext.Provider value={{rec, dispatch, fetchData}}>
            {props.children}
        </recommendContext.Provider>
    );
}

export default RecommendContextProvider;