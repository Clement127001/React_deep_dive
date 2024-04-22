import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Shimmer from "./Shimmers/Shimmer.js";

import RestaurantsContainer from "./RestaurantsContainer.js";

export default Restaurants = () => {
  //extracting the data from the loader
  const { res } = useLoaderData();

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
