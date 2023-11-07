import React, { useRef } from 'react'
import { MovieCard } from './MovieCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight ,faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export const MovieContainer = ({title, movie}) => {
    const ref = useRef(null)
    // console.log(movie)
    // if(movie.length === 0) return null

    

    return (
        <div className='mb-6'>
            <h1 className='font-bold text-lg ml-2'>{title}</h1>
            <div className='flex'>
                {/* {movie.length > 9 &&
                    <FontAwesomeIcon icon={faChevronLeft} beatFade  className='mt-24 font-bold text-lg cursor-pointer p-1'/>}
             */}
                    <div className='flex overflow-x-scroll no-scrollbar'>
                    <div className='flex' ref = {ref}>
                        {movie?.map((m) => <MovieCard movie = {m} key = {m.id}/>)}
                    </div>
                    </div>
                    {/* {movie.length > 9 &&
                    <FontAwesomeIcon icon={faChevronRight} beatFade className='mt-24 font-bold text-lg cursor-pointer p-1'/>} */}
            </div>
        </div>
    )
}
