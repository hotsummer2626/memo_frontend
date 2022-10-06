import React from "react";
import styles from "./Header.module.scss";
import ListFilter from "./ListFilter/ListFilter";


const Header = () => {
  return (
    <div className={styles.container}>
      <h3>Books</h3>
      <ListFilter />
    </div>
  );
};

export default Header;
