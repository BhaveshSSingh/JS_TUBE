import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";
import chatSlice from "./features/chatSlice";
import likedSlice from "./features/likedSlice";
import searchSlice from "./features/searchSlice";
import subscribeSlice from "./features/subscribeSlice";
import tagSlice from "./features/tagSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    like: likedSlice,
    app: appSlice,
    chat: chatSlice,
    search: searchSlice,
    user: userSlice,
    tags: tagSlice,
    sub: subscribeSlice,
  },
});
