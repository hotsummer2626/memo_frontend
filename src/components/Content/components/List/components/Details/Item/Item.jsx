import React from "react";
import styles from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Item = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>adfasdf</div>
      <div className={styles.edit}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
      <div className={styles.delete}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};

export default Item;
