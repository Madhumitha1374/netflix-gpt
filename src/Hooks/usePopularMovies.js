import  { useEffect } from 'react'
import {API_OPTION} from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../redux/movieSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getLatestMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1.org/3/tv/latest', API_OPTION);
        const json = await data.json();
        // console.log(json)
        dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        getLatestMovies()
    },[])
}

export default usePopularMovies