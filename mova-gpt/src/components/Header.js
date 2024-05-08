import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { toggleSearch } from "../utils/gptSlice";
import { USER_AVATAR } from "../utils/constants";
import { supportedLanguage } from "../utils/langConstants";
import logo from "../asset/mova-logo.webp";
import openNav from "../asset/menu.png";
import closeNav from "../asset/menu-close.png";
import { changeLanguage } from "../utils/languageSlice";
import { toggleNav } from "../utils/navSlice";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo: user } = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);
  const showNav = useSelector((store) => store.nav.showNav);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleSearchToggle = () => {
    dispatch(toggleSearch());
  };

  const languageChangeHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const toggleNavHandler = () => {
    dispatch(toggleNav());
  };
  return (
    <div className="relative flex justify-between items-center z-10  py-4 px-8 sm:px-16 bg-black bg-opacity-80 bg-blend-darken">
      <NavLink to="/browse">
        <img src={logo} alt="home" width={48} />
      </NavLink>

      <img className="w-8 md:hidden" src={openNav} onClick={toggleNavHandler} />

      {showNav && (
        <div
          className="fixed top-0 left-0 h-[100vh] w-full z-1 bg-black bg-opacity-55 md:hidden"
          onClick={toggleNavHandler}
        ></div>
      )}

      {user && (
        <div
          className={`flex max-md:fixed max-md:top-0 max-md:right-0 max-md:h-screen min-w-[220px] transition-all duration-500 ${
            !showNav ? " max-md:translate-x-[300px]" : " max-md:translate-x-0"
          } max-md:bg-black justify-end `}
        >
          <div className="flex max-md:flex-col max-md:items-end max-md:p-6 items-center gap-8">
            <img
              src={closeNav}
              alt="close navbar"
              className="w-8 md:hidden"
              onClick={toggleNavHandler}
            />
            {showSearch && (
              <select
                className="bg-slate-200 text-black font-sans  py-1 px-2 rounded-md"
                onChange={languageChangeHandler}
              >
                {supportedLanguage.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </select>
            )}

            <NavLink
              to="/movie/watch-later"
              className="font-sans text-white hover:text-zinc-300 font-semibold"
            >
              Watch later
            </NavLink>
            <button
              className="cursor-pointer text-white hover:text-zinc-300 font-sans font-semibold"
              onClick={handleSearchToggle}
            >
              {showSearch ? "Go back home" : "Search something new"}
            </button>

            <div className="flex flex-col justify-center items-center ">
              <img
                src={USER_AVATAR}
                className="w-10 h-10 object-cover rounded-full mr-2"
                alt="user image"
              />
              <p className="font-sans text-md text-white">
                {user && user?.displayName}
              </p>
            </div>
            <button
              className="font-sans text-md text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
