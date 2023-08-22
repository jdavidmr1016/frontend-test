import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
};

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {},
});

export default channelsSlice.reducer;
