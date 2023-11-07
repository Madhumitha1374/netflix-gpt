import React from 'react'
import { useSelector } from 'react-redux'
import { MovieContainer } from './MovieContainer'
import { SeachPageShimmerUi } from './SeachPageShimmerUi'

export const GptMovieSuggestions = () => {
    const {movieNames, moviesList} = useSelector(store => store.gptSearch)
    if(!movieNames) return null
    return (
        <div className='bg-opacity-60 bg-black text-white mx-[12%] px-[3%] py-[2%]'>
            {movieNames.map((movieName, index) => <MovieContainer title={movieName} key={movieName} movie={moviesList[index].results}/>)}
        </div>
    )
}
