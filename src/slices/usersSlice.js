import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    inviteUser: (state, action) => {
      /* invite a user */
    },
    removeUser: (state, action) => {
      /* invite a user */
    },
  },
});

export default usersSlice.reducer;
