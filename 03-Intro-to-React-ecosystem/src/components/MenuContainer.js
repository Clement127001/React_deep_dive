import { star, location } from "../asset";
import { IMG_URL } from "../utils/constants";
import MenuItems from "./MenuItems";

const MenuContainer = ({ menus }) => {
  let data = menus?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const resDetails = menus?.data?.cards[2]?.card?.card?.info;
  const {
    id,
    name,
    city,
    avgRating,
    cloudinaryImageId,
    costForTwoMessage,
    isOpen,
    totalRatingsString,
    cuisines,
  } = resDetails;

  data = data.slice(2, data.length - 1);
  return (
    <div className="menu-container">
      <div className="res-details">
        <img
          src={IMG_URL + cloudinaryImageId}
          alt={name + " dish image"}
          loading="lazy"
        />

        <div className="res-info">
          <h2 className="heading">{name}</h2>
          <div>
            <h3>
              <span>
                <img
                  src={location}
                  className="location"
                  alt="location-pin-img"
                />
              </span>
              {city}
            </h3>
            <h3 className={isOpen ? "res-open" : "res-close"}>
              {isOpen ? "Open" : "Close"}
            </h3>
          </div>

          <div className="res-additional">
            <div>
              <span>
                <img className="dish-star" src={star} alt="star-rating" />
              </span>
              {avgRating}
            </div>
            <p>({totalRatingsString})</p>
            <p className="cuisines">{cuisines.join(", ")}</p>
          </div>

          <h4 className="price">{costForTwoMessage}</h4>
        </div>
      </div>
      <h2 className="heading">Available Dishes </h2>
      <div className="menu-items">
        {data.map((item, index) => (
          <MenuItems
            key={item?.card?.card.title + "-" + index}
            title={item?.card?.card.title}
            menus={item?.card?.card?.itemCards}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
