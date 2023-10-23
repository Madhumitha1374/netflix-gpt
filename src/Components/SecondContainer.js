import React from 'react'
import { MovieContainer } from './MovieContainer'
import { useSelector } from 'react-redux'

export const SecondContainer = () => {
    const movies = useSelector(store => store.movies)
    // console.log(movies.nowPlayingMovies, "&&&&&&&&&")
    return  movies && (
        <div className='bg-black text-white p-3'>
            <div className='-mt-52 z-60 p-7'>
                <MovieContainer title = {"Now Playing"} movie = {movies?.nowPlayingMovies}/>
                <MovieContainer title = {"Popular"} movie = {movies?.popularMovies}/>
                <MovieContainer title = {"Top Rated"} movie = {movies?.topRatedMovies}/>
                <MovieContainer title = {"Upcoming"} movie = {movies?.upcomingMovies}/>
                <MovieContainer title = {"Trending"} movie = {movies?.trendingMovies}/>

            </div>
        </div>
    )
}
