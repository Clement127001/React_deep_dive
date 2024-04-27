import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSearchResults = () => {
  const moviesName = useSelector((store) => store.search.movieNames);
  const movieLists = useSelector((store) => store.search.movieLists);
  const completedSearch = useSelector((store) => store.search.completedSearch);

  if (moviesName == null || (movieLists == null && completedSearch == true))
    return (
      <button className="w-[100px] h-fit  font-sans text-xl text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600 mt-6  ">
        Loading ...
      </button>
    );
  return (
    <div className="w-full relative my-12 sm:pl-12 pl-4">
      {moviesName.map((movie, index) => (
        <MoviesList title={movie} key={movie} movies={movieLists[index]} />
      ))}
    </div>
  );
};

export default GptSearchResults;
