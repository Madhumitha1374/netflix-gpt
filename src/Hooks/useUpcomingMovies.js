
import  { useEffect } from 'react'
import {API_OPTION} from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../redux/movieSlice'

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION);
        const json = await data.json();
        // console.log(json)
        dispatch(addUpcomingMovies(json.results))
    }
    useEffect(()=>{
        getUpcomingMovies()
    },[])
}

export default useUpcomingMovies




// 'https://api.themoviedb.org/3/movie/upcoming?page=1'