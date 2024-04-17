import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchResults as obtainedSearchResults } from "../utils/constants";
import SearchShimmer from "./Shimmer/SearchShimmer";
import SearchItem from "./SearchItem";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const searchQuery = searchParams.get("q");

  const fetchSearchResults = async () => {
    // const reponse = await fetch(
    //   process.env.REACT_APP_YOUTUBE_SEARCH_LINK + searchQuery
    // );
    // const data = await reponse.json();

    // setSearchResults(data.items);

    setTimeout(() => {
      setSearchResults(obtainedSearchResults);
    }, 1000);
  };

  useEffect(() => {
    fetchSearchResults();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center my-10 gap-10">
      {!searchResults.length > 0 && <SearchShimmer />}
      {searchResults.length > 0 &&
        searchResults.map((item) => <SearchItem data={item} key={item.id} />)}
    </div>
  );
};

export default SearchResults;
