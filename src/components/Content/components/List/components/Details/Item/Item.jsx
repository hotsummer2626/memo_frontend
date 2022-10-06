import React, { useState } from "react";
import styles from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import UpdateModel from "./components/UpdateModal/UpdateModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import Transition from "../../../../../../TransitionContainers/Transition/Transition";

const Item = ({ book }) => {
  const [isUpdateModalShow, setIsUpdateModalShow] = useState(false);
  const [isDeleteModalShow, setIsDeleteModalShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.name}>{book.name}</div>
      <div className={styles.author}>{book.author}</div>
      <div className={styles.wordCount}>{book.wordCount}</div>
      <div className={styles.edit}>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => setIsUpdateModalShow(true)}
        />
      </div>
      <div className={styles.delete}>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => setIsDeleteModalShow(true)}
        />
      </div>
      <Transition isShow={isUpdateModalShow} className="fade">
        <UpdateModel book={book} setIsUpdateModalShow={setIsUpdateModalShow} />
      </Transition>
      <Transition isShow={isDeleteModalShow} className="fade">
        <DeleteModal book={book} setIsDeleteModalShow={setIsDeleteModalShow} />
      </Transition>
    </div>
  );
};

export default Item;
