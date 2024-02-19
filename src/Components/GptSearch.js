import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import { GptMovieSuggestions } from './GptMovieSuggestions'
import { NETFLIX_BG } from '../Utils/constants'

export const GptSearch = () => {
    return (
        <div>
            <div>
            <img 
            // src = "C:\Users\madhu\OneDrive\Desktop\madhu-bg"
            src={NETFLIX_BG}
                alt = "netflix-bg"
                className='bg-gradient-to-r from-blue-500 to-transparent fixed h-full w-full -z-10 object-cover'/>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}
