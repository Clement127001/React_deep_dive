import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Shimmer from "./Shimmer.js";

import RestaurantsContainer from "./RestaurantsContainer.js";

import { close, foodNotFound } from "../asset/index.js";

export default Restaurants = () => {
  //extracting the data from the loader
  const { res } = useLoaderData();

  // return restaurantList.length == 0 ? (
  //   <Shimmer />
  // ) : (
  //   <div className="restaurants-list">
  //     <section className="filters">
  //       <button className="top-rated" onClick={filterRestaurants}>
  //         Top Rated
  //       </button>

  //       <div className="search-container">
  //         <input
  //           type="text"
  //           placeholder="Search your favorite spot"
  //           value={filterText ? filterText : ""}
  //           onChange={(e) => setFilterText(e.target.value)}
  //         />
  //         {filterText?.length > 0 ? (
  //           <span onClick={clearFitlerText}>
  //             <img className="close" src={close} />
  //           </span>
  //         ) : (
  //           ""
  //         )}

  //         <button onClick={searchRestaurants} className="secondary-btn">
  //           Search
  //         </button>
  //       </div>
  //     </section>

  //     <section className="restaurant-cards">
  //       <h2 className="restaurants-title">Restaurants that you will like</h2>
  //       <div className="card-container">
  //         {filteredRestaurantList.length > 0 ? (
  //           filteredRestaurantList.map((restaurant) => (
  //             <RestaurantCard
  //               key={restaurant.info.id}
  //               resData={restaurant.info}
  //             />
  //           ))
  //         ) : (
  //           <div className="not-found">
  //             <img src={foodNotFound} />
  //           </div>
  //         )}
  //       </div>
  //     </section>
  //   </div>
  // );
  return (
    <Suspense fallback={<Shimmer />}>
      <Await resolve={res}>
        {(data) => <RestaurantsContainer data={data} />}
      </Await>
    </Suspense>
  );
};

const restaurantsLoader = async () => {
  const response = await fetch(
    "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const data = await response.json();
  const resData =
    data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return resData;
};

export const loader = () => {
  return defer({
    res: restaurantsLoader(),
  });
};

//  <div className="restaurants-list">
//    <section className="filters">
//      {" "}
//      <button className="top-rated" onClick={filterRestaurants}>
//        {" "}
//        Top Rated{" "}
//      </button>
//      <div className="search-container">
//        <input
//          type="text"
//          placeholder="Search your favorite spot"
//          value={filterText ? filterText : ""}
//          onChange={(e) => setFilterText(e.target.value)}
//        />
//        {filterText?.length > 0 ? (
//          <span onClick={clearFitlerText}>
//            <img className="close" src={close} />
//          </span>
//        ) : (
//          ""
//        )}

//        <button onClick={searchRestaurants} className="secondary-btn">
//          Search
//        </button>
//      </div>
//    </section>

//    <section className="restaurant-cards">
//      <h2 className="restaurants-title">Restaurants that you will like</h2>
//      <div className="card-container">
//        {data.length > 0 ? (
//          data.map((restaurant) => (
//            <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
//          ))
//        ) : (
//          <div className="not-found">
//            <img src={foodNotFound} />
//          </div>
//        )}
//      </div>
//    </section>
//  </div>;
