import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import channelReducer from "../slices/channelsSlice";
export const store = configureStore({
  reducer: { authReducer, channelReducer },
});
