import React from "react";
import { NavLink } from "react-router-dom";
import { IMG_URL } from "../utils/constants";
import { star } from "../asset";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    cloudinaryImageId,
    cuisines,
    name,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData;
  return (
    <NavLink to={"/restaurants/" + id}>
      <div className="restaurant-card">
        <img src={IMG_URL + cloudinaryImageId} alt={name} />
        <div className="restaurant-info">
          <h3>{name}</h3>
          <p>{cuisines.join(", ")}</p>
          <div className="restuarant-group">
            <p>
              {avgRating ? avgRating : "New"}
              {avgRating ? (
                <span>
                  <img className="star" src={star} alt="star-rating" />
                </span>
              ) : (
                ""
              )}
            </p>
            <span></span>
            <p>{deliveryTime} mins</p>
            <span></span>
            <p>{costForTwo}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default RestaurantCard;
