// import React, { useEffect } from 'react'
import React, {useState} from 'react';
import { MOVIE_POSTER } from '../Utils/constants'
import { MovieModal } from './MovieModal';

export const MovieCard = ({movie}) => {
    const [showModal, setShowModal] = useState(false);
    
    const {poster_path,title,overview, id} = movie

    if(!poster_path) return null

    const handleCardInfoClick = () => {
      setShowModal(true)
    }
    const handleCloseModal = () => {
      setShowModal(false)
    }

    return (
        <div className='m-2 w-32 '>
        <img src = {MOVIE_POSTER + poster_path} alt = "poster" className='hover:border-4 border-white w-600' onClick={handleCardInfoClick}
        />
      
      {showModal ? (
        <MovieModal clickEvent = {handleCloseModal} id = {id} title = {title} overview = {overview} poster_path = {poster_path}/>
      ) : null}
        </div>
    )
}

//max-w-3xl
//border-t border-solid border-blueGray-200