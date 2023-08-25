import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
/* Slice for the direct messages */
export const msgSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createMsj: (state, action) => {
      /* Create a Msg */
    },
    deleteMsj: (state, action) => {
      /* Delete a Msg */
    },
    updateMsj: (state, action) => {
      /* Delete a Msg */
    },
  },
});
export const { createMsj, deleteMsj, updateMsj } = msgSlice.actions;
export default msgSlice.reducer;
