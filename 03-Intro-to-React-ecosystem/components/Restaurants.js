import React from "react";
import data from "../data.js";
import RestaurantCard from "./RestaurantCard.js";

export default Restaurants = () => {
  return (
    <div className="restaurants-list">
      <section className="search-container">Search</section>

      <section className="restaurant-cards">
        <h2 className="restaurants-title">Restaurants that you will like</h2>
        <div className="card-container">
          {data.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
