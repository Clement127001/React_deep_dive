import React, { useState } from "react";
import FoodAppLogo from "../../logo.png";
import { NavLink } from "react-router-dom";

export default Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");

  const toggleLogin = () => {
    setLoginStatus((prev) => (prev === "Login" ? "Logout" : "Login"));
  };
  return (
    <nav className="header">
      <div className="logo">
        <img src={FoodAppLogo} />
      </div>

      <div className="nav-item">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <button className="secondary-btn" onClick={toggleLogin}>
            {loginStatus}
          </button>
        </ul>
      </div>
    </nav>
  );
};
