import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userFailure, userStart, userSuccess } from "../../redux/userRedux";
import { publicRequest } from "../../requestMethods";
import "./Login.scss";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const sendUser = async () => {
      dispatch(userStart());
      try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(userSuccess(res.data));
        localStorage.setItem("accessToken", res?.data?.accessToken);
        navigate("/");
      } catch (err) {
        dispatch(userFailure());
      }
    };
    user && sendUser();
  };
  return (
    <div className="login">
      <div className="login-container">
        <h3>login</h3>
        <form action="" onSubmit={handleForm}>
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
