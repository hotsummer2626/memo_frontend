import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import { useRegisterMutation, useLoginMutation } from "../../store/apis/auth";
import { login } from "../../store/slices/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Transition from "../TransitionContainers/Transition/Transition";
import Loading from "../Loading";

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
  const [errorMsg, setErrorMsg] = useState(null);
  const [regFn, { isLoading: regLoading }] = useRegisterMutation();
  const [loginFn, { isLoading: loginLoading }] = useLoginMutation();
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isLogged) {
      navigate("/content", { replace: true });
    }
  }, []);
  const resetForm = () => {
    setActiveInput({ username: "", password: "" });
    setErrorMsg(null);
    setFormData({ username: "", password: "" });
  };
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
    if (isLoginForm) {
      loginFn(formData).then((res) => {
        if (!res.data.error) {
          resetForm();
          dispatch(login({ token: res.data.token, user: res.data.user }));
          navigate("/content", { replace: true });
        }
        setErrorMsg(res.data.error);
      });
    } else {
      regFn(formData).then((res) => {
        if (!res.data.error) {
          resetForm();
          setIsLoginForm(true);
        }
        setErrorMsg(res.data.error);
      });
    }
  };

  return (
    <Transition defaultShow={true} className="scaleFade">
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
            value={formData.username}
            className={activeInput.username ? styles.active : ""}
          />
          <label
            htmlFor="password"
            className={activeInput.password ? styles.active : ""}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onFocus={onFocusHandler("password")}
            onBlur={onBlurHandler("password")}
            onChange={onChangeHandler("password")}
            value={formData.password}
            className={activeInput.password ? styles.active : ""}
          />
          {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
          <button>{isLoginForm ? "Login" : "Sign Up"}</button>
        </form>
        <div className={styles.reminder}>
          <span>{isLoginForm ? "Not a member?" : "Already have account?"}</span>
          &nbsp;
          <span
            onClick={() => {
              resetForm();
              setIsLoginForm(!isLoginForm);
            }}
          >
            {isLoginForm ? "Signup" : "Login"}
          </span>
        </div>
        <Transition isShow={regLoading || loginLoading}>
          <Loading />
        </Transition>
      </div>
    </Transition>
  );
};

export default Login;
