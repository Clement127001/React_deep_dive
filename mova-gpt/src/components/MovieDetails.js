import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants";

const MovieDetails = ({ movieDetail }) => {
  const {
    poster_path,
    backdrop_path,
    id,
    original_title,
    casts,
    overview,
    vote_average,
    genres,
  } = movieDetail;

  return (
    <div className="relative bg-[#121418] w-full h-screen">
      <div className="absolute top-12 left-[5%] w-[90%] rounded-xl z-0">
        <img
          src={IMAGE_BASE_URL + "w1280" + backdrop_path}
          alt={original_title}
          className="h-full w-full 
     object-cover rounded-xl"
        />
      </div>

      <div className="absolute top-12 left-[5%]  bg-gradient-to-br from-black w-[90%] h-full rounded-xl  z-10"></div>
    </div>
  );
};

export default MovieDetails;
