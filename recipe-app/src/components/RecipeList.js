import React from "react";
import RecipeCard from "./RecipeCard";
import "../styles/RecipeList.css";

const RecipeList = ({ recipes, onAddToWishlist, onRemoveFromWishlist, isWishlist }) => {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found!</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onAddToWishlist={onAddToWishlist}
          onRemoveFromWishlist={onRemoveFromWishlist}
          isWishlist={isWishlist}
        />
      ))}
    </div>
  );
};

export default RecipeList;
