import React, { useEffect } from "react";
import "./App.scss";
import styles from "./App.module.scss";
import Login from "./components/Login/Login";
import Content from "./components/Content/Content";
import { Routes, Route } from "react-router-dom";
import AuthGuard from "./components/AuthGuard/AuthGuard";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/slices/auth";

const App = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = auth.expireTime - Date.now();
    if (timeout < 10000) {
      dispatch(logout());
      return;
    }
    const timer = setTimeout(() => {
      dispatch(logout());
    }, timeout);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/content"
          element={
            <AuthGuard>
              <Content />
            </AuthGuard>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
