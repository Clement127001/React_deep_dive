import React from "react";
import logo from "../asset/mova-logo.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative flex justify-between z-10 bg-gradient-to-b from-black py-4 px-8 sm:px-16">
      <NavLink to="/browse">
        <img src={logo} alt="home" width={48} />
      </NavLink>
    </div>
  );
};

export default Header;
