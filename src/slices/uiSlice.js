import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSidebarOpen: false,
  },

  reducers: {
    sidebarOpen: (state) => {
      state.isSidebarOpen = true;
    },
    sidebarClose: (state) => {
      state.isSidebarOpen = false;
    },
  },
});
export const { sidebarOpen, sidebarClose } = uiSlice.actions;
export default uiSlice.reducer;
