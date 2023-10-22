import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import { MainContainer } from './MainContainer'

export const Browse = () => {
    useNowPlayingMovies()
    return (
        <div>
            <Header/>
            <MainContainer/>
        </div>
    )
}
