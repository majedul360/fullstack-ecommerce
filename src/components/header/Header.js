import { Badge } from "@material-ui/core";
import { Mail, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <p className="deal">Super Deal! Free Shipping on Orders Over $50</p>
      <div className="navbar">
        <div className="search-field">
          <p>EN</p>
          <form action="">
            <input type="search" placeholder="search" />
            <span>
              <Search className="search" />
            </span>
          </form>
        </div>
        <nav>
          <span>home</span>
          <span>Accessories</span>
          <span>Wishlist</span>
          <span>Registar</span>

          <span>Sign in</span>
          <Badge
            badgeContent={4}
            color="primary"
            className="badge"
            overlap="rectangular"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ShoppingCartOutlined className="icon" color="action" />
          </Badge>
        </nav>
      </div>
    </header>
  );
};

export default Header;
