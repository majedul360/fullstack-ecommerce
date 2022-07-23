import React from "react";
import "./Footer.scss";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="box">
        <h2>majedul.</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="icons">
          <Facebook className="icon" />
          <Instagram className="icon" />
          <Twitter className="icon" />
          <Pinterest className="icon" />
        </div>
      </div>
      <div className="box">
        <h3>useful links</h3>
        <div className="links-container">
          <div>
            <p>home</p>
            <p>men fasion</p>
            <p>accessories</p>
            <p>order tracking</p>
            <p>wishlist</p>
          </div>
          <div style={{ marginLeft: "9rem" }}>
            <p>cart</p>
            <p>woman fashion</p>
            <p>my account</p>
            <p>terms</p>
          </div>
        </div>
      </div>
      <div className="box">
        <h3>contact</h3>
        <p className="contact-info">
          <Room />
          <span>chatmohar, pabna, angladesh.</span>
        </p>
        <p className="contact-info">
          <Phone />
          <span>01870-983507</span>
        </p>
        <p className="contact-info">
          <MailOutline />
          <span style={{ textTransform: "none" }}>
            majedulislam393@gmail.com
          </span>
        </p>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
