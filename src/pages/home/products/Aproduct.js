import React from "react";
import "./Aproduct.scss";
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
const Aproduct = ({ product }) => {
  return (
    <div className="a-product">
      <div className="image">
        <img src={product.img} alt="" />
        <div className="icons">
          <SearchOutlined className="icon" />
          <FavoriteBorderOutlined className="icon icon-middle" />
          <ShoppingCartOutlined className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Aproduct;
