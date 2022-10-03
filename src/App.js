import React from "react";
import "./App.scss";
import styles from "./App.module.scss";
import Login from "./components/Login/Login";
import Content from "./components/Content/Content";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  );
};

export default App;
