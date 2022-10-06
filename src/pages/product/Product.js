import React from "react";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Product.scss";
import SingleProduct from "./SingleProduct";
import { useParams } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  return (
    <div className="product-page">
      <Header className="header" />
      <SingleProduct id={id} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
