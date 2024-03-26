import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.js";

export default RestaurantsContainer = ({ data }) => {
  const [restaurantList, setRestaurantList] = useState(data);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState(data);
  const [filterText, setFilterText] = useState(null);

  // //filter and search functionalities
  const filterRestaurants = () => {
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
  };

  useEffect(() => {
    if (filterText === "") {
      setFilteredRestaurantList(restaurantList);
    }
  }, [filterText]);

  return (
    <div className="restaurants-list">
      <section className="filters">
        {" "}
        <button className="top-rated" onClick={filterRestaurants}>
          {" "}
          Top Rated{" "}
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
