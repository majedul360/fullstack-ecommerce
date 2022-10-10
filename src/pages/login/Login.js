import React from "react";
import { userFailure, userStart, userSuccessful } from "../../redux/userRedux";
import { publicRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";

import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const userInfo = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const doLogin = async () => {
      dispatch(userStart());
      try {
        const res = await publicRequest.post("/auth/login", userInfo);
        localStorage.setItem("accessToken", res?.data?.accessToken);
        dispatch(userSuccessful(res?.data));
      } catch (err) {
        dispatch(userFailure());
      }
    };
    userInfo && doLogin();
  };
  return (
    <div className="login">
      <div className="login-container">
        <h3>login</h3>
        <form action="" onSubmit={handleLogin}>
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input type="submit" value="login" className="btn" />
        </form>
        <p>new to the site? create an account</p>
        <p>forgot password?</p>
      </div>
    </div>
  );
};

export default Login;
