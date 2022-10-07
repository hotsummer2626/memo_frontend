import { createSlice } from "@reduxjs/toolkit";

export const bookFilterSlice = createSlice({
  name: "bookFilter",
  initialState: {
    isReaded: false,
    wordCount: undefined,
    bookName: "",
    author: "",
  },
  reducers: {
    setBookFilter(state, action) {
      state.isReaded = action.payload.isReaded;
      state.wordCount = action.payload.wordCount;
    },
    setSearchBookFilter(state, action) {
      state[action.payload.inputName] = action.payload.value;
    },
  },
});

export const { setBookFilter, setSearchBookFilter } = bookFilterSlice.actions;
