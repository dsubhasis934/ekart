import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSystem';
const Store = configureStore({
    reducer: {
        cart: cartReducer
    }
})
export default Store