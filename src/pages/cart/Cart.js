import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Cart.scss";
import { Add, Remove } from "@material-ui/icons";

const Cart = () => {
  return (
    <div className="cart">
      <Header className="header" />
      <div className="top">
        <p>your bag</p>
        <div className="btn-container">
          <div className="btn-box">
            <button>continue shopping</button>
          </div>
          <div className="btn-box">
            <span>shopping bag (2)</span>
            <span>your wishlist (0)</span>
          </div>
          <div className="btn-box">
            <button className="checkout-btn">checkout now</button>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="info-container">
          <div className="product">
            <div className="details">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                alt=""
              />
              <div className="box">
                <h3>
                  product: <span>thunder shoes</span>
                </h3>
                <h3>
                  ID: <span>2342344982</span>
                </h3>
                <div className="color"></div>
                <h3>
                  size: <span>m</span>
                </h3>
              </div>
            </div>
            <div className="quantity-price">
              <div className="quantity">
                <Add className="icon" />
                <span>2</span>
                <Remove className="icon" />
              </div>

              <div className="price">
                <span>$ 30</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="details">
              <img
                src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                alt=""
              />
              <div className="box">
                <h3>
                  product: <span>thunder shoes</span>
                </h3>
                <h3>
                  ID: <span>2342344982</span>
                </h3>
                <div className="color"></div>
                <h3>
                  size: <span>m</span>
                </h3>
              </div>
            </div>
            <div className="quantity-price">
              <div className="quantity">
                <Add className="icon" />
                <span>2</span>
                <Remove className="icon" />
              </div>

              <div className="price">
                <span>$ 30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-summery">
          <h2>order summery</h2>
          <div className="box">
            <div className="text">
              <p>subtotal</p>
            </div>
            <div className="number">
              <span>$ 80</span>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <p>Estimated shipping</p>
            </div>
            <div className="number">
              <span>$ 5.90</span>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <p>shipping discount</p>
            </div>
            <div className="number">
              <span>$ -5.90</span>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <h3>total</h3>
            </div>
            <div className="number">
              <span>$ 80</span>
            </div>
          </div>
          <button>checkout now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
