import React, { useState } from "react";
import FoodAppLogo from "../../logo.png";

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
          <li>Home</li>
          <li>Restaurants</li>
          <li>About</li>
          <li>Cart</li>
          <button className="secondary-btn" onClick={toggleLogin}>
            {loginStatus}
          </button>
        </ul>
      </div>
    </nav>
  );
};
