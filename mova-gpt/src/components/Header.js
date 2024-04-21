import React from "react";
import logo from "../asset/mova-logo.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative flex justify-between z-10  py-2 px-8 sm:px-16 bg-black bg-opacity-80 bg-blend-darken">
      <NavLink to="/browse">
        <img src={logo} alt="home" width={48} />
      </NavLink>
    </div>
  );
};

export default Header;
