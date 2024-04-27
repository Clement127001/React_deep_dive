import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: {
      bannerMovies: [],
      mainMovies: [],
      movieDetail: null,
    },
  },

  reducers: {
    addMoviesList: (state, action) => {
      state.moviesList.bannerMovies = action.payload;
    },
    addMainMovies: (state, action) => {
      state.moviesList.mainMovies = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.moviesList.movieDetail = action.payload;
    },
  },
});

export const { addMoviesList, addMainMovies, addMovieDetails } =
  movieSlice.actions;
export default movieSlice.reducer;
