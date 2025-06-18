import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cartItems : [],
    },

    reducers: {
        AddToCart : (state,action) => {
            state.cartItems.push(action.payload)
        },
        RemoveFromCart : (state,action) => {
            state.cartItems = state.cartItems.filter(item=>item.id !==action.payload)
        },
        ClearCart : (state) => {
            state.cartItems = []; 
        },
    },
});

export const {AddToCart,RemoveFromCart,ClearCart} = cartSlice.actions
export default cartSlice.reducer;

