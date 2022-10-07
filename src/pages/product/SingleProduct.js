import React from "react";
import { Add, Remove } from "@material-ui/icons";

import "./SingleProduct.scss";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
const SingleProduct = ({ id }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const { img, title, desc, price } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const result = await publicRequest.get(`/products/find/${id}`);
        setProduct(result?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, []);

  const handleQuantity = (type) => {
    if (type === "dic") {
      quantity > 1 && setQuantity(quantity - 1);
    }
    if (type === "inc") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size,
      })
    );
  };
  return (
    <div className="single-product">
      <div className="img">
        {" "}
        <img src={img} alt="" />
      </div>
      <div className="box">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <p className="price">${price}</p>
        <div className="color-size">
          <div className="colors">
            <span>color:</span>
            {product?.color?.map((c, index) => (
              <div
                key={index}
                className="color"
                style={{ background: `${c}` }}
                onClick={() => setColor(c)}
              ></div>
            ))}
          </div>

          <div className="size">
            <span>size:</span>
            <select onChange={(e) => setSize(e.target.value)}>
              {product?.size?.map((s, index) => (
                <option key={index} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="add-cart-container">
          <div className="add-container">
            <Remove className="icon" onClick={() => handleQuantity("dic")} />
            <span>{quantity}</span>

            <Add className="icon" onClick={() => handleQuantity("inc")} />
          </div>
          <div className="cart-container">
            <button onClick={handleAddToCart}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
