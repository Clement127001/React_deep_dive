import { createSlice } from "@reduxjs/toolkit";

const defaulValue = {
  cartItems: {},
  checkoutAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: defaulValue,
  reducers: {
    addCartItem: (state, action) => {
      const { id, price, defaultPrice } = action.payload;

      if (defaultPrice) state.checkoutAmount += defaultPrice / 100;
      else if (price) state.checkoutAmount += price / 100;

      if (state.cartItems[id]) {
        state.cartItems[id].quantity++;
      } else state.cartItems[id] = action.payload;
    },
    reduceCartItem: (state, action) => {
      const id = action.payload;
      let { cartItems, checkoutAmount: amount } = state;

      if (cartItems && cartItems[id]) {
        const { price, defaultPrice } = cartItems[id];
        if (price) amount -= price / 100;
        else if (defaultPrice) amount -= defaultPrice / 100;

        if (cartItems[id] && cartItems[id].quantity == 1) {
          delete cartItems[id];
        } else if (cartItems[id] && cartItems[id].quantity > 1)
          cartItems[id].quantity--;

        state.checkoutAmount = amount;
      }
    },
    increaseCartItem: (state, action) => {
      const id = action.payload;
      let { checkoutAmount: amount, cartItems } = state;

      if (cartItems && cartItems[id]) {
        const { defaultPrice, price } = cartItems[id];

        if (price) amount += price / 100;
        else if (defaultPrice) amount += defaultPrice / 100;

        state.cartItems[id].quantity++;
        state.checkoutAmount = amount;
      }
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      let { checkoutAmount: amount, cartItems } = state;

      if (cartItems && cartItems[id]) {
        const { price, defaultPrice, quantity } = cartItems[id];

        if (price) amount -= quantity * (price / 100);
        else if (defaultPrice) amount -= quantity * (defaultPrice / 100);

        state.checkoutAmount = amount;

        delete cartItems[id];
      }
    },
    clearCartItems: (state) => {
      state.cartItems = {};
      state.checkoutAmount = 0;
    },
  },
});

export const {
  addCartItem,
  reduceCartItem,
  removeCartItem,
  clearCartItems,
  increaseCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
