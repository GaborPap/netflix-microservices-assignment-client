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

    const handleAction = (rating, comment, recId, type, rec1) => {
        let send = {
            rating: rating,
            comment: comment,
            videoId: rec1
        };

        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        };


        if (type === 'ADD') {
            axios.post("http://localhost:8762/videos/addRecommendation", send)
                .then(res => {
                    if (res.status === 200) {
                        const recId = res.data.id;
                        dispatch({type: "ADD_REC", rec: {rating, comment, recId}})
                    }
                })
        } else if (type === 'DELETE') {
            axios.delete("http://localhost:8762/videos/deleteRec/" + recId)
                .then(res => {
                    if (res.status === 200)
                        dispatch({type: "DELETE_REC", recId: {recId}});
                })
        } else if (type === 'UPDATE') {
            if (comment.length > 1) {
                axios.put("http://localhost:8762/videos/updateRecommendation/" + recId, send)
                    .then(res => {
                        if (res.status === 200)
                            dispatch({type: "UPDATE", rec: {recId, rating, comment}});
                    })
            }
        }
    };

    return (
        <recommendContext.Provider value={{rec, dispatch, fetchData, handleAction}}>
            {props.children}
        </recommendContext.Provider>
    );
}

export default RecommendContextProvider;