import { createSlice } from "@reduxjs/toolkit";
import type { CartType } from "../../types";

interface CartState {
  cart: CartType[];
}
const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        cartSlice.caseReducers.updateQuantity(state, {
          type: "cart/updateQuantity",
          payload: {
            id: item.id,
            quantity: existingItem.quantity + item.quantity,
          },
        });
      } else {
        state.cart.unshift({ ...item, quantity: item.quantity });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        cartSlice.caseReducers.removeFromCart(state, {
          type: "cart/removeFromCart",
          payload: id,
        });
        return;
      }

      state.cart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
