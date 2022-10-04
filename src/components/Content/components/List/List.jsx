import React, { useState } from "react";
import styles from "./List.module.scss";
import Header from "./components/Header/Header";
import Details from "./components/Details/Details";

const List = () => {
  const [selectValue, setSelectValue] = useState("All");
  return (
    <div className={styles.container}>
      <Header selectValue={selectValue} setSelectValue={setSelectValue} />
      <Details />
    </div>
  );
};

export default List;
