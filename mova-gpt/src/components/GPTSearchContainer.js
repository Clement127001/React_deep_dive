import React from "react";
import GptSearch from "./GptSearch.js";
import GptSearchResults from "./GptSearchResults.js";
import { useSelector } from "react-redux";

const GPTSearchContainer = () => {
  const completedSearch = useSelector((store) => store.search.completedSearch);

  return (
    <div className="relative flex flex-col w-full min-h-screen items-center pt-24 bg-[#121418]">
      <GptSearch />
      {completedSearch && <GptSearchResults />}
    </div>
  );
};

export default GPTSearchContainer;
