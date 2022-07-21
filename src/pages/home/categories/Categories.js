import React from "react";
import { categories } from "../../../data";
import Category from "./Category";
import "./Categories.scss";
const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
