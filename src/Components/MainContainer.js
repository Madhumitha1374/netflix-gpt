import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'
import { MainPageShimmerUi } from './MainPageShimmerUi'

export const MainContainer = () => {
    
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return <MainPageShimmerUi/>
    
    const movie =  movies[Math.floor(Math.random() * movies.length)]
    const{title, overview, id} = movie;
    return (
        <div className='md:aspect-video w-screen md:h-screen overflow-x-hidden'>
            <VideoTitle title = {title} description = {overview}/>
            <VideoBackground movieId = {id}/>
            
            
        </div>
    )
}
