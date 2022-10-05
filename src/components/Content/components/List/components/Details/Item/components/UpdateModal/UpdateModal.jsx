import React, { useState } from "react";
import styles from "./UpdateModal.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateBook } from "../../../../../../../../../store/slices/book";
import { useUpdateBookFromUserMutation } from "../../../../../../../../../store/apis/user";
import ModalOutline from "../ModalOutline/ModalOutline";

const UpdateModel = ({ book, setIsUpdateModalShow }) => {
  const [formData, setFormData] = useState({
    bookName: book.name,
    bookStatus: book.isReaded,
  });
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [asyncUpdateBook] = useUpdateBookFromUserMutation();

  const inputChangeHandler = (inputName) => (e) => {
    let value = e.target.value;
    if (inputName === "bookStatus") value = value === "true" ? true : false;
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };

  const updateHandler = () => {
    dispatch(
      updateBook({
        bookId: book._id,
        bookName: formData.bookName,
        isReaded: formData.bookStatus,
      })
    );
    asyncUpdateBook({
      userId: auth.user.id,
      bookId: book._id,
      book: { bookName: formData.bookName, isReaded: formData.bookStatus },
    });
  };
  return (
    <ModalOutline
      closeModal={() => setIsUpdateModalShow(false)}
      onConfirm={updateHandler}
    >
      <form>
        <div className={styles.bookName}>
          <label htmlFor="bookName">Book name:</label>
          <input
            type="text"
            id="bookName"
            value={formData.bookName}
            onChange={inputChangeHandler("bookName")}
          />
        </div>
        <div className={styles.bookStatus}>
          <div>Book status:</div>
          <div>
            <input
              type="radio"
              id="readed"
              name="bookStatus"
              value={true}
              checked={formData.bookStatus}
              onChange={inputChangeHandler("bookStatus")}
            />
            <label htmlFor="readed">Readed</label>
            <input
              type="radio"
              id="unread"
              name="bookStatus"
              value={false}
              checked={!formData.bookStatus}
              onChange={inputChangeHandler("bookStatus")}
            />
            <label htmlFor="unread">Unread</label>
          </div>
        </div>
      </form>
    </ModalOutline>
  );
};

export default UpdateModel;
