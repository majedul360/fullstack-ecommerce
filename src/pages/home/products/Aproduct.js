import React from "react";
import "./Aproduct.scss";
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
const Aproduct = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="a-product">
      <div className="image">
        <img src={product.img} alt="" />
        <div className="icons">
          <FavoriteBorderOutlined className="icon icon-middle" />
          <SearchOutlined
            className="icon"
            onClick={() => navigate(`/product/${product?._id}`)}
          />
          <ShoppingCartOutlined className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Aproduct;
