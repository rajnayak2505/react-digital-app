import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => {
  
  const [isToggled, setToggled] = useState(false);

  const toggleHandler = () => {
    setToggled(!isToggled);
    // console.log(isToggled);
  };

  return (
    <>
      <div className="header grid flex jcsb aic">
        <div className="hamburger flex ffc" onClick={toggleHandler}>
          <span className={`first-bar ${!isToggled}`}></span>
          <span className={`sec-bar ${!isToggled}`}></span>
          <span className={`last-bar ${!isToggled}`}></span>
        </div>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div className="flex jcsb aic">
          <ul className={`nav flex aic ${isToggled}`}>
            <NavLink
              to="/"
              exact
              activeClassName="active"
              onClick={toggleHandler}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about-us"
              exact
              activeClassName="active"
              onClick={toggleHandler}
            >
              <li>About Us</li>
            </NavLink>
          </ul>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
