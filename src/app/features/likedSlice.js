import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    likedPage: [],
  },
  reducers: {
    addTolikedPage(state, action) {
      state.likedPage.push(action.payload);
    },
  },
});

export const { addTolikedPage } = likeSlice.actions;
export default likeSlice.reducer;
