import React, { useState } from "react";
import styles from "./AddBook.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddBookModal from "./AddBookModal/AddBookModal";
import Transition from "../../../TransitionContainers/Transition/Transition";

const AddBook = () => {
  const [isAddBookModalShow, setIsAddBookModalShow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() => setIsAddBookModalShow(true)}
        />
      </div>
      <Transition isShow={isAddBookModalShow} className="fade">
        <AddBookModal setIsAddBookModalShow={setIsAddBookModalShow} />
      </Transition>
    </div>
  );
};

export default AddBook;
