import { Suspense } from "react";
import { Await, defer, json, useLoaderData, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const Menu = () => {
  const { menus } = useLoaderData();

  //   const { resId } = useParams();
  //   console.log(resId);
  // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=453068 -> fetch request has to be made

  return (
    <Suspense fallback={<Shimmer />}>
      <Await resolve={menus}>{/* <MenuContainer menus={menus} /> */}</Await>
    </Suspense>
  );
};

export default Menu;

const menuLoader = async (resId) => {
  const response = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=" +
      resId
  );

  if (!response.ok) {
    return json(
      { status: 500 },
      { statusText: "could not found the restaurant" }
    );
  }

  const data = await response.json();

  console.log(data);

  return data;
};

export const loader = ({ params, req }) => {
  const { resId } = params;
  return defer({
    menus: menuLoader(resId),
  });
};
