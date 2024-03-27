import { IMG_URL } from "../utils/constants";
const MenuItem = ({ dish }) => {
  console.log(dish);
  const { imageId, ratings, defaultPrice, price, name, isVeg } = dish;

  const { rating, ratingCount } = ratings.aggregatedRating;

  return (
    <div className="dish">
      <div className="dish-image">
        {imageId && <img src={IMG_URL + imageId} />}
      </div>
      <div className="dish-details">
        <h4>{name}</h4>
        <div className="dish-additional">
          <p className={isVeg ? "veg" : "non-veg"}>
            <div></div>
          </p>
          <h4>{rating && rating}</h4>
          <h4>{rating && ratingCount}</h4>
        </div>
        <p>&#8377;{price / 100 || defaultPrice / 100}</p>
      </div>
    </div>
  );
};

export default MenuItem;
