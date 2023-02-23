import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    homePageVids: [],
    openMenu: false,

    clickedVideo: {
      channelName: "",
      videoTitle: "",
      videoDate: "",
      description: "",
      thumbnail: "",
      videoId: "",
    },
  },
  reducers: {
    toggleMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
    hideMenu: (state) => {
      state.openMenu = false;
    },
    HomePageCache: (state, action) => {
      state.homePageVids = action.payload;
    },

    clickedVideoInfo: (state, action) => {
      state.clickedVideo = action.payload;
    },
  },
});

export const { toggleMenu, hideMenu, HomePageCache, clickedVideoInfo } =
  appSlice.actions;
export default appSlice.reducer;
