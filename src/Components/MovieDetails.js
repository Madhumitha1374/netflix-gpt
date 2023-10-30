import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPlay, faCircleInfo} from '@fortawesome/free-solid-svg-icons'


export const MovieDetails = () => {
    console.log("Movie Details")
    const movies = useSelector(store => store.movies)
    // const {key} = movies.videoTrailers
    // const {genres, overview, credits, runtime} = movies.movieDetails
    // console.log(genres)
    return (
        <div>
            <button className='bg-white text-black px-7 py-2 rounded-md mt-96 text-sm w-screen h-screen z-50'><FontAwesomeIcon icon={faPlay} className='text-black mr-1' />Play</button>
                
        </div>
    )
}

