import React from "react";
import { useSelector } from "react-redux";
import MovieListCard from "./MovieListCard";
import { Link } from "react-router-dom";

const WatchLater = () => {
  const watchLater = useSelector((store) => store.movie.moviesList.watchLater);

  const watchLaterLen = Object.keys(watchLater).length;

  let watchLaterItems = [];

  for (const movie in watchLater) {
    watchLaterItems.push(
      <MovieListCard key={movie} item={watchLater[movie]} watchLater={true} />
    );
  }

  return (
    <div className=" min-h-screen w-full bg-[#121418]">
      {watchLaterLen === 0 ? (
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center mt-10">
            <p className="font-sans text-white ">
              No movies try to add some movies
            </p>
            <Link
              to="/browse"
              className="font-sans text-xl text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600 mt-6 "
            >
              Add Movies
            </Link>
          </div>
        </div>
      ) : (
        <div className="p-8">
          <h3 className="font-sans text-white font-semibold text-2xl">
            Watch List
          </h3>
          <div className="flex flex-wrap gap-4 mt-4">{watchLaterItems}</div>
        </div>
      )}
    </div>
  );
};

export default WatchLater;
