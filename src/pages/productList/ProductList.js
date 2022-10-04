import React, { useState } from "react";
import "./ProductList.scss";
import Header from "../../components/header/Header";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import Products from "../../../src/pages/home/products/Products";
import Filter from "./Filter";
import { useParams } from "react-router-dom";
const ProductList = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  return (
    <div className="product-list">
      <Header className="header" />
      <Filter filters={filters} setFilters={setFilters} setSort={setSort} />
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
