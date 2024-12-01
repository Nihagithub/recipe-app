import React, { useState } from "react";
import "../styles/Filters.css";

const Filters = ({ onApplyFilters }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleApplyFilters = () => {
    onApplyFilters(filter);
  };

  return (
    <div className="filters">
      <select value={filter} onChange={handleFilterChange}>
        <option value="">Select Filter</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <button onClick={handleApplyFilters}>Apply</button>
    </div>
  );
};

export default Filters;
