import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
