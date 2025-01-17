import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import channelsReducer from "../slices/channelsSlice";
import msgsReducer from "../slices/msgsSlice";
import usersReducer from "../slices/usersSlice";
import uiReducer from "../slices/uiSlice";
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    channels: channelsReducer,
    users: usersReducer,
    msjs: msgsReducer,
  },
});
