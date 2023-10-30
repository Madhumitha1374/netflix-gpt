// import React, { useEffect } from 'react'
import { MOVIE_POSTER } from '../Utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faPlay} from '@fortawesome/free-solid-svg-icons'
import { useMovieVideoTrailer } from '../Hooks/useMovieVideoTrailer'
// import { useSelector } from 'react-redux'
import { useMovieDetails } from '../Hooks/useMovieDetails'
import { MovieDetails } from './MovieDetails'
// import { useMovieCast } from '../Hooks/useMovieCast'

import { faPlay, faCircleInfo} from '@fortawesome/free-solid-svg-icons'

export const MovieCard = ({movie}) => {
    const {poster_path} = movie
    useMovieVideoTrailer(movie.id)
    useMovieDetails(movie.id)
    // useMovieCast(movie.id)
    // const trailer = useSelector(store => store.movies.videoTrailers)
    const handleMovieCardClick = () => {
    //    <MovieDetails/>
    <div>
            <button className='bg-white text-black px-7 py-2 rounded-md mt-96 text-sm w-screen h-screen z-50'><FontAwesomeIcon icon={faPlay} className='text-black mr-1' />Play</button>
                
        </div>
    //    console.log("clicked")
                
    }
    
    
    // console.log(MOVIE_POSTER + posterPath)
    return (
        <div className='m-2 w-32 transform group
        transition duration-100 hover:scale-110 hover:border-4 border-white'>
             {/* <div>
                <button className="invisible group-hover:visible  
            absolute z-30 px-10 mt-40 text-black bg-white"> 
            <FontAwesomeIcon icon={faPlay} />Play
        </button> 
        </div> */}
        <img data-modal-target="popup-modal" data-modal-toggle="popup-modal" src = {MOVIE_POSTER + poster_path} alt = "poster" className='w-600' onClick={handleMovieCardClick}/>
        
        </div>
    )
}
