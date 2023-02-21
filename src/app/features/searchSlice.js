import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, key } from "../../config";

// export const fetchSearchedVids = createAsyncThunk(
//   "youtubeApp/homePageVideos",
//   async (thunkAPI, searchQuery) => {
//     console.log("searchQuery :", searchQuery);
//     const result = await fetch(
//       `${baseURL}/search?part=snippet&maxResults=25&q=${searchQuery}&key=${key}`
//     );
//     return result.json();
//   }
// );
const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
  },

  reducers: {
    searchLetter: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchSearchedVids.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchSearchedVids.fulfilled, (state, action) => {
  //     state.searchPageVids = action.payload;
  //     state.loading = false;
  //   });
  // },
});

export const { searchLetter } = searchSlice.actions;
export default searchSlice.reducer;
