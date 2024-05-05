import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeWatchLater } from "../utils/movieSlice";
import { IMAGE_BASE_URL } from "../utils/constants";

const MovieListCard = ({ item, watchLater }) => {
  const dispatch = useDispatch();

  const removeWatchLaterHandler = () => {
    console.log(item);
    dispatch(removeWatchLater(item.id));
  };

  return (
    <div>
      <Link
        to={"/movie/" + item.id}
        className="relative cursor-pointer max-w-[300px] h-[300px] bg-gray-400 rounded-lg bg-image hover:scale-105 transition-all"
        key={item.title}
      >
        <img
          src={IMAGE_BASE_URL + "w300" + item.poster_path}
          alt={item.title}
          className="rounded-lg max-w-[300px] h-[300px] object-cover"
          loading="lazy"
        />

        <span className="absolute top-2 left-2 bg-red-600 text-white font-sans py-[4px] px-3 rounded-lg text-sm font-semibold">
          {item.vote_average.toFixed(1)}
        </span>
      </Link>

      {watchLater && (
        <span
          className=" bg-black text-white font-sans py-2 px-3 rounded-lg text-sm font-semibold cursor-pointer mt-2"
          onClick={removeWatchLaterHandler}
        >
          Remove
        </span>
      )}
    </div>
  );
};

export default MovieListCard;
