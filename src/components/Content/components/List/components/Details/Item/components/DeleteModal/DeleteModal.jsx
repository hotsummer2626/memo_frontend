import React from "react";
import styles from "./DeleteModal.module.scss";
import ModalOutline from "../../../../../../../../ModalOutline/ModalOutline";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../../../../../../../../store/slices/book";
import { useDeleteBookFromUserMutation } from "../../../../../../../../../store/apis/user";

const DeleteModal = ({ book, setIsDeleteModalShow }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [asyncDeleteBook] = useDeleteBookFromUserMutation();
  const deleteHandler = (closeModal) => {
    dispatch(deleteBook({ id: book._id }));
    asyncDeleteBook({ userId: auth.user.id, bookId: book._id });
    closeModal();
  };
  return (
    <ModalOutline
      title="DELETE BOOK"
      closeModal={() => setIsDeleteModalShow(false)}
      onConfirm={deleteHandler}
    >
      <div className={styles.text}>Really want to delete {book.name} ???</div>
    </ModalOutline>
  );
};

export default DeleteModal;
