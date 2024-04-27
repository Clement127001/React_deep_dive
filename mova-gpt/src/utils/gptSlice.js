import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    movieNames: null,
    movieLists: null,
    completedSearch: false,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.showSearch = !state.showSearch;
    },
    addSearchResults: (state, action) => {
      const { movieNames, movieLists } = action.payload;

      state.movieNames = movieNames;
      state.movieLists = movieLists;
    },
    toggleCompleteStatus: (state, action) => {
      state.completedSearch = action.payload;
    },
  },
});

export const { toggleSearch, addSearchResults, toggleCompleteStatus } =
  gptSlice.actions;
export default gptSlice.reducer;
