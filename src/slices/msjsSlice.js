import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
/* Slice for the direct messages */
export const msjSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createMsj: (state, action) => {
      /* Create a Msj */
    },
    deleteMsj: (state, action) => {
      /* Delete a Msj */
    },
    updateMsj: (state, action) => {
      /* Delete a Msj */
    },
  },
});
export const { createMsj, deleteMsj, updateMsj } = msjSlice.actions;
export default msjSlice.reducer;
