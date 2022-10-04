import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Aproduct from "./Aproduct";
import "./Products.scss";
const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        );

        setProducts(result?.data);
      } catch (errors) {
        console.log(errors);
      }
    };
    getProducts();
  }, [category]);
  useEffect(() => {
    setFilterProducts(
      products?.filter((iteam) => {
        return Object.entries(filters).every(([key, value]) => {
          return iteam[key].includes(value);
        });
      })
    );
  }, [category, filters]);

  return (
    <div className="products">
      {products?.map((product) => (
        <Aproduct key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
