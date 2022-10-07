import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userFailure, userStart, userSuccess } from "../../redux/userRedux";

import { publicRequest } from "../../requestMethods";
import "./Registar.scss";
export const Registar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const registerUser = {
      username: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const sendUser = async () => {
      dispatch(userStart());
      try {
        const res = await publicRequest.post("/auth/register", registerUser);
        dispatch(userSuccess(res.data));
        localStorage.setItem("accessToken", res?.data?.accessToken);
        navigate("/");
      } catch (e) {
        dispatch(userFailure());
      }
    };

    registerUser && sendUser();
  };
  return (
    <div className="registar">
      <div className="registar-container">
        <h3>registar</h3>
        <form action="" onSubmit={handleForm}>
          <div className="input-group">
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="username" name="name" />
            <input type="email" placeholder="email" name="email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="confirm password" />
          </div>
          <input type="submit" value="registar" className="btn" />
        </form>
      </div>
    </div>
  );
};
