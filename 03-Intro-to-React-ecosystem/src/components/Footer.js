import React from "react";
import { logoAlt } from "../asset";
import { Link } from "react-router-dom";

export default Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black text-white font-sans py-5 px-10 flex justify-between items-center">
      <img src={logoAlt} alt="navigate to home" width={72} />

      <h4>{year} Zesty Zing. All Rights Reserved.</h4>
      <div className="flex justify-evenly min-w-[300px]">
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="">Contact Us</Link>
      </div>
    </div>
  );
};
