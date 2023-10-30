import React from 'react'
import { NETFLIX_BG } from '../Utils/constants'
import {LangConstants} from  '../Utils/language'
import { useSelector } from 'react-redux'

export const GptSearchBar = () => {
    const config = useSelector(store => store.config)
    
    const language = config.lang
    return (
        <div>
            <form className='pt-[15%] absolute flex justify-center w-full'>
                <input className='w-6/12 px-3 py-4 rounded-md mr-2' placeholder={LangConstants[language].searchBar} type='text'/>
                <button className='w-2/12 bg-red-700 text-white px-1 rounded-md'>{LangConstants[language].searchBtn}</button>    
            </form>
            <div>
            <img src={NETFLIX_BG}
                alt = "netflix-bg"
                className='bg-gradient-to-r from-blue-500 to-transparent'/>
            </div>
        </div>
    )
}
