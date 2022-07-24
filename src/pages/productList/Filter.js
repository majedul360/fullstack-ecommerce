import React from "react";
import "./Filter.scss";
const Filter = () => {
  return (
    <div className="filter">
      <h3>dresses</h3>
      <div className="filter-container">
        <div className="color-size">
          <span>filter products:</span>
          <select name="colors" id="colors">
            <option value="color">color</option>
            <option value="white">white</option>
            <option value="balck">balck</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
          </select>
          <select name="size" id="size" style={{ marginLeft: "2rem" }}>
            <option value="size">size</option>
            <option value="s">S</option>
            <option value="xs">XS</option>
            <option value="md">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="sort-container">
          <span>sort products:</span>
          <select name="colors" id="colors">
            <option value="newest">newest</option>
            <option value="asc">price(asc)</option>
            <option value="dsc">price(dsc)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
