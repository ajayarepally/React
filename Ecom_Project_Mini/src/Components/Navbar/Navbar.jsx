import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>DEV.mart</h1>
      <div className="nav_links">
        <Link to="/products">
          <span className="nav_link">Products</span>
        </Link>
        <Link to="/recipes">
          <span className="nav_link">Recipes</span>
        </Link>
        <Link to="/cartItems">
          <FaCartArrowDown className="cartIcon" />
        </Link>
        <Link to="/favItems">
          <FaHeart className="favIcon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;