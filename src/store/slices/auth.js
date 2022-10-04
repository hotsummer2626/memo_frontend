import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return {
        isLogged: false,
        token: null,
        user: null,
        expireTime: 0,
      };
    }
    return {
      isLogged: true,
      token,
      user: JSON.parse(localStorage.getItem("user")),
      expireTime: +localStorage.getItem("expireTime"),
    };
  },
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      const currentTime = Date.now();
      const timeout = 1000 * 60 * 60 * 24 * 7;
      state.expireTime = currentTime + timeout;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("expireTime", JSON.stringify(state.expireTime));
    },
    logout(state, action) {
      state.isLogged = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("expireTime");
    },
  },
});

export const { login, logout } = authSlice.actions;
