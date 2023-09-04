import React from "react";

function Filter({ onFilterChange }) {
  const handleTitleChange = (e) => {
    onFilterChange({ title: e.target.value });
  };

  const handleRatingChange = (e) => {
    onFilterChange({ rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={handleRatingChange}
      />
    </div>
  );
}

export default Filter;