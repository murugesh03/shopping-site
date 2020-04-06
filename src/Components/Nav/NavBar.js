import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/iconfinder_cart_5962595.png";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <nav className="navbar fixed-top navBar navbar-expand-sm   navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-brand navBar-brand-logo" />
      </Link>
      <ul className="navbar-nav align-items-center ">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>

      <Link to="/cart" className="nav-link ml-auto navBar-cart ">
        <i className="fab fa-opencart"></i>
      </Link>
    </nav>
  );
};

export default NavBar;
