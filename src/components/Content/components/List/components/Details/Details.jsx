import React from "react";
import styles from "./Details.module.scss";
import Item from "./Item/Item";

const Details = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Details;
