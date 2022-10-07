import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import { Registar } from "./pages/registar/Registar";
import Success from "./pages/success/Success";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/register" element={<Registar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
