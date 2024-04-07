import { useDispatch } from "react-redux";
import {
  removeCartItem,
  reduceCartItem,
  increaseCartItem,
} from "../utils/store/cartSlice";
import { IMG_URL } from "../utils/constants";
import { add, remove, del } from "../asset";

const CartItem = ({ data }) => {
  const { name, defaultPrice, price, quantity, imageId, id } = data;
  const dispatch = useDispatch();

  const increaseCartHandler = () => {
    dispatch(increaseCartItem(id));
  };

  const reduceCartHandler = () => {
    dispatch(reduceCartItem(id));
  };

  const removeCartHandler = () => {
    dispatch(removeCartItem(id));
  };

  return (
    <div className="mt-5 border-t-2 border-solid border-gray-100 pt-4 flex  items-center gap-10 mx-5">
      <div className="flex justify-center items-center w-[200px]">
        {imageId ? (
          <img
            className="w-[200px] h-[140px] object-cover rounded-2xl "
            src={IMG_URL + imageId}
            alt={name}
          />
        ) : (
          <p>No Image available</p>
        )}
      </div>

      <div className="flex justify-between w-full">
        <div>
          <h2 className="font-sans font-semibold text-xl">{name}</h2>
          <p className="font-sans text-green-600 mt-2 font-semibold">
            &#8377; {price / 100 || defaultPrice / 100}
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <button onClick={reduceCartHandler}>
            <img src={remove} alt="remove from cart" width={36} />
          </button>
          <p className="font-sans font-semibold">{quantity}x</p>
          <button onClick={increaseCartHandler}>
            <img src={add} alt="add more" width={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
