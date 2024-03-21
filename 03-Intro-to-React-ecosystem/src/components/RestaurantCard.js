import React from "react";
import { IMG_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    cuisines,
    name,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData;
  return (
    <div className="restaurant-card">
      <img src={IMG_URL + cloudinaryImageId} />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <div className="restuarant-group">
          <p>{avgRating ? avgRating : "New"}</p>
          <span></span>
          <p>{deliveryTime} mins</p>
          <span></span>
          <p>{costForTwo}</p>
        </div>

        <button className="primary-btn">View Details</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
