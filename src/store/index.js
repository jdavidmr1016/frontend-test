import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import channelReducer from "../slices/channelsSlice";
import usersReducer from "../slices/usersSlice";

export const store = configureStore({
  reducer: { authReducer, channelReducer, usersReducer },
});
