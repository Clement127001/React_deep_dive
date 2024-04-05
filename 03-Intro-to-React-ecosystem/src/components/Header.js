import { logo, online } from "../asset";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import { useContext } from "react";
import { LoginContext } from "../utils/store/loginContext";

export default Header = () => {
  const isOnline = useOnlineStatus();

  const { userInfo, logoutUser } = useContext(LoginContext);

  return (
    <nav className="header">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="home page" />
        </Link>
      </div>

      <div className="nav-item">
        <ul>
          {userInfo && userInfo.name && (
            <li>
              <p className="text-lg font-normal text-gray-600">
                Hello,{" "}
                <span className="text-xl text-black font-semibold">
                  {userInfo.name}
                </span>{" "}
              </p>
            </li>
          )}
          <li className="online-status">
            status :
            {isOnline ? (
              <img src={online} alt="online" width={36} height={36} />
            ) : (
              "🛬"
            )}
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          {userInfo && userInfo.name ? (
            <button className="secondary-btn btn">
              <Link onClick={logoutUser}>Logout</Link>
            </button>
          ) : (
            <button className="secondary-btn btn">
              <Link to="/login">Login</Link>
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};
