import React from "react";

import MovieListCard from "./MovieListCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="w-full">
      <h1 className="text-white font-sans  text-3xl">{title}</h1>

      <div className="flex overflow-scroll py-6 gap-4 mb-4">
        {movies &&
          movies.map((item) =>
            item.poster_path ? <MovieListCard key={item.id} item={item} /> : ""
          )}
      </div>
    </div>
  );
};

export default MoviesList;
