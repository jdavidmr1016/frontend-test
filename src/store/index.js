import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import channelsReducer from "../slices/channelsSlice";
import msjsReducer from "../slices/msjsSlice";
import usersReducer from "../slices/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    channels: channelsReducer,
    users: usersReducer,
    msjs: msjsReducer,
  },
});
