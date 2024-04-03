import { logo, online } from "../asset";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import { useState, useEffect } from "react";

export default Header = () => {
  const isOnline = useOnlineStatus();

  const [user, setUser] = useState("");

  // useEffect(() => {
  //   let userTimer;

  //   fun();

  //   return () => clearTimeout(userTimer);
  // }, []);

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
          {!user ? (
            <button className="secondary-btn btn">
              <Link to="/login">Login</Link>
            </button>
          ) : (
            <p>Hello, {user}</p>
          )}
        </ul>
      </div>
    </nav>
  );
};
