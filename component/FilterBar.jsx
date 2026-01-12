import React from 'react'

export default function FilterBar({ activeCategory, onCategoryChange, categories }) {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          style={{
            margin: "5px",
            backgroundColor: activeCategory === category ? "blue" : "white",
            color: activeCategory === category ? "white" : "black",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
