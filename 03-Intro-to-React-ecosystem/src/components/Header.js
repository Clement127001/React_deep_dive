import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../utils/store/userSlice";
import { logo, cartIcon } from "../asset";

export default Header = () => {
  const userInfo = useSelector((store) => store.user.userInfo);
  const cartInfo = useSelector((store) => store.cart);

  const cartLength = Object.keys(cartInfo.cartItems).length;
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
            <Link to="/cart" className="flex items-center relative">
              <img src={cartIcon} alt="your cart" width={40} />
              <span
                className=" absolute top-[-15px] right-[-20px] 
              px-2 py-[2px] bg-[#c14d2a] text-white text-sans rounded-lg ml-2 font-semibold text-sm"
                data-testid="cartCount"
              >
                {cartLength}
              </span>
            </Link>
          </li>
          {userInfo && userInfo.name ? (
            <button className="secondary-btn btn">
              <Link onClick={logoutUserHandler}>Logout</Link>
            </button>
          ) : (
            <Link
              className="border-2 border-solid border-[#c14d2a] bg-white text-[#c14d2a] font-sans py-2 px-4 rounded-lg"
              to="/login"
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};
