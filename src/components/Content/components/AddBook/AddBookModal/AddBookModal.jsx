import React, { useState } from "react";
import styles from "./AddBookModal.module.scss";
import ModalOutline from "../../../../ModalOutline/ModalOutline";
import { useSelector, useDispatch } from "react-redux";
import { useAddBookToUserMutation } from "../../../../../store/apis/user";
import { setAllBooks } from "../../../../../store/slices/book";

const AddBookModal = ({ setIsAddBookModalShow }) => {
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    wordCount: 0,
  });
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [addBook] = useAddBookToUserMutation();
  const inputChangeHandler = (inputName) => (e) => {
    let value = e.target.value;
    if (inputName === "wordCount") value = value.replace(/[^\d]/g, "") * 1;
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };
  const addBookHandler = () => {
    addBook({
      userId: auth.user.id,
      bookName: formData.bookName,
      author: formData.author,
      wordCount: formData.wordCount,
    }).then((res) => {
      if (!res.data.error) {
        dispatch(setAllBooks(res.data));
        return;
      }
      alert(res.data.error);
    });
  };
  return (
    <ModalOutline
      closeModal={() => setIsAddBookModalShow(false)}
      onConfirm={addBookHandler}
    >
      <form className={styles.addBookForm}>
        <div>
          <label htmlFor="bookName">Book name:</label>
          <input
            type="text"
            id="bookName"
            value={formData.bookName}
            onChange={inputChangeHandler("bookName")}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={inputChangeHandler("author")}
          />
        </div>
        <div>
          <label htmlFor="wordCount">Word count:</label>
          <input
            type="text"
            id="wordCount"
            value={formData.wordCount}
            onChange={inputChangeHandler("wordCount")}
          />
        </div>
      </form>
    </ModalOutline>
  );
};

export default AddBookModal;
