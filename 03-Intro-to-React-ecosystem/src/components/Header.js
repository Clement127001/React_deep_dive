import React from "react";
import FoodAppLogo from "../../logo.png";

export default Header = () => {
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
        </ul>
      </div>
    </nav>
  );
};
