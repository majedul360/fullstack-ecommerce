import React from "react";
import "./Category.scss";
const Category = ({ category }) => {
  const { img, title } = category;
  return (
    <div className="category">
      <div className="image">
        <img src={img} alt="" />
        <div className="content">
          <h3>{title}</h3>
          <span className="btn">shop now</span>
        </div>
      </div>
    </div>
  );
};

export default Category;
