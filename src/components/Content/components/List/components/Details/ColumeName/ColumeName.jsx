import React from "react";
import styles from "./ColumeName.module.scss";

const ColumeName = () => {
  return (
    <div className={styles.container}>
      <div>Name</div>
      <div className={styles.author}>Author</div>
      <div className={styles.wordCount}>WordCount</div>
      <div className={styles.update}>Update</div>
      <div className={styles.delete}>Delete</div>
    </div>
  );
};

export default ColumeName;
