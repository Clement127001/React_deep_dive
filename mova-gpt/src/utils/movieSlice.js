import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: {
      bannerMovies: [],
      mainMovies: [],
      movieDetail: null,
      watchLater: {},
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
    addWatchLater: (state, action) => {
      const { id, poster_path, original_title, vote_average } = action.payload;
      state.moviesList.watchLater[id] = {
        id,
        poster_path,
        original_title,
        vote_average,
      };
    },
    removeWatchLater: (state, action) => {
      const id = action.payload;

      console.log(id);
      const watchLater = state.moviesList.watchLater;

      console.log(watchLater[id]);

      if (watchLater && watchLater[id]) {
        delete watchLater[id];
      }
    },
  },
});

export const {
  addMoviesList,
  addMainMovies,
  addMovieDetails,
  addWatchLater,
  removeWatchLater,
} = movieSlice.actions;
export default movieSlice.reducer;
