import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = (props) => {
  const { auth } = useSelector((state) => state);
  return auth.isLogged ? props.children : <Navigate to={"/"} replace={true} />;
};

export default AuthGuard;
