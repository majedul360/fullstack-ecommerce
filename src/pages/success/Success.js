import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userRequest } from "../../requestMethods";

const Success = () => {
  const { state } = useLocation();
  const data = state.stripeData;
  const cart = state.products;
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);

  useEffect(() => {
    const sendOrder = async () => {
      try {
        const order = await userRequest.post("/orders", {
          userId: user?._id,
          products: cart?.products?.map((product) => {
            return {
              productId: product?._id,
              quantity: product?.quantity,
            };
          }),
          amount: cart?.total,
          address: data?.billing_details?.address,
        });
        console.log(order);
      } catch (err) {
        console.log(err);
      }
    };
    data && sendOrder();
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "20rem" }}>
      <h3
        style={{
          color: "green",
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        payment successful
      </h3>
      <button
        style={{
          textAlign: "center",
          fontSize: "2rem",
          background: "teal",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: ".5rem",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Go home page
      </button>
    </div>
  );
};

export default Success;
