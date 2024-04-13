import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videosList: [],
  },
  reducers: {
    setVideosList: (state, action) => {
      state.videosList = action.payload;
    },
  },
});

export const { setVideosList } = videoSlice.actions;
export default videoSlice.reducer;
