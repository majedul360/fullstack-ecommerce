import React from "react";
import { popularProducts } from "../../../data";
import Product from "./Product";
import "./Products.scss";
const Products = () => {
  return (
    <div className="products">
      {popularProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
