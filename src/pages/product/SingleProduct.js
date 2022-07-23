import React from "react";
import { Add, Remove } from "@material-ui/icons";

import "./SingleProduct.scss";
const SingleProduct = () => {
  return (
    <div className="single-product">
      <div className="img">
        {" "}
        <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
      </div>
      <div className="box">
        <p className="title">Denim Jumpsuit</p>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
        </p>
        <p className="price">$ 20</p>
        <div className="color-size">
          <div className="colors">
            <span>color:</span>
            <div className="color" style={{ background: "black " }}></div>
            <div className="color" style={{ background: "darkBlue " }}></div>
            <div className="color" style={{ background: "gray " }}></div>
          </div>

          <div className="size">
            <span>size:</span>
            <select name="cars" id="cars">
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="lg">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
        </div>

        <div className="add-cart-container">
          <div className="add-container">
            <Add className="icon" />
            <span>1</span>
            <Remove className="icon" />
          </div>
          <div className="cart-container">
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
