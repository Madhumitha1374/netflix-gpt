import { useSelector } from "react-redux"
import { useMovieVideoTrailer } from "../Hooks/useMovieVideoTrailer"



export const VideoBackground = ({movieId}) => {
    useMovieVideoTrailer(movieId)

    const trailer = useSelector(store => store.movies.videoTrailers)
    // console.log(trailer)

    return (
        <div >
            <iframe 
                className="w-screen h-screen bg-cover" 
                src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&controls=0&modestbranding=0&playlist=" + trailer?.key + "&loop=1"} 
                title="YouTube video player" 
                // allowFullScreen="true" 
                // webkitAllowFullScreen="true" 
                // mozallowfullscreen="true"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; modestbranding; picture-in-picture; web-share" 
                >
            </iframe>
        </div>
    )
}
