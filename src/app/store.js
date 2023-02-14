import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
  },
});
