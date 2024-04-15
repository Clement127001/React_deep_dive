import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/Store/sideBarSlice";
import { hamBurger, logo, search, user } from "../assets";
import { cacheSearchResult } from "../utils/Store/searchSlice";
const Header = () => {
  //search functionality - auto suggestion
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchResults = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const hamBurgerClikHandler = () => {
    dispatch(toggleSideBar());
  };

  const fetchSuggestions = async () => {
    const response = await fetch(
      process.env.REACT_APP_YOUTUBE_SUGGESTION_LINK + searchInput
    );
    const data = await response.json();

    setSuggestions(data[1]);
    dispatch(cacheSearchResult({ [searchInput]: data[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchResults[searchInput]) {
        setSuggestions(searchResults[searchInput]);
      } else {
        fetchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  return (
    <div className="flex justify-between items-center shadow-lg">
      <div className="flex justify-center items-center">
        <img
          src={hamBurger}
          width={24}
          alt="sidebar control"
          className=" cursor-pointer ml-5"
          onClick={hamBurgerClikHandler}
        />
        <NavLink to="/">
          <img src={logo} width={160} alt="home" />
        </NavLink>
      </div>

      <div className="w-[500px]">
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search your favorite"
            className="border-2 border-gray-200 p-2 pl-4  w-full rounded-full rounded-r-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <div className="border-2 border-gray-200 p-2  bg-gray-200 border-l-0 rounded-r-full cursor-pointer">
            <img src={search} alt="search" width={27} />
          </div>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <ul className=" w-[500px] absolute z-10 bg-white py-4 px-6 rounded-lg shadow-lg">
            {suggestions.map((item) => (
              <Link
                to={"/search?q=" + item}
                key={item}
                className="flex mb-4 gap-4 items-center"
              >
                <img src={search} alt="search" width={24} />
                <span className="font-sans">{item}</span>
              </Link>
            ))}
          </ul>
        )}
      </div>

      <div className="h-fit cursor-pointer">
        <img src={user} alt="user-img" width={36} />
      </div>
    </div>
  );
};

export default Header;
