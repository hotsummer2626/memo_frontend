import React, { useState } from "react";
import styles from "./ListFilterModal.module.scss";
import ModalOutline from "../../../../../../../ModalOutline/ModalOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown19,
  faArrowDown91,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setBookFilter } from "../../../../../../../../store/slices/bookFilter";

const ListFilterModal = ({ setIsListFilterModalShow }) => {
  const { bookFilter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    isReaded: bookFilter.isReaded,
    wordCount: bookFilter.wordCount,
  });

  const inputChangeHandler = (inputName) => (e) => {
    let value;
    if (inputName === "wordCount") {
      value = e.target.value === "" ? undefined : e.target.value;
    }
    if (inputName === "isReaded") value = e.target.checked;
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };
  const setBookFilterHandler = (closeModal) => {
    dispatch(setBookFilter(formData));
    closeModal();
  };
  return (
    <ModalOutline
      title="Book List Filter"
      closeModal={() => setIsListFilterModalShow(false)}
      onConfirm={setBookFilterHandler}
    >
      <form className={styles.listFilterForm}>
        <div className={styles.wordCount}>
          <div>Word count:</div>
          <div>
            <input
              type="radio"
              id="ascending"
              name="wordCount"
              value="ascending"
              checked={formData.wordCount === "ascending" ? true : false}
              onChange={inputChangeHandler("wordCount")}
            />
            <label htmlFor="ascending">
              <FontAwesomeIcon icon={faArrowDown19} />
            </label>
            <input
              type="radio"
              id="descending"
              name="wordCount"
              value="descending"
              checked={formData.wordCount === "descending" ? true : false}
              onChange={inputChangeHandler("wordCount")}
            />
            <label htmlFor="descending">
              <FontAwesomeIcon icon={faArrowDown91} />
            </label>
            <input
              type="radio"
              id="none"
              name="wordCount"
              value={""}
              checked={formData.wordCount === undefined ? true : false}
              onChange={inputChangeHandler("wordCount")}
            />
            <label htmlFor="none">None</label>
          </div>
        </div>
        <div className={styles.isReaded}>
          <label htmlFor="isReaded">Readed:</label>
          <input
            type="checkBox"
            id="isReaded"
            checked={formData.isReaded}
            onChange={inputChangeHandler("isReaded")}
          />
        </div>
      </form>
    </ModalOutline>
  );
};

export default ListFilterModal;
