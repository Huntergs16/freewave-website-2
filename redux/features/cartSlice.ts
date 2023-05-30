import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { cartItem } from "../../types/globalTypes";
import { RootState } from "../store";

interface CartState {
  items: cartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
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
      state.totalPrice += Number(newItem.price) * newItem.quantity;
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const itemToRemove = state.items.find(item => item.id === itemId);
      if (itemToRemove) {
        state.totalPrice -= Number(itemToRemove.price) * itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== itemId);
      }
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ itemId: string; quantity: number }>
    ) => {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === itemId);
      if (itemToUpdate && quantity >= 0) {
        state.totalPrice -= Number(itemToUpdate.price) * itemToUpdate.quantity;
        itemToUpdate.quantity = quantity;
        state.totalPrice += Number(itemToUpdate.price) * itemToUpdate.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
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
  state.cart.items.reduce((count: number, item: cartItem) => count + item.quantity, 0);

export const selectCartTotalPrice = (state: RootState) =>
  state.cart.items.reduce(
    (totalPrice, item) => totalPrice + Number(item.price) * item.quantity,
    0
);
