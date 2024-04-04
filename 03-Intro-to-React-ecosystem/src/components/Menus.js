import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import MenuContainer from "./MenuContainer";
import MenuShimmer from "./Shimmers/MenuShimmer";
const Menu = () => {
  const { menus } = useLoaderData();
  return (
    <Suspense fallback={<MenuShimmer />}>
      <Await resolve={menus}>
        {(menuList) => <MenuContainer menus={menuList} />}
      </Await>
    </Suspense>
  );
};

export default Menu;

const menuLoader = async (resId) => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const user = JSON.parse(userData);
  } else {
    window.location.href = "/login";
    return;
  }

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
  return data;
};

export const loader = ({ params, req }) => {
  const { resId } = params;
  return defer({
    menus: menuLoader(resId),
  });
};
