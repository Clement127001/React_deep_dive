import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../asset/mova-logo.webp";

const Header = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  return (
    <div className="relative flex justify-between z-10  py-2 px-8 sm:px-16 bg-black bg-opacity-80 bg-blend-darken">
      <NavLink to="/browse">
        <img src={logo} alt="home" width={48} />
      </NavLink>

      <button className="text-white" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Header;
