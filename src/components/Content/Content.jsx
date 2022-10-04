import React from "react";
import styles from "./Content.module.scss";
import { useSelector } from "react-redux";
import Outline from "./components/Outline/Outline";
import List from "./components/List/List";

const Content = () => {
  const { auth } = useSelector((state) => state);
  return (
    <Outline>
      <div className={styles.addInput}>
        <input type="text" placeholder="Please input the book name" />
        <div className={styles.button}>Add</div>
      </div>
      <List />
    </Outline>
  );
};

export default Content;
