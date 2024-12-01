import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading

  const handleSearch = async () => {
    if (ingredient) {
      setLoading(true); // Set loading to true when search is triggered
      await onSearch(ingredient); // Assuming onSearch fetches data
      setLoading(false); // Set loading back to false after data is fetched
    }
  };

  return (
    <div className="search-bar">
      {!loading && (
        <>
          <input
            type="text"
            placeholder="Enter an ingredient..."
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </>
      )}
    </div>
  );
};

export default SearchBar;
