import React from 'react';

const Filters = ({ selectedCategory, selectedColor, uniqueCategories, uniqueColors, handleCategoryFilter, handleColorFilter }) => {
  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
      <div className="filter-options">
        <span className="font-semibold">Category:</span>
        <label key="all" className="filter-label">
          <input
            className="ml-2"
            type="radio"
            checked={!selectedCategory}
            onChange={() => handleCategoryFilter('')}
          />
          All
        </label>
        {uniqueCategories.map((category) => (
          <label key={category} className="filter-label ml-2">
            <input
              type="radio"
              checked={selectedCategory === category}
              onChange={() => handleCategoryFilter(category)}
            />
            {category}
          </label>
        ))}
      </div>
      <div className="filter-options">
        <span className="font-semibold">Color:</span>
        <label key="all" className="filter-label">
          <input
            className="ml-2"
            type="radio"
            checked={!selectedColor}
            onChange={() => handleColorFilter('')}
          />
          All
        </label>
        {uniqueColors.map((color) => (
          <label key={color} className="filter-label ml-2">
            <input
              type="radio"
              checked={selectedColor === color}
              onChange={() => handleColorFilter(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
