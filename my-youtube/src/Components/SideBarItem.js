import React from "react";
import { NavLink } from "react-router-dom";

const SideBarItem = ({ name, to, src }) => {
  return (
    <NavLink to={to} className="flex items-center justify-between ">
      <img src={src} alt="home" width={24} />
      <p className="font-semibold text-lg">{name}</p>
    </NavLink>
  );
};

export default SideBarItem;
