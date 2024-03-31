import { useEffect, useState } from "react";

const useUserInfo = (userName) => {
  const [userInfo, setUserInfo] = useState({
    name: "user_name",
    location: "user_location",
  });

  const fetchUser = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=37067"
    );

    setUserInfo({ name: "Clement", location: "sirkazhi" });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return userInfo;
};

export default useUserInfo;

//changing the normal variable won't  cause the react to re render that's why we use state variable

// let userInfo = { name: "Dummy_name", location: "dummy_location" };

// setTimeout(() => {
//   console.log("I updated the normal variable");
//   userInfo = { name: userName, location: "Sirkazhi" };
// }, 1000);
