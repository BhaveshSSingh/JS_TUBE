import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    likedPage: [],
  },
  reducers: {
    addTolikedPage(state, action) {
      const exist = state.likedPage.find(
        (vid) => vid.videoTitle === action.payload.videoTitle
      );
      if (!exist) {
        state.likedPage.push(action.payload);
      }
    },
  },
});

export const { addTolikedPage } = likeSlice.actions;
export default likeSlice.reducer;
