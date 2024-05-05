import React from "react";
import { useSelector } from "react-redux";
import MovieListCard from "./MovieListCard";

const WatchLater = () => {
  const watchLater = useSelector((store) => store.movie.moviesList.watchLater);

  const watchLaterLen = Object.keys(watchLater).length;

  let watchLaterItems = [];

  for (const movie in watchLater) {
    watchLaterItems.push(
      <MovieListCard key={movie} item={watchLater[movie]} watchLater={true} />
    );
  }

  return watchLaterLen === 0 ? (
    <p>No movies in the watch later try to add some</p>
  ) : (
    <div className="m-8">
      <div className="flex flex-wrap gap-4">{watchLaterItems}</div>
    </div>
  );
};

export default WatchLater;
