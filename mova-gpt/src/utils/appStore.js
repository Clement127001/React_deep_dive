import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSearchReducer from "./gptSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: gptSearchReducer,
    lang: languageReducer,
  },
});

export default appStore;
