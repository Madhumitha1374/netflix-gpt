import React, { useEffect } from 'react'
import Header from './Header'
import {API_OPTION} from '../Utils/constants'

export const Browse = () => {
    const getNowPlayingMoviesList = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
        const json = await data.json();
        console.log(json)
    }
    useEffect(()=>{
        getNowPlayingMoviesList()
    },[])
    return (
        <div>
            <Header/>
        </div>
    )
}
