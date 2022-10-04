import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    bookList: null,
  },
  reducers: {
    setAllBooks(state, action) {
      state.bookList = action.payload;
    },
    deleteBook(state, action) {
      state.bookList = state.bookList.filter(
        (book) => book._id !== action.payload.id
      );
    },
  },
});

export const { setAllBooks, deleteBook } = bookSlice.actions;
