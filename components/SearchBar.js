import React from 'react';

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="w-full sm:w-1/4 p-2 border border-orange-500 rounded-md mb-2 sm:mb-0 sm:mr-4"
      onChange={handleSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
