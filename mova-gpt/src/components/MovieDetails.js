import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWatchLater } from "../utils/movieSlice";
import { IMAGE_BASE_URL } from "../utils/constants";

const MovieDetails = ({ movieDetail }) => {
  const dispatch = useDispatch();
  const [animated, setAnimated] = useState(0);

  const {
    poster_path,
    id,
    backdrop_path,
    original_title,
    overview,
    vote_average,
    genres,
  } = movieDetail;

  const addToWatchLaterHandler = () => {
    dispatch(addWatchLater({ id, poster_path, original_title, vote_average }));

    setAnimated(1);
  };

  return (
    <div className="relative w-full h-[700px] max-lg:h-[660px]">
      {/* backdrop and overlay */}
      <div className="absolute lg:top-12 top-6 lg:left-[10%] lg:w-[80%] rounded-xl z-0 shadow-lg shadow-zinc-600 left-[5%] w-[90%]">
        <img
          src={IMAGE_BASE_URL + "w1280" + backdrop_path}
          alt={original_title}
          className="w-full 
     object-cover rounded-xl h-[600px] bg-gray-400 bg-image"
        />
      </div>

      <div className="absolute lg:top-12 top-6  lg:left-[10%] lg:w-[80%] bg-gradient-to-br from-black h-[600px] rounded-xl  z-1 left-[5%] w-[90%] "></div>

      {/* actual content */}
      <div className="absolute lg:top-12 top-6 lg:left-[10%] lg:w-[80%] left-[5%] w-[90%] flex lg:flex-row flex-col lg:gap-16 gap-4 lg:p-8 p-4 h-[600px] z-11">
        <img
          src={IMAGE_BASE_URL + "w500" + poster_path}
          className={`lg:w-[300px] w-[180px] h-fit rounded-xl bg-image bg-gray-400`}
          alt={original_title}
        />

        <div className="">
          <h2 className="text-white font-sans font-semibold text-3xl lg:text-5xl max-w-[500px] line-clamp-2 leading-8">
            {original_title}
          </h2>
          <p className="text-zinc-200 lg:text-lg  text-lg md:line-clamp-4 line-clamp-3 mt-4 max-w-[400px]">
            {overview}
          </p>
          <ul className="flex gap-2 mt-4">
            {genres.map((item) => (
              <li className="px-[6px] py-2 rounded-lg bg-gray-600 text-white font-sans text-xs lg:px-4 lg:py-2 lg:text-[14px] font-semibold">
                {item.name}
              </li>
            ))}
          </ul>

          {vote_average && (
            <div className="mt-8 max-sm:mt-4 flex gap-4 items-center">
              <p className="text-white font-semibold text-lg border-2 border-solid border-white  px-2 rounded-lg">
                {vote_average.toFixed(1)}
              </p>

              <button
                className={`text-white bg-red-600 py-2 px-4 font-semibold font-sans lg:text-lg text-[14px] rounded-lg ${
                  animated === 1 ? "scale-up" : ""
                }`}
                onAnimationEnd={() => setAnimated(0)}
                onClick={addToWatchLaterHandler}
              >
                Watch Later
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
