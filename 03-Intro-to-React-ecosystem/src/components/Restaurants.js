import React, { useState } from "react";
import data from "../utils/data.js";
import RestaurantCard from "./RestaurantCard.js";

export default Restaurants = () => {
  //this is also fine
  // const arr = useState(data);
  // const [restaurantList, setRestaurantList] = arr;

  const [restaurantList, setRestaurantList] = useState(data);

  function filterRestaurants() {
    const newRestaurants = restaurantList.filter((res) => res.avgRating >= 4);

    setRestaurantList(newRestaurants);
  }
  return (
    <div className="restaurants-list">
      <section>
        <button className="primary-btn" onClick={filterRestaurants}>
          Top Rated
        </button>
      </section>

      <section className="restaurant-cards">
        <h2 className="restaurants-title">Restaurants that you will like</h2>
        <div className="card-container">
          {restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </section>
    </div>
  );
};
