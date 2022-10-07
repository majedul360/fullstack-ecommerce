import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Cart.scss";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const vat = parseFloat(cart?.total * (5 / 100));

  const total = parseFloat(cart?.total + vat + 2);
  const stripePublishKey =
    "pk_test_51L0lILJNGKoLywBjp8ooTKXefeJR3jAchauqV3hNucQqldxxJgMMgMSPA6oQuRnyZ5Fl0l2TNHQ3ACzSHmbJS3yy00KApTWBSR";
  const navigate = useNavigate();
  const onToken = (token) => {
    const sendId = async () => {
      try {
        const res = await publicRequest.post("/checkout/payment", {
          tokenId: token?.id,
          amount: total,
          currency: "USD",
        });
        if (res.data) {
          navigate("/success");
        }
      } catch (err) {
        console.log(err);
      }
    };
    sendId();
  };
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
          {cart?.products?.map((product, index) => (
            <div className="product" key={index}>
              <div className="details">
                <img src={product?.img} alt="" />
                <div className="box">
                  <h3>
                    product: <span>{product?.title}</span>
                  </h3>
                  <h3>
                    ID: <span>{product?._id}</span>
                  </h3>
                  <div
                    className="color"
                    style={{ background: `${product?.color}` }}
                  ></div>
                  <h3>
                    size: <span>{product?.size}</span>
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
                  <span>${product?.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-summery">
          <h2>order summery</h2>
          <div className="box">
            <div className="text">
              <p>subtotal</p>
            </div>
            <div className="number">
              <span>${cart?.total}</span>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <p>vat</p>
            </div>
            <div className="number">
              <span>${vat}</span>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <p>delivary charge</p>
            </div>
            <div className="number">
              <span>$2</span>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <h3>total</h3>
            </div>
            <div className="number">
              <span>${total}</span>
            </div>
          </div>
          <StripeCheckout
            name="e-commerce"
            amount={total * 100}
            currency="USD"
            stripeKey={stripePublishKey}
            shippingAddress
            billingAddress
            token={onToken}
          >
            <button>checkout now</button>
          </StripeCheckout>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
