
import  { useEffect } from 'react'
import {API_OPTION} from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../redux/movieSlice'

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getTrendingMovies = async() => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTION);
            const json = await data.json();
            // console.log(json)
            dispatch(addTrendingMovies(json.results))
        }catch(e){
            console.log("error" + e)
        }
    }
    useEffect(()=>{
        getTrendingMovies()
    },[])
}

export default useTrendingMovies




