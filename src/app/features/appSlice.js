import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    openMenu: false,
    clickedVideo: {
      title: "",
      link: "",
      likeCount: "",
      description: "",
      channelName: "",
      channelAvatar: "",
      channelSubscribers: "",
    },
  },
  reducers: {
    toggleMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
