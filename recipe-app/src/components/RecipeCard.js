import React from "react";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe, onAddToWishlist, onRemoveFromWishlist, isWishlist }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <button
        onClick={() => (isWishlist ? onRemoveFromWishlist(recipe) : onAddToWishlist(recipe))}
      >
        {isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default RecipeCard;
