import React from "react";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Product.scss";
import SingleProduct from "./SingleProduct";
const Product = () => {
  return (
    <div className="product-page">
      <Header className="header" />
      <SingleProduct />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
