import { createSlice, current } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    currentActiveMovieDetail: {},
  },

  reducers: {
    addMoviesList: (state, action) => {
      state.moviesList = action.payload;
      const { id, backdrop_path } = state.moviesList[0];
      state.currentActiveMovieDetail = { id, backdrop_path };
    },
    updateCurrentMovie: (state, action) => {
      const data = state?.moviesList.filter(
        (item) => (item.id = action.payload.id)
      );

      state.currentActiveMovieDetail = data;

      console.log(data);
    },
  },
});

export const { addMoviesList, updateCurrentMovie } = movieSlice.actions;
export default movieSlice.reducer;
