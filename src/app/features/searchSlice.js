import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { key } from "../../config";

export const fetchSearchedVids = createAsyncThunk(
  "youtubeApp/homePageVideos",
  async (thunkAPI, searchQuery) => {
    const result = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${key}`
    );
    return result.json();
  }
);
const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchPageVids: [],
    searchQuery: "",
  },

  reducers: {
    searchVideos: (state) => {
      state.searchPageVids = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchedVids.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchedVids.fulfilled, (state, action) => {
      state.searchPageVids = action.payload;
      state.loading = false;
    });
  },
});

export const { searchVideos } = searchSlice.actions;
export default searchSlice.reducer;
