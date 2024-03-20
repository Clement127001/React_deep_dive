import React from "react";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    cloudinaryImageId,
    cuisines,
    name,
    costForTwo,
    avgRatingString,
    sla,
  } = resData;
  return (
    <div className="restaurant-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <div className="restuarant-group">
          <p>{avgRatingString}</p>
          <span></span>
          <p>{sla.deliveryTime}</p>
          <span></span>
          <p>{costForTwo}</p>
        </div>

        <button className="restaurant-action">View Details</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
