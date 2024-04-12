import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice";

const appStore = configureStore({
  reducer: {
    side: sideBarReducer,
  },
});

export default appStore;
