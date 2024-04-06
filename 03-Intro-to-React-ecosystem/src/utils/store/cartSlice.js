import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    checkoutAmout: 0,
  },
  reducers: {
    addCartItem: (state, action) => {
      state.concat(action.payload);
    },
    removeCartItem: (state, action) => {
      const newItems = state.cartItems.filter(item.id != action.payload.id);
      state.cartItems = newItems;
    },
    clearCartItems: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addCartItem, removeCartItem, clearCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
