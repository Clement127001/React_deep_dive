import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: { name: "", eamil: "", password: "" },
  },
  reducers: {
    loginUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(state.userInfo));
    },
    logoutUser: (state, action) => {
      state.userInfo = {};
      localStorage.removeItem(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser } = userSlice.actions;
