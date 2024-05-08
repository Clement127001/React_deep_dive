import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeWatchLater } from "../utils/movieSlice";
import { IMAGE_BASE_URL } from "../utils/constants";

const MovieListCard = ({ item, watchLater }) => {
  const dispatch = useDispatch();

  const removeWatchLaterHandler = () => {
    dispatch(removeWatchLater(item.id));
  };

  return (
    <div>
      <Link
        to={"/movie/" + item.id}
        className="relative cursor-pointer w-[300px] h-[300px]  bg-gray-400 rounded-lg bg-image hover:scale-110 transition-all mb-10"
        key={item.title}
      >
        <img
          src={IMAGE_BASE_URL + "w300" + item.poster_path}
          alt={item.title}
          className="rounded-lg max-w-[300px] max-sm:max-w-[200px] h-[300px]  max-sm:h-[200px] object-cover"
          loading="lazy"
        />

        <span className="absolute top-2 left-2 bg-red-600 text-white font-sans py-[4px] px-3 rounded-lg text-sm font-semibold">
          {item.vote_average.toFixed(1)}
        </span>
      </Link>

      {watchLater && (
        <button
          className="mt-2 bg-black text-white font-sans py-2 px-3 rounded-lg text-sm font-semibold cursor-pointer"
          onClick={removeWatchLaterHandler}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default MovieListCard;
