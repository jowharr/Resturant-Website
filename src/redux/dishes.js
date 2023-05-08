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
            const payload = action.payload
            const itemIndex = state.cartList.findIndex(item => item.dish_id === payload.dish_id);
            if (itemIndex === -1) {
              const newItem = { ...payload, count: 1 };
              state.cartList = state.cartList.concat(newItem);
            } else {
              state.cartList[itemIndex].count++;
            }
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