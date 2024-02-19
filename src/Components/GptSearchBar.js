import React, { useRef } from 'react'
import { API_OPTION, NETFLIX_BG } from '../Utils/constants'
import {LangConstants} from  '../Utils/language'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../Utils/openAi'
import { addSearchMoviesList } from '../redux/gptSlice'
import { SeachPageShimmerUi } from './SeachPageShimmerUi'

export const GptSearchBar = () => {
    const config = useSelector(store => store.config)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const getSearchMovie = async(name) =>{
        try{
            console.log(name)
            const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + name + '&include_adult=false&page=1', API_OPTION)
            const json = await data.json()
            // console.log(json)
            return json
        }catch(e){
            console.log("error" + e)
        }
    }

    const handleSearchButtonClick = async() => {
        const searchQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + "only give me names of 5 movies, comma seperated like the example result given aheaad. Example result : rrr, pushpa, leo, gadhar, bahubali"
        console.log(searchText.current.value)
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchQuery }],
            model: 'gpt-3.5-turbo',
        });
          
        console.log(gptResults.choices[0].message.content);
        const movieNamesList = gptResults.choices[0].message.content.split(",")
        const promiseArray = movieNamesList.map((name) => getSearchMovie(name));
        <SeachPageShimmerUi/>
        const tmdbSearchResults = await Promise.all(promiseArray)
        console.log(tmdbSearchResults)
        dispatch(addSearchMoviesList({movieNames : movieNamesList , moviesList : tmdbSearchResults}));
            

    }
    
    const language = config.lang
    return (
        <div>
            
            <form className='pt-[50%] md:pt-[15%]  flex justify-center w-full mb-10' onSubmit={(e) =>e.preventDefault() }>
                <input className='md:w-6/12 w-7/12 md:px-3 px-2 py-4 rounded-md mr-2' placeholder={LangConstants[language].searchBar} type='text' ref={searchText}/>
                <button className='md:w-2/12 w-3/12 bg-red-700 text-white px-1 rounded-md' onClick={handleSearchButtonClick} type='submit'>{LangConstants[language].searchBtn}</button>    
            </form>
            {/* <div>
            <img src={NETFLIX_BG}
                alt = "netflix-bg"
                className='bg-gradient-to-r from-blue-500 to-transparent'/>
            </div> */}
        </div>
    )
}

//