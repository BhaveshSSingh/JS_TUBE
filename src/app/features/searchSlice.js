import { createSlice } from "@reduxjs/toolkit";

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
});

export const { searchLetter } = searchSlice.actions;
export default searchSlice.reducer;
