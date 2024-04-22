import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import logo from "../asset/mova-logo.webp";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo: user } = useSelector((store) => store.user);
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
  return (
    <div className="relative flex justify-between items-center z-10  py-2 px-8 sm:px-16 bg-black bg-opacity-80 bg-blend-darken">
      <NavLink to="/browse">
        <img src={logo} alt="home" width={48} />
      </NavLink>

      {user && (
        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              src={USER_AVATAR}
              className="w-10 h-10 object-cover rounded-full"
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
      )}
    </div>
  );
};

export default Header;
