import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { fetchRecipesByIngredient } from "../utils/api";
import "../styles/Home.css";

const Home = ({ wishlist, setWishlist }) => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredient) => {
    const results = await fetchRecipesByIngredient(ingredient);
    setRecipes(results);
  };

  const handleAddToWishlist = (recipe) => {
    if (!wishlist.some((item) => item.idMeal === recipe.idMeal)) {
      setWishlist([...wishlist, recipe]);
    }
  };

  return (
    <div className="home">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <RecipeList
        recipes={recipes}
        onAddToWishlist={handleAddToWishlist}
        isWishlist={false}
      />
    </div>
  );
};

export default Home;
