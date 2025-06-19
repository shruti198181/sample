import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cartItems : [],
    },

    reducers: {
        AddToCart : (state,action) => {
              const existing = state.cartItems.find(item => item.id === action.payload.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cartItems.push({ ...action.payload, quantity: 1 }); 
  }
        },
    increase : (state,action) => {
        const item = state.cartItems.find(item=>item.id===action.payload) ;
        if(item)  {
            item.quantity += 1;
        }
    },
     decrease : (state,action) => {
        const item = state.cartItems.find(item=>item.id===action.payload) ;
        if(item) {
           item.quantity -= 1;
            if(item.quantity<=0) {
                state.cartItems = state.cartItems.filter(item=>item.id !==action.payload)
            }
        }
     },
        RemoveFromCart : (state,action) => {
            state.cartItems = state.cartItems.filter(item=>item.id !==action.payload)
        },
        ClearCart : (state) => {
            state.cartItems = []; 
        },
    },
});

export const {AddToCart,RemoveFromCart,ClearCart,increase,decrease} = cartSlice.actions
export default cartSlice.reducer;

