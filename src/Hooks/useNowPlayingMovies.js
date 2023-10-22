import  { useEffect } from 'react'
import {API_OPTION} from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../redux/movieSlice'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMoviesList = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
        const json = await data.json();
        // console.log(json)
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        getNowPlayingMoviesList()
    },[])
}

export default useNowPlayingMovies