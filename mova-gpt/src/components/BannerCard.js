import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants";
// import { updateCurrentMovie } from "../utils/movieSlice";
// import { useDispatch } from "react-redux";

const BannerCard = ({ movie, onUpdate, active }) => {
  const { id, poster_path, original_title } = movie;
  const updateCurrentMovieHandler = () => {
    onUpdate(id);
  };

  return (
    <img
      src={IMAGE_BASE_URL + "w154" + poster_path}
      alt={original_title}
      loading={active === id ? "eager" : "lazy"}
      onClick={updateCurrentMovieHandler}
      className={`sm:w-[200px] w-[130px] h-full rounded-lg cursor-pointer ${
        active === id ? "opacity-100" : "opacity-80"
      }`}
    />
  );
};

export default BannerCard;
