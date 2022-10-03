import React, { useState } from "react";
import styles from "./Login.module.scss";

const Login = () => {
  const [activeInput, setActiveInput] = useState({
    username: false,
    password: false,
  });
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoginForm, setIsLoginForm] = useState(false);
  const onFocusHandler = (inputName) => () =>
    setActiveInput({ ...activeInput, [inputName]: true });
  const onBlurHandler = (inputName) => (e) => {
    if (e.target.value === "") {
      setActiveInput({ ...activeInput, [inputName]: false });
    }
  };
  const onChangeHandler = (inputName) => (e) =>
    setFormData({ ...formData, [inputName]: e.target.value });

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2>{isLoginForm ? "Login" : "Sign Up"}</h2>
      <form onSubmit={onSubmitHandler}>
        <label
          htmlFor="username"
          className={activeInput.username ? styles.active : ""}
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          onFocus={onFocusHandler("username")}
          onBlur={onBlurHandler("username")}
          onChange={onChangeHandler("username")}
          className={activeInput.username ? styles.active : ""}
        />
        <label
          htmlFor="password"
          className={activeInput.password ? styles.active : ""}
        >
          Password
        </label>
        <input
          type="text"
          id="password"
          onFocus={onFocusHandler("password")}
          onBlur={onBlurHandler("password")}
          onChange={onChangeHandler("password")}
          className={activeInput.password ? styles.active : ""}
        />
        <button>{isLoginForm ? "Login" : "Sign Up"}</button>
      </form>
      <div className={styles.reminder}>
        <span>{isLoginForm ? "Not a member?" : "Already have account?"}</span>
        &nbsp;
        <span onClick={() => setIsLoginForm(!isLoginForm)}>
          {isLoginForm ? "Signup" : "Login"}
        </span>
      </div>
    </div>
  );
};

export default Login;
