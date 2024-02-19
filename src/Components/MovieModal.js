
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faHeart} from '@fortawesome/free-solid-svg-icons'
// import { useMovieDetails } from '../Hooks/useMovieDetails'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, addToFavoriteMovies } from '../redux/movieSlice'
import { useMovieDetails } from '../Hooks/useMovieDetails'
import { useMovieModalVideoTrailer } from '../Hooks/useMovieModalVideoTrailer'

export const MovieModal = ({clickEvent,id, title, overview, poster_path}) => {
    useMovieDetails(id)
    useMovieModalVideoTrailer(id)
    const dispatch = useDispatch()
    const movies = useSelector(store => store.movies)
    const trailer = movies.modalVideoTrailer
    const handleCloseEvent = () => {
        clickEvent()
    }
    const handleAddtoFav = () => {
        console.log("clicked")
        dispatch(addToFavorite())
        const isFavourite = movies.isFavourite
        const favMovies = {
            id,
            title,
            overview,
            isFavourite,
            poster_path
        }
        dispatch(addToFavoriteMovies(favMovies))
    }
    return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden no-scrollbar overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:mx-20 mx-15"
          >
            
            <div className="relative w-auto my-6 mx-auto md:mt-[10%] mt-[10%] md:p-8 p-2">
            <div className="flex items-start justify-between p-5  rounded-t -mt-10">
                  <button
                    className="p-1 ml-auto border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    // onClick={() => setShowModal(false)}
                    onClick={handleCloseEvent}
                  >
                    <span className=" text-white  h-6 w-6 text-5xl block outline-none focus:outline-none mb-2">
                      ×
                    </span>
                  </button>
                  
                </div>
              {/*content*/}
              <div className=" overflow-y-hidden bg-gradient-to-b  from-black  border-2 border-white p-6 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*header*/}
                
                <iframe 
                className="h-screen bg-cover md:-mt-[18%] -mt-[90%]" 
                src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&controls=0&modestbranding=0&playlist=" + trailer?.key + "&loop=1"} 
                title="YouTube video player" 
                // allowFullScreen="true" 
                // webkitAllowFullScreen="true" 
                // mozallowfullscreen="true"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; modestbranding; picture-in-picture; web-share" 
                >
                </iframe>

                <div className='-mt-[55%] '>
                {/* <div className="flex items-start justify-between p-5  rounded-t -mt-10">
                  <button
                    className="p-1 ml-auto border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    // onClick={() => setShowModal(false)}
                    onClick={handleCloseEvent}
                  >
                    <span className=" text-white  h-6 w-6 text-5xl block outline-none focus:outline-none mb-2">
                      ×
                    </span>
                  </button>
                  
                </div> */}
                {/*body*/}
                <div className='mx-3 p-5 md:mb-6 mb-0 -mt-[90%] md:-mt-0'>
                    <h1 className='md:font-extrabold font-bold sm:font-extrabold md:text-5xl text-xl mb-3 w-8/12'>{title}</h1>
                    <p className='hidden md:inline-block text-sm w-4/12 font-semibold max-h-36 overflow-hidden'>{overview}</p>
                    <div className='flex text-sm w-4/12 font-semibold '>
                      <p className='hidden md:inline-block'>Genres : {" "}</p>
                      {/* {movies.movieDetails.genres.map((g) => <p>{g.name}<span>,</span></p>)} */}
                      
                    </div>
                    <div>
                        <button className='bg-white text-black px-7 py-2 rounded-md mt-4 text-sm'><FontAwesomeIcon icon={faPlay} className='text-black mr-1' />Play</button>
                        <button className='bg-slate-300 hidden md:inline-block bg-opacity-30  text-white px-7 py-2 ml-2 rounded-md mt-4 text-sm font-semibold'
                        onClick={handleAddtoFav}>
                            <FontAwesomeIcon icon={faHeart} style={{color: "#bfc0cf",}} className='mr-2' />
                            {/* {isFavourite ?'Added to favourites' : 'Add to favourites'} */}
                            Add to favourites
                        </button>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}
                </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
