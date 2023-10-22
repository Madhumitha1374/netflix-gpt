
import React, { useEffect } from 'react'
import { API_OPTION } from '../Utils/constants'
import { addMovieVideoTrailer } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

export const useMovieVideoTrailer = (movieId) => {
    const dispatch = useDispatch();
    // console.log(movieId)
    const getVideoTrailer = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTION)
        const json = await data.json()
        // console.log(json.results);
        const filteredVideos = json.results.filter(v => v.type === "Trailer");
        const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0]
        // console.log(trailer)
        dispatch(addMovieVideoTrailer(trailer))

    }

    useEffect(()=>{
        getVideoTrailer()
    },[])
}
