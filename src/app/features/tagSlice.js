import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, key } from "../../config";

// export const fetchVidsByCategory = createAsyncThunk(
//   "youtubeApp/homePageVideos",
//   async (thunkAPI, keyWord) => {
//     const result = await fetch(
//       `${baseURL}/search?part=snippet&maxResults=25&q=${keyWord}&key=${key}`
//     );
//     return result.json();
//   }
// );

const tagSlice = createSlice({
  name: "tags",
  initialState: {
    keyWord: "Javascript",
  },
  reducers: {
    getByTagName: (state, action) => {
      state.keyWord = action.payload;
    },
  },
  extraReducers: {},
});

export const { getByTagName } = tagSlice.actions;

export default tagSlice.reducer;
