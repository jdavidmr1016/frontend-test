import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  "Frontend-Team",
  "Backend-Team",
  "HR",
  "UI-UX",
  "Friends",
  "Beer-Time",
];

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addChanel: (state, action) => {
      /* Add a chanel */
      state.push(action.payload.chanel);
    },
    /* Remove a channel */
    deleteChanel: (state, action) => state.filter(),
  },
});
export const { addChanel, deleteChanel } = channelsSlice.actions;
export default channelsSlice.reducer;
