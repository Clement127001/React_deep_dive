import { useDispatch } from "react-redux";
import { addCartItem } from "../utils/store/cartSlice";
import { IMG_URL } from "../utils/constants";
import { star } from "../asset";
import { useState } from "react";

const MenuItem = ({ dish }) => {
  const dispatch = useDispatch();
  const [incr, setInc] = useState(0);

  // console.log(dish);
  const {
    imageId,
    ratings,
    defaultPrice,
    price,
    name,
    isVeg,
    description,
    id,
  } = dish;

  const { rating, ratingCount } = ratings.aggregatedRating;

  const addCartHandler = () => {
    const data = {
      name,
      price,
      defaultPrice,
      price,
      id,
      quantity: 1,
      imageId,
    };
    setInc(1);
    dispatch(addCartItem(data));
  };

  return (
    <div className="dish mt-4 ">
      <div className="dish-details ml-2">
        <h3 className="font-sans text-lg">{name}</h3>
        {description && <p className="dish-description">{description}</p>}

        <div className="dish-additional">
          <div className={isVeg ? "veg" : "non-veg"}>
            <div></div>
          </div>
          <span></span>
          {rating ? (
            <div className="dish-rating">
              <h4>
                <span>
                  <img src={star} className="dish-star" alt="star-rating" />
                </span>
                {rating && rating}
              </h4>
              <h4>({rating && ratingCount})</h4>
            </div>
          ) : (
            <h4>No rating yet</h4>
          )}
          <span></span>
          <p>&#8377;{price / 100 || defaultPrice / 100}</p>
        </div>
      </div>

      <div className="relative">
        <div className="dish-image h-[180px]">
          {imageId ? (
            <img
              src={IMG_URL + imageId}
              alt={name}
              className="w-[200px] h-full"
            />
          ) : (
            <p>No image availabe</p>
          )}
        </div>
        <button
          className="font-sans absolute right-[35px] bottom-[-10px] bg-black text-white py-4 px-4 rounded-lg shadow-xl btn-inc"
          onClick={addCartHandler}
          incr={incr}
          onAnimationEnd={() => setInc(0)}
        >
          Add to cart <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
