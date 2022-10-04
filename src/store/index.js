import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth";
import { userApi } from "./apis/user";
import { authSlice } from "./slices/auth";
import { bookSlice } from "./slices/book";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authSlice.reducer,
    book: bookSlice.reducer,
  },
  middleware: (detDefaultMiddleware) =>
    detDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export default store;
