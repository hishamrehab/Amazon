import React from "react";
// import logoImg from "../images/logo.png";
import HeaderLogo from "../images/header-logo.png";
import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return <div className="header">
    <Link to="/">
      <img className="header-logo" src={HeaderLogo} alt="" />
    </Link>
    <div className="header-search">
      <input className="header-searchInput" type="text" />
      <CiSearch className="header-searchIcon" />
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <div className="header-optionLineOne">
              Hello Gest
            </div>
            <div className="header-optionLineTwo">
              Sign In</div>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">
              Returns
            </span>
            <span className="header-optionLineTwo"> & Orders</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-optionLineOne">
            Your
          </span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

        <Link to="/checkOut">
          <div className="header-optionBasket">
            <span className="FaShoppingCart-Icon"><FaShoppingCart /></span>
            <span className="header-optionLineTwo header-basketCount">
              5
            </span>
          </div>
        </Link>



      </div>

    </div>
  </div>;
};

export default Header;
