
import React, { useEffect } from 'react'
import { API_OPTION } from '../Utils/constants'
import { useDispatch } from 'react-redux';
import { addMovieDetails } from '../redux/movieSlice';

export const useMovieDetails = (movieId) => {
    const dispatch = useDispatch();
    // console.log(movieId)
    const getMovieDetails = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId + '?api_key=33fbe641cd0cb392e348ccbc0acc640d&append_to_response=credits', API_OPTION)
        const json = await data.json()
        // console.log(json);
        dispatch(addMovieDetails(json))

    }

    useEffect(()=>{
        getMovieDetails()
    },[])
}
 
