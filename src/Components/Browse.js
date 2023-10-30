import usePopularMovies from '../Hooks/usePopularMovies'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import { MainContainer } from './MainContainer'
import { SecondContainer } from './SecondContainer'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import useTrendingMovies from '../Hooks/useTrendingMovies'
import { GptSearch } from './GptSearch'
import { useSelector } from 'react-redux'

export const Browse = () => {
    const gpt = useSelector(store => store.gptSearch)
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    useTrendingMovies()
    return (
        <div>
            <Header/>
            {gpt.search ? < GptSearch/> : <><MainContainer/>
            <SecondContainer/>
            </>}
        </div>
    )
}
