import React, { useState, useEffect } from "react";
import styles from "./Details.module.scss";
import ColumeName from "./ColumeName/ColumeName";
import Item from "./Item/Item";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { useGetBooksByUserIdQuery } from "../../../../../../store/apis/user";
import { setAllBooks } from "../../../../../../store/slices/book";
import Transition from "../../../../../TransitionContainers/Transition/Transition";
import Loading from "../../../../../Loading/Loading";
import { logout } from "../../../../../../store/slices/auth";

const Details = () => {
  const [displayBookList, setDisplayBookList] = useState(null);
  const {
    auth,
    book: { bookList },
    bookFilter,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksByUserIdQuery(auth.user.id);

  useEffect(() => {
    if (isError) {
      dispatch(setAllBooks(null));
      dispatch(logout());
    }
  }, [isError]);

  useEffect(() => {
    if (books) {
      dispatch(setAllBooks(books));
    }
  }, [books]);

  useEffect(() => {
    if (bookList) {
      let newBookList = bookList.filter(
        (book) =>
          book.isReaded === bookFilter.isReaded &&
          book.name.indexOf(bookFilter.bookName) !== -1 &&
          book.author.indexOf(bookFilter.author) !== -1
      );
      if (bookFilter.wordCount) {
        const wordCountActions = {
          ascending: [...newBookList].sort((a, b) => a.wordCount - b.wordCount),
          descending: [...newBookList].sort(
            (a, b) => b.wordCount - a.wordCount
          ),
        };
        newBookList = wordCountActions[bookFilter.wordCount];
      }
      setDisplayBookList(newBookList);
    }
  }, [bookFilter, bookList]);

  return (
    <div className={styles.container}>
      <ColumeName />
      <div className={styles.scrollContainer}>
        <TransitionGroup className={styles.wrapper}>
          {displayBookList &&
            displayBookList.map((book) => (
              <CSSTransition key={book._id} timeout={300} classNames={styles}>
                <Item book={book} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
      <Transition isShow={isLoading}>
        <Loading />
      </Transition>
    </div>
  );
};

export default Details;
