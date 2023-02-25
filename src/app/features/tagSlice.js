import { createSlice } from "@reduxjs/toolkit";

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
});

export const { getByTagName } = tagSlice.actions;

export default tagSlice.reducer;
