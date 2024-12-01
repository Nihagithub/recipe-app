import React from "react";
import RecipeList from "../components/RecipeList";
import "../styles/Wishlist.css";

const Wishlist = ({ wishlist, setWishlist }) => {
  const handleRemoveFromWishlist = (recipe) => {
    const updatedWishlist = wishlist.filter((item) => item.idMeal !== recipe.idMeal);
    setWishlist(updatedWishlist);
  };

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      <RecipeList
        recipes={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        isWishlist={true}
      />
    </div>
  );
};

export default Wishlist;
