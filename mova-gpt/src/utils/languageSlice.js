import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "lang",
  initialState: {
    currentLang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLang = action.payload;
    },
  },
});
export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
