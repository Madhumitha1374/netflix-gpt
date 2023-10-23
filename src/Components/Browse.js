import usePopularMovies from '../Hooks/usePopularMovies'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import { MainContainer } from './MainContainer'
import { SecondContainer } from './SecondContainer'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import useTrendingMovies from '../Hooks/useTrendingMovies'

export const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    useTrendingMovies()
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondContainer/>
        </div>
    )
}
