import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";
import chatSlice from "./features/chatSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
  },
});
