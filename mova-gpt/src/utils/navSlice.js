import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: { showNav: false },
  reducers: {
    toggleNav: (state, action) => {
      state.showNav = !state.showNav;
    },
  },
});

export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;
