import { configureStore } from "@reduxjs/toolkit"
import cartReducer from '../redux/features/cartSlice';

const reducer = {
    cart: cartReducer,
  };

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;