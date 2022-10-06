import React from "react";
import "./Filter.scss";
const Filter = ({ filters, setFilters, setSort, category }) => {
  const handleFilters = (e) => {
    const value = e.target.value.toLowerCase();
    const name = e.target.name;
    setFilters({ ...filters, [name]: value });
  };
  return (
    <div className="filter">
      <h3>{category}</h3>
      <div className="filter-container">
        <div className="color-size">
          <span>filter products:</span>
          <select name="color" id="colors" onChange={handleFilters}>
            <option value="color">color</option>
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
          </select>
          <select
            name="size"
            id="size"
            style={{ marginLeft: "2rem" }}
            onChange={handleFilters}
          >
            <option value="size">size</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="sort-container">
          <span>sort products:</span>
          <select id="colors" onChange={(e) => setSort(e.target.value)}>
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
