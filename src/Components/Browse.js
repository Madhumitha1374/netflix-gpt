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
import { MainPageShimmerUi } from './MainPageShimmerUi'
import { useEffect, useState } from 'react'

export const Browse = () => {
    // const [showComponent, setShowComponent] = useState(false)
    const gpt = useSelector(store => store.gptSearch)
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    useTrendingMovies()

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setShowComponent(!showComponent)
    //     },5000)
    // },[])
    return (
        <div>
            {/* {!showComponent && <div className='absolute'><div className='h-full absolute'>
                
                <iframe 
                    className="w-screen h-screen bg-cover " 
                    src="https://www.youtube.com/embed/6Jg_rkKtJgo?si=cJR6f0pY6n8LO3pU&mute=1&controls=0&autoplay=1&modestbranding=0&amp;controls=0" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                >
                </iframe>
            </div>
            <div className='bg-white h-50 border-4 border-pink-500 z-10 w-full  p-[10%] mb-[10%]'>
            </div>
            </div>
            } */}
            {/* {showComponent && <div> */}
            <Header/>
            {gpt.search ? < GptSearch/> : <><MainContainer/>
            <SecondContainer/>
            </>} 
         {/* </div>} */}
            
        </div>
        
    )
}
