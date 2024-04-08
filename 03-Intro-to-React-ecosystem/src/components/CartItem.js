import { useDispatch } from "react-redux";
import {
  removeCartItem,
  reduceCartItem,
  increaseCartItem,
} from "../utils/store/cartSlice";
import { IMG_URL } from "../utils/constants";
import { add, remove, del } from "../asset";
import { useState } from "react";

const CartItem = ({ data }) => {
  const { name, defaultPrice, price, quantity, imageId, id } = data;
  const [incr, setIncr] = useState(0);
  const [decr, setDecr] = useState(0);

  const dispatch = useDispatch();

  const increaseCartHandler = () => {
    setIncr(1);
    dispatch(increaseCartItem(id));
  };

  const reduceCartHandler = () => {
    setDecr(1);
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
            <img
              src={remove}
              alt="remove from cart"
              width={36}
              className="btn-inc"
              onAnimationEnd={() => setDecr(0)}
              decr={decr}
            />
          </button>
          <p className="font-sans font-semibold">{quantity}x</p>
          <button onClick={increaseCartHandler}>
            <img
              src={add}
              alt="add more"
              width={40}
              className="btn-inc"
              onAnimationEnd={() => setIncr(0)}
              incr={incr}
            />
          </button>

          <button onClick={removeCartHandler}>
            <img src={del} alt="remove from cart" width={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
