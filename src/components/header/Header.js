import { Badge } from "@material-ui/core";
import { Mail, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerSuccess } from "../../redux/registerUserRedux";
import "./Header.scss";
const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.quantity);
  const registerUser = useSelector((state) => state.registerUser);
  const dispatch = useDispatch();
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
          <Link className="nav-iteam" to="/">
            home
          </Link>
          <span>Accessories</span>
          <span>Wishlist</span>
          <Link to="/register" className="nav-iteam">
            Register
          </Link>

          {registerUser?.user ? (
            <span
              className="nav-iteam"
              onClick={() => dispatch(registerSuccess(null))}
            >
              Log out
            </span>
          ) : (
            <span className="nav-iteam">Sign in</span>
          )}
          <Badge
            badgeContent={cart}
            color="primary"
            className="badge"
            overlap="rectangular"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          >
            <ShoppingCartOutlined className="icon" color="action" />
          </Badge>
        </nav>
      </div>
    </header>
  );
};

export default Header;
