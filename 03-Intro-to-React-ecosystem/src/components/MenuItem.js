import { IMG_URL } from "../utils/constants";
import { star } from "../asset";
const MenuItem = ({ dish }) => {
  const { imageId, ratings, defaultPrice, price, name, isVeg, description } =
    dish;

  const { rating, ratingCount } = ratings.aggregatedRating;

  return (
    <div className="dish">
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

        <button className="button-add btn">
          Add to cart <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
