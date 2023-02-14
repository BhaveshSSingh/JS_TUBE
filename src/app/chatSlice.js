import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chat: [],
  },
  reducers: {
    addToChat(state, action) {
      state.chat.splice(100, 1);
      state = state.chat.unshift(action.payload);
    },
  },
});

export const { addToChat } = chatSlice.actions;
export default chatSlice.reducer;
