import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        videoTrailers : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        trendingMovies : null,
        movieDetails : null,
        movieCast : null,
        isFavourite : false,
        favouriteMovies : [],
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieVideoTrailer : (state, action) => {
            state.videoTrailers = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies :(state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrendingMovies : (state, action) => {
            state.trendingMovies = action.payload
        },
        addMovieDetails : (state, action) => {
            state.movieDetails = action.payload
        },
        addMovieCast : (state, action) => {
            state.movieCast = action.payload
        },
        addToFavorite : (state) => {
            state.isFavourite = !state.isFavourite
        },
        addToFavoriteMovies : (state, action) => {
            state.favouriteMovies.push(action.payload)
        }
    }

})

export const{addNowPlayingMovies, addMovieVideoTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrendingMovies, addMovieDetails,addMovieCast, addToFavorite, addToFavoriteMovies} = movieSlice.actions

export default movieSlice.reducer