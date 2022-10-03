import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth";
import { authSlice } from "./slices/auth";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (detDefaultMiddleware) =>
    detDefaultMiddleware().concat(authApi.middleware),
});

export default store;