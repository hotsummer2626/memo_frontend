import React from "react";
import styles from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../../../../../../store/slices/book";
import { useDeleteBookFromUserMutation } from "../../../../../../../store/apis/user";
import UpdateConfirmModel from "./components/UpdateConfirmModel/UpdateConfirmModel";

const Item = ({ book }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [asyncDeleteBook, {}] = useDeleteBookFromUserMutation();

  const deleteBookHandler = () => {
    dispatch(deleteBook({ id: book._id }));
    asyncDeleteBook({ userId: auth.user.id, bookId: book._id });
  };
  return (
    <div className={styles.container}>
      <div className={styles.name}>{book.name}</div>
      <div className={styles.edit}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
      <div className={styles.delete} onClick={deleteBookHandler}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
      <UpdateConfirmModel />
    </div>
  );
};

export default Item;
