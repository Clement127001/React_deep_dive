import React, { useState } from "react";
import { logo, online, offline } from "../asset";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";

export default Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");

  const toggleLogin = () => {
    setLoginStatus((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  const isOnline = useOnlineStatus();

  return (
    <nav className="header">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="home page" />
        </Link>
      </div>

      <div className="nav-item">
        <ul>
          <li className="online-status">
            status :
            {isOnline ? (
              <img src={online} alt="online" width={36} height={36} />
            ) : (
              "🛬"
            )}
          </li>
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
          <button className="secondary-btn btn" onClick={toggleLogin}>
            {loginStatus}
          </button>
        </ul>
      </div>
    </nav>
  );
};
