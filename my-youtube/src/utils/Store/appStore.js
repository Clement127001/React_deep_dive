import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
  reducer: {
    side: sideBarReducer,
    video: videoSlice,
    search: searchSlice,
  },
});

export default appStore;
