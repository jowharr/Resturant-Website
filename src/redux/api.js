import { createSlice } from "@reduxjs/toolkit";

const initialState={
    api: []
}

export const newsSlide  = createSlice({
    name: "dishes",
    initialState,
    reducers: {
        food: (state,action) => {
            state.api = action.payload
        },
    }
})

export const { food, panel } = newsSlide.actions
export default newsSlide.reducer