import { createSlice } from "@reduxjs/toolkit";

export const bookFilterSlice = createSlice({
  name: "bookFilter",
  initialState: {
    isReaded: false,
    wordCount: undefined,
  },
  reducers: {
    setBookFilter(state, action) {
      state.isReaded = action.payload.isReaded;
      state.wordCount = action.payload.wordCount;
    },
  },
});

export const { setBookFilter } = bookFilterSlice.actions;
