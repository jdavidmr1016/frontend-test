import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: true,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("🚀 ~ file: authSlice.js:12 Weell doneeeeeee");
      /*  state.auth.user = action.payload.usermail;
      state.auth.user = action.payload.token; */
    },
  },
});
export const { login } = authSlice.actions;
export default authSlice.reducer;
