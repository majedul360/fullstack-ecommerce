import React from "react";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>newsletter</h2>
      <p>Get timely updates from your favorite products.</p>
      <div className="letter-form">
        <input type="text" placeholder="Your email" />
        <button>submit</button>
      </div>
    </div>
  );
};

export default Newsletter;
