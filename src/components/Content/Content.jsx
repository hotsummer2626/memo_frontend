import React, { useState } from "react";
import styles from "./Content.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Outline from "./components/Outline/Outline";
import List from "./components/List/List";
import { useAddBookToUserMutation } from "../../store/apis/user";
import { setAllBooks } from "../../store/slices/book";

const Content = () => {
  const [inputText, setInputText] = useState("");
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [addBook, {}] = useAddBookToUserMutation();

  const addBookHandler = () => {
    addBook({ userId: auth.user.id, bookName: inputText }).then((res) => {
      if (!res.data.error) {
        dispatch(setAllBooks(res.data));
        setInputText("");
      }
      // console.log(res.data.error);
    });
  };
  return (
    <Outline>
      <div className={styles.addInput}>
        <input
          type="text"
          placeholder="Please input the book name"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className={styles.button} onClick={addBookHandler}>
          Add
        </div>
      </div>
      <List />
    </Outline>
  );
};

export default Content;
