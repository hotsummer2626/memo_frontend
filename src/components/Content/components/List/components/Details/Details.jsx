import React from "react";
import styles from "./Details.module.scss";
import Item from "./Item/Item";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Details = ({ displayBookList }) => {
  return (
    <div className={styles.container}>
      <TransitionGroup className={styles.wrapper}>
        {displayBookList &&
          displayBookList.map((book) => (
            <CSSTransition key={book._id} timeout={300} classNames={styles}>
              <Item book={book} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

export default Details;
