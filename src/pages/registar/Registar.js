import React from "react";
import "./Registar.scss";
export const Registar = () => {
  return (
    <div className="registar">
      <div className="registar-container">
        <h3>registar</h3>
        <form action="">
          <div className="input-group">
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
          </div>
          <input type="submit" value="registar" className="btn" />
        </form>
      </div>
    </div>
  );
};
