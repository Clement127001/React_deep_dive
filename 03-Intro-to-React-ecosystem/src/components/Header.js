import { logo } from "../asset";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../utils/store/userSlice";

export default Header = () => {
  const userInfo = useSelector((store) => store.user.userInfo);
  const dispatch = useDispatch();

  const logoutUserHandler = () => {
    dispatch(logoutUser("user"));
  };

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
              <Link onClick={logoutUserHandler}>Logout</Link>
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
