import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";
import chatSlice from "./features/chatSlice";
import searchSlice from "./features/searchSlice";
import tagSlice from "./features/tagSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
    search: searchSlice,
    user: userSlice,
    tags: tagSlice,
  },
});
