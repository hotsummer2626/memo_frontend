import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Transition from "../../../../../TransitionContainers/Transition/Transition";

const selectOptions = ["All", "Readed", "Unread"];

const Header = ({ selectValue, setSelectValue }) => {
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  return (
    <div className={styles.container}>
      <h3>Books</h3>
      <div className={styles.selectBx}>
        <div
          className={styles.select}
          onClick={() => setIsDropdownShow(!isDropdownShow)}
        >
          <span>{selectValue}</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`${styles.icon} ${isDropdownShow ? styles.active : ""}`}
          />
        </div>
        <Transition
          isShow={isDropdownShow}
          setIsShow={setIsDropdownShow}
          className="upInUpOut"
        >
          <div className={styles.dropdown}>
            {selectOptions.map((value) => (
              <span
                key={value}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectValue(value);
                  setIsDropdownShow(false);
                }}
              >
                {value}
              </span>
            ))}
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Header;
