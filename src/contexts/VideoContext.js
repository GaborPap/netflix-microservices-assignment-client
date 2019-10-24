import React, {useReducer, createContext, useEffect} from 'react';
import axios from 'axios';
import videoReducer from '../reducers/VideoReducer'

export const videoContext = createContext();

export default function VideoContextProvider(props){
    const initialState = [
        {
            id : 0,
            name : '',
            url: ''
        }
     ]


    const [video, dispatch] = useReducer(videoReducer, initialState);

    useEffect( () => {
    fetchData();
    }, [])

    const fetchData = () => {
    axios.get("http://localhost:8762/videos/allVideos")
        .then(res => {
            const data = res.data;
            dispatch({type: "STORE_DATA", data})
        })
    };

    return (
        <videoContext.Provider value={{video, dispatch, fetchData}}>
            {props.children}
            </videoContext.Provider>
    )
}
