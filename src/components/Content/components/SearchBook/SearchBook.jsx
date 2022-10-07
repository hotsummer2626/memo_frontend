import React, { useState } from "react";
import styles from "./SearchBook.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setSearchBookFilter } from "../../../../store/slices/bookFilter";

const SearchBook = () => {
  const { bookFilter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isFormShow, setIsFormShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={() => setIsFormShow(!isFormShow)}
        />
      </div>
      <form
        className={`${styles.searchBookForm} ${
          isFormShow ? styles.active : ""
        }`}
      >
        <div>
          <label htmlFor="bookName">Book name:</label>
          <input
            type="text"
            id="bookName"
            value={bookFilter.bookName}
            placeholder="Please input book name"
            onChange={(e) =>
              dispatch(
                setSearchBookFilter({
                  inputName: "bookName",
                  value: e.target.value,
                })
              )
            }
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={bookFilter.author}
            placeholder="Please input book author"
            onChange={(e) =>
              dispatch(
                setSearchBookFilter({
                  inputName: "author",
                  value: e.target.value,
                })
              )
            }
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBook;
