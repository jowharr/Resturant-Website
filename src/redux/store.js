import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './dishes'
import foodReducer from './api'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        dishes: foodReducer
    }
})