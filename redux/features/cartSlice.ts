import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { cartItem } from "../../types/globalTypes";
import { RootState } from "../store";

interface CartState {
    items: cartItem[];
  }
  
  const initialState: CartState = {
    items: [],
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItemToCart: (state, action: PayloadAction<cartItem>) => {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          state.items.push(newItem);
        }
      },
      removeItemFromCart: (state, action: PayloadAction<string>) => {
        const itemId = action.payload;
        state.items = state.items.filter(item => item.id !== itemId);
      },
      updateCartItemQuantity: (
        state,
        action: PayloadAction<{ itemId: string; quantity: number }>
      ) => {
        const { itemId, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.id === itemId);
        if (itemToUpdate && quantity >= 0) {
          itemToUpdate.quantity = quantity;
        }
      },
      clearCart: (state) => {
        state.items = [];
      },
    },
  });
  
  export const {
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
    clearCart,
  } = cartSlice.actions;
  
  export default cartSlice.reducer;
  
  export const selectCartItemCount = (state: RootState) =>
    state.cart.items.reduce((count:number, item:cartItem) => count + item.quantity, 0);