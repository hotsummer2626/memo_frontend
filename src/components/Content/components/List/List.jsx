import React, { useState, useEffect } from "react";
import styles from "./List.module.scss";
import Header from "./components/Header/Header";
import Details from "./components/Details/Details";
import { useSelector, useDispatch } from "react-redux";
import { setAllBooks } from "../../../../store/slices/book";
import { useGetBooksByUserIdQuery } from "../../../../store/apis/user";

const List = () => {
  const [selectValue, setSelectValue] = useState("All");
  const [displayBookList, setDisplayBookList] = useState(null);
  const {
    auth,
    book: { bookList },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { data: books } = useGetBooksByUserIdQuery(auth.user.id);

  useEffect(() => {
    if (books) {
      dispatch(setAllBooks(books));
    }
  }, [books]);

  useEffect(() => {
    if (bookList) {
      const actions = {
        All: bookList,
        Readed: bookList.filter((book) => book.isReaded === true),
        Unread: bookList.filter((book) => book.isReaded === false),
      };
      setDisplayBookList(actions[selectValue]);
    }
  }, [selectValue, bookList]);

  return (
    <div className={styles.container}>
      <Header selectValue={selectValue} setSelectValue={setSelectValue} />
      <div className={styles.columeName}>
        <div>Name</div>
        <div className={styles.author}>Author</div>
        <div className={styles.wordCount}>WordCount</div>
        <div className={styles.update}>Update</div>
        <div className={styles.delete}>Delete</div>
      </div>
      <Details displayBookList={displayBookList} />
    </div>
  );
};

export default List;
