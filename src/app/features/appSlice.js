import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { key } from "../../config";

export const fetchHomePageVids = createAsyncThunk(
  "youtubeApp/homePageVideos",
  async (thunkAPI) => {
    //     const result = await fetch(
    //       `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&
    // key=${key}`
    //     );

    const result = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Javascript&key=${key}`
    );
    return result.json();
  }
);

const appSlice = createSlice({
  name: "app",
  initialState: {
    homepageVids: [],
    openMenu: false,
    loading: true,

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
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageVids.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePageVids.fulfilled, (state, action) => {
      state.homepageVids = action.payload;
      state.loading = false;
    });
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
