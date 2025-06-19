import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartslice';
import searchReducer from './searchslice'


export const store = configureStore({
    reducer: {
        cart :cartReducer,
            search: searchReducer,

    },
});