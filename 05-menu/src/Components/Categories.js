import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="section-center">
      <div className="btn-container">
        {categories.map((category) => {
          return (
            <button
              className="filter-btn"
              key={category}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
