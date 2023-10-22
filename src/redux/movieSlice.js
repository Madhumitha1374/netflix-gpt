import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        videoTrailers : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieVideoTrailer : (state, action) => {
            state.videoTrailers = action.payload
        }
    }

})

export const{addNowPlayingMovies, addMovieVideoTrailer} = movieSlice.actions

export default movieSlice.reducer