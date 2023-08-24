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
  reducers: {},
});

export default channelsSlice.reducer;
