import React from 'react'
import { MOVIE_POSTER } from '../Utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPlay} from '@fortawesome/free-solid-svg-icons'

export const MovieCard = ({posterPath}) => {
    
    // console.log(MOVIE_POSTER + posterPath)
    return (
        <div className='m-2 w-32 transform group z-0
        transition duration-100 hover:scale-110 hover:border-4 border-white'>
            <div>
                {/* <button className='bg-white text-black invisible group-hover:visible absolute z-50'>play</button> */}
            <button className="invisible group-hover:visible  
            absolute z-30 px-10 mt-40 text-black bg-white"> 
            <FontAwesomeIcon icon={faPlay} />Play
        </button> 
        </div>
        <img src = {MOVIE_POSTER + posterPath} alt = "poster" className='w-600'/>
        
        </div>
    )
}
