import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/Store/sideBarSlice";
import { hamBurger, logo, search, user } from "../assets";
const Header = () => {
  const dispatch = useDispatch();
  const hamBurgerClikHandler = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="flex justify-between items-center px-6 shadow-lg">
      <div className="flex justify-center items-center">
        <img
          src={hamBurger}
          width={24}
          alt="sidebar control"
          className=" cursor-pointer ml-5"
          onClick={hamBurgerClikHandler}
        />
        <NavLink to="/">
          <img src={logo} width={160} alt="home" />
        </NavLink>
      </div>

      <div className="flex items-center w-[500px]">
        <input
          type="text"
          placeholder="Search your favorite"
          className="border-2 border-gray-200 p-2 pl-4  w-full rounded-full rounded-r-none"
        />
        <div className="border-2 border-gray-200 p-2  bg-gray-200 border-l-0 rounded-r-full cursor-pointer">
          <img src={search} alt="search" width={27} />
        </div>
      </div>

      <div className="h-fit cursor-pointer">
        <img src={user} alt="user-img" width={36} />
      </div>
    </div>
  );
};

export default Header;
