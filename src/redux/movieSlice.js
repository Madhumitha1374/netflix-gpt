import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        videoTrailers : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        trendingMovies : null
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
        }
    }

})

export const{addNowPlayingMovies, addMovieVideoTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrendingMovies} = movieSlice.actions

export default movieSlice.reducer