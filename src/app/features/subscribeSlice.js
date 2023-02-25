import { createSlice } from "@reduxjs/toolkit";

const subSlice = createSlice({
  name: "sub",
  initialState: {
    sub: [],
  },
  reducers: {
    addToSubscribe: (state, action) => {
      const exist = state.sub.find(
        (vid) => vid.videoTitle === action.payload.videoTitle
      );
      if (!exist) {
        state.sub.push(action.payload);
      }
    },
  },
});

export const { addToSubscribe } = subSlice.actions;
export default subSlice.reducer;
