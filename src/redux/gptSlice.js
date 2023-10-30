import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gptSlice",
    initialState : {
        search : false
    },
    reducers : {
        changeSearchAction : (state) => {
            state.search = !state.search
        }
    }
})

export const {changeSearchAction} = gptSlice.actions
export default gptSlice.reducer