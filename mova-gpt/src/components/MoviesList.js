import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="w-full">
      <h1 className="text-white font-sans  text-3xl">{title}</h1>

      <div className="flex overflow-scroll py-6 gap-4 mb-4">
        {movies &&
          movies.map((item) => (
            <div className="relative cursor-pointer">
              <img
                src={IMAGE_BASE_URL + "w300" + item.poster_path}
                className="rounded-lg min-w-[200px]"
              />

              <span className="absolute top-2 left-2 bg-red-600 text-white font-sans py-[4px] px-3 rounded-lg text-sm font-semibold">
                {item.vote_average.toFixed(1)}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
