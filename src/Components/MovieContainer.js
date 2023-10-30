import React, { useRef } from 'react'
import { MovieCard } from './MovieCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight ,faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export const MovieContainer = ({title, movie}) => {
    // console.log(movie, "*****")
    const ref = useRef(null)

    return (
        <div className='mb-6'>
            <h1 className='font-bold text-lg ml-2'>{title}</h1>
            <div className='flex'>
                    <FontAwesomeIcon icon={faChevronLeft} beatFade  className='mt-24 font-bold text-lg cursor-pointer p-1'/>
            
                    <div className='flex overflow-x-scroll no-scrollbar'>
                    <div className='flex' ref = {ref}>
                        {movie?.map((m) => <MovieCard movie = {m} key = {m.id}/>)}
                    </div>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} beatFade className='mt-24 font-bold text-lg cursor-pointer p-1'/>
            </div>
        </div>
    )
}
