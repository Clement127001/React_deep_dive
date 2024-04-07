import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCartItems } from "../utils/store/cartSlice";
import CartItem from "./CartItem";
import { noItem, del } from "../asset";
import { useEffect } from "react";

const Cart = () => {
  const { cartItems, checkoutAmount } = useSelector((store) => store.cart);
  const { userInfo } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.name) return navigate("/login");
  }, []);

  const cartLength = Object.keys(cartItems).length;

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCartItems());
  };

  const noItemElement = (
    <div className="flex flex-col justify-center items-center min-h-[600px] gap-8">
      <h2 className="font-bold font-sans text-xl">Cart is empty</h2>
      <img className=" max-w-[400px]" src={noItem} alt="no item in cart" />
      <Link
        to="/"
        className="font-sans text-green-500 px-4 py-2 rounded-lg text-lg border-2 border-green-500 border-solid"
      >
        Add Items{" + "}
      </Link>
    </div>
  );

  let items = [];

  for (const elem in cartItems) {
    items.push(<CartItem data={cartItems[elem]} key={elem} />);
  }

  const cartElement = (
    <div className="py-4 px-8 shadow-xl rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-sans text-2xl">Order Summary</h2>
        <Link
          to="/"
          className=" text-green-500  font-sans font-semibold  
          px-4 py-2 border-solid border-2 border-green-500 rounded-2xl"
        >
          Add Items
        </Link>

        <button
          className="border-2 border-solid border-red-500 py-2 px-4 rounded-md flex gap-2 items-center"
          onClick={clearCartHandler}
        >
          <img src={del} width={16} />
          <span className="text-red-500 font-sans"> Clear cart</span>
        </button>
      </div>
      <div className="my-6 max-h-[600px] overflow-scroll">{items}</div>

      <button className="w-full shadow-green-200 shadow-lg  bg-green-600 py-4 rounded-3xl font-sans text-white font-semibold mb-4 text-lg">
        Place Order - &#8377; {checkoutAmount.toFixed(2)}
      </button>
    </div>
  );

  return (
    <div className=" my-10 flex w-full min-h-screen justify-center items-center">
      {cartLength == 0 ? noItemElement : cartElement}
    </div>
  );

  //have to build the cartComponent
};

export default Cart;
