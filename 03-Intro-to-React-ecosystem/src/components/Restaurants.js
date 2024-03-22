import React, { useState, useEffect } from "react";
import data from "../utils/data.js";
import RestaurantCard from "./RestaurantCard.js";

export default Restaurants = () => {
  //this is also fine
  // const arr = useState(data);
  // const [restaurantList, setRestaurantList] = arr;

  const [restaurantList, setRestaurantList] = useState([]);

  function filterRestaurants() {
    const newRestaurants = restaurantList.filter(
      (res) => res.info.avgRating >= 4.5
    );

    setRestaurantList(newRestaurants);
  }

  const fetchResturants = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchResturants();
  }, []);

  restaurantList?.map((res) => console.log(res.info.id));

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
          {restaurantList?.map((restaurant) => (
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
