import { useDispatch } from "react-redux";
import { addCartItem } from "../utils/store/cartSlice";
import { IMG_URL } from "../utils/constants";
import { star } from "../asset";
const MenuItem = ({ dish }) => {
  const dispatch = useDispatch();

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

    dispatch(addCartItem(data));
  };

  return (
    <div className="dish mt-4">
      <div className="dish-image">
        {imageId ? (
          <img src={IMG_URL + imageId} alt={name} />
        ) : (
          <p>No image availabe</p>
        )}
      </div>
      <div className="dish-details">
        <h3>{name}</h3>
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

        <button className="button-add btn font-sans" onClick={addCartHandler}>
          Add to cart <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
