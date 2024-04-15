import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearchResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSearchResult } = searchSlice.actions;
export default searchSlice.reducer;
