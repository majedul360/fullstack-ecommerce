import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h3>login</h3>
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="submit" value="login" className="btn" />
        </form>
        <p>new to the site? create an account</p>
        <p>forgot password?</p>
      </div>
    </div>
  );
};

export default Login;
