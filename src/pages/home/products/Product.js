import React from "react";
import "./Product.scss";
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
const Product = ({ product }) => {
  return (
    <div className="product">
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

export default Product;
