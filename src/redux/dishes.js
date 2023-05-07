import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
    categoryList: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        categoryClick: (state,action) => {
            state.categoryList = action.payload
        },

        increment: (state, action) => {
            
            state.cartList.push({
                ...action.payload,
                count: 0
            })
            
            const productArr = action.payload;
            state.cartList.forEach((item) => {
                if (item?.dish_id === productArr.dish_id) {
                    item.count++;
                }
            })
        },
        decrement: (state, action) => {
            const productArr = action.payload;
            state.cartList.forEach((item) => {
                if (item?.dish_id === productArr.dish_id) {
                    item.count--;
                }
            })
        }
    }

})
export const { increment, decrement, categoryClick } = counterSlice.actions
export default counterSlice.reducer