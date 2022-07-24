import React from "react";
import "./ProductList.scss";
import Header from "../../components/header/Header";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import Products from "../../../src/pages/home/products/Products";
import Filter from "./Filter";
const ProductList = () => {
  return (
    <div className="product-list">
      <Header className="header" />
      <Filter />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
