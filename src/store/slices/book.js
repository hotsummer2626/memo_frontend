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
    updateBook(state, action) {
      const bookIndex = state.bookList.findIndex(
        (book) => book._id === action.payload.bookId
      );
      state.bookList[bookIndex].name = action.payload.bookName;
      state.bookList[bookIndex].isReaded = action.payload.isReaded;
      state.bookList[bookIndex].author = action.payload.author;
      state.bookList[bookIndex].wordCount = action.payload.wordCount;
    },
    deleteBook(state, action) {
      state.bookList = state.bookList.filter(
        (book) => book._id !== action.payload.id
      );
    },
  },
});

export const { setAllBooks, updateBook, deleteBook } = bookSlice.actions;
