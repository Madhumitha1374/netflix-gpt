
import  { useEffect } from 'react'
import {API_OPTION} from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../redux/movieSlice'

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async() => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTION);
            const json = await data.json();
            // console.log(json)
            dispatch(addTopRatedMovies(json.results))
        }catch(e){
            console.log("error" + e)
        }
    }
    useEffect(()=>{
        getTopRatedMovies()
    },[])
}

export default useTopRatedMovies