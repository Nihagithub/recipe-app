import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Recipe App</Link>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
    </header>
  );
};

export default Header;