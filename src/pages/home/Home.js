import React from "react";
import Header from "../../components/header/Header";
import Categories from "./categories/Categories";
import Slider from "./slider/Slider";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="sections">
        <Slider className="slide-container" />
        <Categories className="categories" />
      </div>
    </div>
  );
};

export default Home;
