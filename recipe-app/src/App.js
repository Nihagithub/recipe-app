import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home wishlist={wishlist} setWishlist={setWishlist} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
