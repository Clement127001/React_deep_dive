import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: {
      bannerMovies: [],
      mainMovies: [],
    },
  },

  reducers: {
    addMoviesList: (state, action) => {
      state.moviesList.bannerMovies = action.payload;
      const { id, backdrop_path } = state.moviesList.bannerMovies[0];
      state.currentActiveMovieDetail = { id, backdrop_path };
    },
    addMainMovies: (state, action) => {
      state.moviesList.mainMovies = action.payload;
    },
  },
});

export const { addMoviesList, addMainMovies } = movieSlice.actions;
export default movieSlice.reducer;
