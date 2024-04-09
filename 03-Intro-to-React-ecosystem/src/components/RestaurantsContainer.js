import React, { useState } from "react";
import RestaurantCard, { withHighlyRated } from "./RestaurantCard.js";

import { close, foodNotFound } from "../asset/index.js";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus.js";

const RestaurantsContainer = ({ data }) => {
  const [restaurantList, setRestaurantList] = useState(data);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState(data);
  const [filterText, setFilterText] = useState(null);

  // console.log(filteredRestaurantList);

  //filter and search functionalities
  const filterRestaurants = () => {
    if (filteredRestaurantList.length < restaurantList.length) {
      setFilteredRestaurantList(data);
      return;
    }
    const newRestaurants = restaurantList.filter(
      (res) => res.info.avgRating >= 4.5
    );

    setFilteredRestaurantList(newRestaurants);
  };

  const searchRestaurants = () => {
    if (filterText) {
      const newRestaurants = restaurantList.filter((res) =>
        res.info.name.toLowerCase().includes(filterText.trim().toLowerCase())
      );
      setFilteredRestaurantList(newRestaurants);
    }
  };

  const clearFitlerText = () => {
    setFilterText("");
    setFilteredRestaurantList(restaurantList);
  };

  const priceFilterHandler = () => {
    const newResList = restaurantList.filter((item) => {
      if (
        Number(item?.info?.costForTwo.slice(1, 4)) >= 300 &&
        Number(item?.info?.costForTwo.slice(1, 4)) <= 500
      ) {
        return true;
      } else return false;
    });

    setFilteredRestaurantList(newResList);
  };

  const vegFilterHandler = () => {
    const newResList = restaurantList.filter((item) => item?.info?.veg);

    setFilteredRestaurantList(newResList);
  };

  const fastDeliveryHandler = () => {
    const newResList = restaurantList.filter(
      (item) => item?.info?.sla?.deliveryTime <= 30
    );

    setFilteredRestaurantList(newResList);
  };

  const onlineStatus = useOnlineStatus();

  const RestaurantCardHighlyRated = withHighlyRated(RestaurantCard);

  return (
    <div className="restaurants-list min-h-[80vh]">
      <section className="filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search your favorite spot"
            value={filterText ? filterText : ""}
            onChange={(e) => setFilterText(e.target.value)}
          />
          {filterText?.length > 0 ? (
            <span onClick={clearFitlerText}>
              <img className="close" src={close} alt="clear" />
            </span>
          ) : (
            ""
          )}

          <button onClick={searchRestaurants} className="secondary-btn btn">
            Search
          </button>
        </div>

        <button
          className=" font-sans px-6 py-3 rounded-full text-gray-400 border-2 border-solid border-gray-400 "
          onClick={filterRestaurants}
        >
          {filteredRestaurantList.length === restaurantList.length
            ? "Top Rated"
            : "Show all"}
        </button>

        <button
          className=" font-sans px-6 py-3 rounded-full text-gray-400 border-2 border-solid border-gray-400"
          onClick={priceFilterHandler}
        >
          &#8377; 300 - 500
        </button>

        <button
          className=" font-sans px-6 py-3 rounded-full text-gray-400 border-2 border-solid border-gray-400"
          onClick={vegFilterHandler}
        >
          Veg Only
        </button>

        <button
          className=" font-sans px-6 py-3 rounded-full text-gray-400 border-2 border-solid border-gray-400"
          onClick={fastDeliveryHandler}
        >
          Faster Delivery
        </button>
      </section>

      <section className="restaurant-cards mx-auto">
        <h2 className="restaurants-title">Restaurants that you will like</h2>

        <div className="card-container mx-16">
          {filteredRestaurantList.length > 0 ? (
            filteredRestaurantList.map((restaurant) =>
              restaurant.info.avgRating >= 4.6 ? (
                <RestaurantCardHighlyRated
                  key={restaurant.info.id}
                  resData={restaurant.info}
                />
              ) : (
                <RestaurantCard
                  key={restaurant.info.id}
                  resData={restaurant.info}
                />
              )
            )
          ) : (
            <div className="not-found">
              <img src={foodNotFound} alt="food-not-found" />
            </div>
          )}
        </div>

        {!onlineStatus && (
          <div className="offline-indicator">
            <h3>You are offline</h3>
            <p>Please connect to internet</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default RestaurantsContainer;
