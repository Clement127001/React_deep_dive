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
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo: user } = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);
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
  return (
    <div className="relative flex justify-between items-center z-10  py-4 px-8 sm:px-16 bg-black bg-opacity-80 bg-blend-darken">
      <NavLink to="/browse">
        <img src={logo} alt="home" width={48} />
      </NavLink>

      {user && (
        <div className="flex gap-6 items-center">
          <div className="flex  items-center gap-8">
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
            <button
              className="border-2  border-white py-2 px-4 rounded-lg cursor-pointer bg-transparent text-white font-sans font-semibold"
              onClick={handleSearchToggle}
            >
              {showSearch ? "Go back home" : "Search something new"}
            </button>

            <div className="flex flex-col justify-center items-center">
              <img
                src={USER_AVATAR}
                className="w-10 h-10 object-cover rounded-full mr-2"
                alt="user image"
              />
              <p className="font-sans text-md text-white">
                {user && user?.displayName}
              </p>
            </div>
          </div>

          <button
            className="font-sans text-md text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
