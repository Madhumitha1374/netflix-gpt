import React from 'react'
import { MovieContainer } from './MovieContainer'
import { useSelector } from 'react-redux'
// import { MovieDetails } from './MovieDetails'

export const SecondContainer = () => {
    const movies = useSelector(store => store.movies)
    // console.log(movies.nowPlayingMovies, "&&&&&&&&&")
    return  movies && (
        <div className='bg-black text-white p-3 '>
            <div className='sm:-mt-52 md:-mt-52  z-60 p-7 '>
                <MovieContainer title = {"Now Playing"} movie = {movies?.nowPlayingMovies}/>
                <MovieContainer title = {"Trending"} movie = {movies?.trendingMovies}/>
                <MovieContainer title = {"Popular"} movie = {movies?.popularMovies}/>
                <MovieContainer title = {"Top Rated"} movie = {movies?.topRatedMovies}/>
                <MovieContainer title = {"Upcoming"} movie = {movies?.upcomingMovies}/>
                {movies?.favouriteMovies.length !==0 ?
                    <MovieContainer title = {"Your Favourite Movies"} movie = {movies?.favouriteMovies}/> : null }
            </div>
        </div>
    )
}
