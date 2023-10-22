import { useSelector } from "react-redux"
import { useMovieVideoTrailer } from "../Hooks/useMovieVideoTrailer"



export const VideoBackground = ({movieId}) => {
    useMovieVideoTrailer(movieId)

    const trailer = useSelector(store => store.movies.videoTrailers)
    console.log(trailer)

    return (
        <div className="absolute">
            <iframe 
                className="w-screen aspect-video" 
                src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&controls=0&modestbranding=0"} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; modestbranding; picture-in-picture; web-share" 
                >
            </iframe>
        </div>
    )
}
