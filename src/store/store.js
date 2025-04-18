import { configureStore } from '@reduxjs/toolkit';
import cartReducers from '../utils/cart-slice';

export const store = configureStore({
    reducer: cartReducers,
});
