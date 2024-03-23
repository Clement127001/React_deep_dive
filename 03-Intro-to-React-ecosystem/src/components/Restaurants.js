import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";

import { close, foodNotFound } from "../asset/index.js";

export default Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [filterText, setFilterText] = useState(null);

  //filter and search functionalities
  const filterRestaurants = () => {
    const newRestaurants = restaurantList.filter(
      (res) => res.info.avgRating >= 4.6
    );

    setFilteredRestaurantList(newRestaurants);
  };

  const fetchResturants = async () => {
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const resData =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(resData);
    setFilteredRestaurantList(resData);
  };

  const searchRestaurants = () => {
    if (filterText) {
      setFilteredRestaurantList((prev) =>
        prev.filter((res) =>
          res.info.name.toLowerCase().includes(filterText.trim().toLowerCase())
        )
      );
    }
  };

  const clearFitlerText = () => {
    setFilterText("");
  };

  useEffect(() => {
    if (filterText === null) fetchResturants();
    else if (filterText === "") {
      setFilteredRestaurantList(restaurantList);
    }
  }, [filterText]);

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurants-list">
      <section className="filters">
        <button className="top-rated" onClick={filterRestaurants}>
          Top Rated
        </button>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search your favorite spot"
            value={filterText ? filterText : ""}
            onChange={(e) => setFilterText(e.target.value)}
          />
          {filterText?.length > 0 ? (
            <span onClick={clearFitlerText}>
              <img className="close" src={close} />
            </span>
          ) : (
            ""
          )}

          <button onClick={searchRestaurants} className="secondary-btn">
            Search
          </button>
        </div>
      </section>

      <section className="restaurant-cards">
        <h2 className="restaurants-title">Restaurants that you will like</h2>
        <div className="card-container">
          {filteredRestaurantList.length > 0 ? (
            filteredRestaurantList.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
            ))
          ) : (
            <div className="not-found">
              <img src={foodNotFound} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
