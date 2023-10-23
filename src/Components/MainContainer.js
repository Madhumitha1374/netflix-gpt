import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'
import nowPlayingMovies from '../redux/movieSlice'

export const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return
    
    const movie =  movies[Math.floor(Math.random() * movies.length)]
    // const{title, overview, id} = movies[0];
    const{title, overview, id} = movie;
    return (
        <div className='aspect-video w-screen h-screen bg-fuchsia-400'>
            <VideoTitle title = {title} description = {overview}/>
            <VideoBackground movieId = {id}/>
            
            
        </div>
    )
}