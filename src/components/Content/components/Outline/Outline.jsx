import React from "react";
import styles from "./Outline.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../store/slices/auth";
import { setAllBooks } from "../../../../store/slices/book";
import Transition from "../../../TransitionContainers/Transition/Transition";

const Outline = (props) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <Transition defaultShow={true} className="scaleFade">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Welcome &nbsp;
            <span>{auth.user.username}&nbsp;!!!</span>
          </h2>
          <div
            className={styles.logout}
            onClick={() => {
              dispatch(setAllBooks(null));
              dispatch(logout());
            }}
          >
            Log out
          </div>
        </div>
        {props.children}
      </div>
    </Transition>
  );
};

export default Outline;
