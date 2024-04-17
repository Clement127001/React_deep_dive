import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    side: sideBarReducer,
    video: videoSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default appStore;
