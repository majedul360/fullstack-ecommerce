import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.scss";
const Category = ({ category }) => {
  const { img, title, cat } = category;
  const navigate = useNavigate();
  return (
    <div className="category" onClick={() => navigate(`/products/${cat}`)}>
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
