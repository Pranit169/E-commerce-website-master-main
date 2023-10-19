import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import LogoWhite from "../products/logo-white.png";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h1>Nebula Nest</h1>
      </div>
      <div className="links">
        <Link to="/"> Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
