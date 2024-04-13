import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice";
import videoSlice from "./videoSlice";

const appStore = configureStore({
  reducer: {
    side: sideBarReducer,
    video: videoSlice,
  },
});

export default appStore;
