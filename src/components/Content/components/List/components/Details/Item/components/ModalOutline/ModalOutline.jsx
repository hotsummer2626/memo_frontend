import React, { useState } from "react";
import styles from "./ModalOutline.module.scss";
import Backdrop from "../../../../../../../../Backdrop/Backdrop";
import Transition from "../../../../../../../../TransitionContainers/Transition/Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ModalOutline = ({ children, closeModal, onConfirm }) => {
  const [isContentShow, setIsContentShow] = useState(false);

  const confirmHandler = (e) => {
    e.preventDefault();
    onConfirm();
    setIsContentShow(false);
    closeModal();
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setIsContentShow(false);
    closeModal();
  };
  return (
    <Backdrop>
      <Transition
        defaultShow={true}
        isShow={isContentShow}
        setIsShow={setIsContentShow}
        className="scaleFade"
      >
        <div className={styles.container}>
          <div className={styles.close}>
            <FontAwesomeIcon
              icon={faXmark}
              className={styles.icon}
              onClick={() => {
                setIsContentShow(false);
                closeModal();
              }}
            />
          </div>
          {children}
          <div className={styles.buttonGroup}>
            <button onClick={confirmHandler}>Confirm</button>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </div>
      </Transition>
    </Backdrop>
  );
};

export default ModalOutline;
