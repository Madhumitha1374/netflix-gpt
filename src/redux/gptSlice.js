import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gptSlice",
    initialState : {
        search : false,
        movieNames : null,
        moviesList : null
    },
    reducers : {
        changeSearchAction : (state) => {
            state.search = !state.search
        },
        addSearchMoviesList : (state, action) => {
            const {movieNames, moviesList} = action.payload
            state.moviesList = moviesList
            state.movieNames = movieNames
        }
    }
})

export const {changeSearchAction, addSearchMoviesList} = gptSlice.actions
export default gptSlice.reducer