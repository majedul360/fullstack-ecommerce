import React from "react";
import Header from "../../components/header/Header";
import Categories from "./categories/Categories";
import Slider from "./slider/Slider";
import "./Home.scss";
import Products from "./products/Products";
import Newsletter from "./newsletter/Newsletter";
import Footer from "./footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="sections">
        <Slider className="slide-container" />
        <Categories />
        <Products className="products" />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
