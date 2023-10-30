
import React, { useEffect } from 'react'
import { API_OPTION } from '../Utils/constants'
import { useDispatch } from 'react-redux';

export const useMovieCast = (movieId) => {
    const dispatch = useDispatch();
    // console.log(movieId)
    const getMovieCast = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId + '?api_key=33fbe641cd0cb392e348ccbc0acc640d&append_to_response=credits', API_OPTION)
        const json = await data.json()
        // console.log(json);
        // dispatch(addMovieVideoTrailer(trailer))

    }

    useEffect(()=>{
        getMovieCast()
    },[])
}
 
